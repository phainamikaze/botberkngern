'use strict';
const helpers = require('messenger-api-helpers');
const sendApi = helpers.send;
module.exports.handler = (event, context,callback) => {
  console.log(JSON.stringify(event));
  let result = [];
  event.Records.forEach(record => {
    result.push(new Promise((resolve,reject)=>{
      const owner = record.dynamodb.Keys.owner.S;
      const createtime = record.dynamodb.Keys.createtime.S;
      if(record.eventName==="INSERT"){
        sendApi.sendListCreated(owner, owner, createtime, record.dynamodb.NewImage.title.S).then(()=>{
          resolve();
        });
      }else if(record.eventName==="REMOVE"){
        resolve();
      }else{
        resolve();
      }

    }));
  });

  Promise.all(result).then(()=>{
    callback(null)
  });
};