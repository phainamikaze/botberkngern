'use strict';
const delitems = require('./delitems');

module.exports.handler = (event, context,callback) => {
  console.log(JSON.stringify(event));
  let result = [];
  event.Records.forEach(record => {
    result.push(new Promise((resolve,reject)=>{
      const owner = record.dynamodb.Keys.owner.S;
      const createtime = record.dynamodb.Keys.createtime.S;
      if(record.eventName==="INSERT"){
        resolve()
      }else if(record.eventName==="REMOVE"){
        delitems.del(owner, createtime).then(()=>{
          resolve();
        });
      }else{
        resolve();
      }

    }));
  });

  Promise.all(result).then(()=>{
    callback(null)
  });
};