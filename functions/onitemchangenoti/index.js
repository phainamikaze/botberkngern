'use strict';
const AWS = require('aws-sdk');

const LIST_TABLE = process.env.LIST_TABLE;
const AWS_REGION = process.env.AWS_REGION;
const docClient = new AWS.DynamoDB.DocumentClient({region: AWS_REGION});
const helpers = require('messenger-api-helpers');
const sendApi = helpers.send;
module.exports.handler = (event, context,callback) => {
  console.log(JSON.stringify(event));
  let result = [];
  event.Records.forEach(record => {
    result.push(new Promise((resolve,reject)=>{
      const ownlist = record.dynamodb.Keys.ownlist.S;
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
            getListname(owner,createtime).then((list)=>{
              return list.title;
            }).then((listname)=>{
              return sendApi.sendItemUpdated(recipientId, owner, createtime,listname,record.dynamodb.NewImage.details.S)
            }).then(()=>{
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

const getListname = (owner,createtime)=>{
  return new Promise((resolve,reject)=>{
    const params = {
      TableName: LIST_TABLE,
      Key: {
        owner: owner,
        createtime: createtime
      },
    };
    docClient.get(params,function(err,data){
      if(err){
        resolve('ไม่มีชื่อ');
      }else{
        resolve(data.Item);
      }
    });
  });
}