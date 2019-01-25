'use strict';
const helpers = require('messenger-api-helpers');
const sendApi = helpers.send;
module.exports.handler = (event, context,callback) => {
  console.log(JSON.stringify(event));
  let result = [];
  event.Records.forEach(record => {
    result.push(new Promise((resolve,reject)=>{
      const ownlist = record.dynamodb.Keys.ownlist.S;
      const createtimeItem = record.dynamodb.Keys.createtime.S;
      const [owner,createtime] = ownlist.split("_");
      if(record.eventName==="MODIFY"){
        if(record.dynamodb.NewImage.status.S === record.dynamodb.OldImage.status.S){
          resolve();
        }else{
          let recipientId=null;
          const actionCreater = record.dynamodb.NewImage.act.L[0].M.user.S;
          const listlength = record.dynamodb.NewImage.act.L.length;
          console.log("listlength = "+listlength);
          console.log("actionCreater = "+actionCreater);
          for(let i=1;i<listlength;i++){
            console.log("i = "+i);
            console.log("record.dynamodb.NewImage.act.L[i].M.user.S = "+record.dynamodb.NewImage.act.L[i].M.user.S);
            if(!(actionCreater===record.dynamodb.NewImage.act.L[i].M.user.S)){
              recipientId = record.dynamodb.NewImage.act.L[i].M.user.S;
            }
          }
          console.log("recipientId = "+recipientId);
          if(recipientId===null){
            resolve();
          }else{
            sendApi.sendItemUpdated(recipientId, owner, createtime, 'title').then(()=>{
              resolve();
            });
          }
        }
      }else{
        resolve();
      }

    }));
  });

  Promise.all(result).then(()=>{
    callback(null)
  });
};