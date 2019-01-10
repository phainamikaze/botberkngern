'use strict';
const AWS = require('aws-sdk');

const LIST_TABLE = process.env.LIST_TABLE;
const AWS_REGION = process.env.AWS_REGION;
const docClient = new AWS.DynamoDB.DocumentClient({region: AWS_REGION});
module.exports.handler = (event, context,callback) => {
  //console.log(JSON.stringify(event));
  let result = [];
  event.Records.forEach(record => {
    result.push(new Promise((resolve,reject)=>{
      const [owner,createtime] = record.dynamodb.Keys.ownlist.S.split("_")
      let params = {
        TableName: LIST_TABLE,
        Key: {
          owner: owner,
          createtime: createtime
        },
        ExpressionAttributeNames:{},
        ExpressionAttributeValues:{},
        ReturnValues:"NONE"
      };
      if(record.eventName==="INSERT"){
        params.UpdateExpression = "set #attr = #attr + :amount";
        params.ExpressionAttributeValues[":amount"] = Number(record.dynamodb.NewImage.amount.N);
        if(record.dynamodb.NewImage.status.S==="NEW"){
          params.ExpressionAttributeNames["#attr"] = "newval";
        }else if(record.dynamodb.NewImage.status.S==="PAID"){
          params.ExpressionAttributeNames["#attr"] = "paid";
        }else if(record.dynamodb.NewImage.status.S==="CONFIRM"){
          params.ExpressionAttributeNames["#attr"] = "confirm";
        }
      }else if(record.eventName==="REMOVE"){
        params.UpdateExpression = "set #attr = #attr - :amount";
        params.ExpressionAttributeValues[":amount"] = Number(record.dynamodb.OldImage.amount.N);
        if(record.dynamodb.OldImage.status.S==="NEW"){
          params.ExpressionAttributeNames["#attr"] = "newval";
        }else if(record.dynamodb.OldImage.status.S==="PAID"){
          params.ExpressionAttributeNames["#attr"] = "paid";
        }else if(record.dynamodb.OldImage.status.S==="CONFIRM"){
          params.ExpressionAttributeNames["#attr"] = "confirm";
        }
      }else if(record.eventName==="MODIFY"){
        params.UpdateExpression = "set #attrnew = #attrnew + :amount , #attrold = #attrold - :amount";
        params.ExpressionAttributeValues[":amount"] = Number(record.dynamodb.OldImage.amount.N);

        if(record.dynamodb.NewImage.status.S==="NEW"){
          params.ExpressionAttributeNames["#attrnew"] = "newval";
        }else if(record.dynamodb.NewImage.status.S==="PAID"){
          params.ExpressionAttributeNames["#attrnew"] = "paid";
        }else if(record.dynamodb.NewImage.status.S==="CONFIRM"){
          params.ExpressionAttributeNames["#attrnew"] = "confirm";
        }

        if(record.dynamodb.OldImage.status.S==="NEW"){
          params.ExpressionAttributeNames["#attrold"] = "newval";
        }else if(record.dynamodb.OldImage.status.S==="PAID"){
          params.ExpressionAttributeNames["#attrold"] = "paid";
        }else if(record.dynamodb.OldImage.status.S==="CONFIRM"){
          params.ExpressionAttributeNames["#attrold"] = "confirm";
        }
      }
      docClient.update(params,(err,data)=>{
        if (err) {
          reject();
        }else{
          resolve();
        }
      });

    }));
  });

  Promise.all(result).then(()=>{
    callback(null)
  });
};