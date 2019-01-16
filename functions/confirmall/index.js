'use strict';
const AWS = require('aws-sdk');

const ITEM_TABLE = process.env.ITEM_TABLE;
const AWS_REGION = process.env.AWS_REGION;
const docClient = new AWS.DynamoDB.DocumentClient({region: AWS_REGION});
module.exports.handler = async (event, context) => {
  const body = JSON.parse(event.body);
  console.log(body);
  const params = {
    TableName: ITEM_TABLE,
    ExpressionAttributeValues: {
        ":ownliststatus": body.listid+"_PAID"
    },
    IndexName:"ownliststatus-createtime-index",
    KeyConditionExpression:"ownliststatus = :ownliststatus"
  };

  try {
    const items = await docClient.query(params).promise();
    const updateparam = await genParams(items,body);
    if(updateparam==='error'){
        return { 
            statusCode: 400, 
            headers: {
                "Access-Control-Allow-Origin" : "*", // Required for CORS support to work
                "Access-Control-Allow-Credentials" : true // Required for cookies, authorization headers with HTTPS
            },
            body: JSON.stringify({ msg:"amount error" }) 
            };
    }else{
        await docClient.transactWrite(updateparam).promise();
        return { 
        statusCode: 200, 
            headers: {
                "Access-Control-Allow-Origin" : "*", // Required for CORS support to work
                "Access-Control-Allow-Credentials" : true // Required for cookies, authorization headers with HTTPS
            },
            body: JSON.stringify({ listid:body.listid }) 
        };
    }
  } catch(error) {
    return {
      statusCode: 400,
      error: `Could not post: ${error.stack}`
    };
  }
};


function genParams(items,body){
    return new Promise((resolve,reject)=>{
        let result = [];
        let sum = 0;
        items.Items.forEach(element => {
            sum+=Number(element.amount);
            result.push(new Promise((res,rej)=>{
                let vals = {
                    user:body.viewer,
                    msg:"อัพเดทสถานะเป็น ยืนยัน",
                    acttime:Date.now().toString(),
                  };
                res({
                    Update: {
                        TableName: ITEM_TABLE,
                        Key: { 
                            ownlist:element.ownlist,
                            createtime: element.createtime 
                        },
                        UpdateExpression: "set #status = :status ,#act = list_append(:vals,#act) , #ownliststatus = :ownliststatus",
                        ExpressionAttributeNames:{
                            "#status":"status",
                            "#act":"act",
                            "#ownliststatus":"ownliststatus"
                        },
                        ExpressionAttributeValues:{
                            ":status":"CONFIRM",
                            ":vals":[vals],
                            ":ownliststatus":body.listid+"_CONFIRM"
                        },
                    }
                })
            }));
        });
        Promise.all(result).then((resitem)=>{
            if(sum===Number(body.amount)){
                resolve({
                    TransactItems:resitem
                });
            }else{
                resolve('error');
            }
            
        })
    });
}