'use strict';
const AWS = require('aws-sdk');

const ITEM_TABLE = process.env.ITEM_TABLE;
const AWS_REGION = process.env.AWS_REGION;
const docClient = new AWS.DynamoDB.DocumentClient({region: AWS_REGION});

module.exports.del = (owner, createtime) => {
    return new Promise((resolve,reject)=>{
        getitems(owner+"_"+createtime).then((result)=>{
            console.log(JSON.stringify(result));
            return result.Items;
        }).then((items)=>{
            return deleteing(items);
        }).then(()=>{
            console.log('deleteing ok');
            resolve();
        }).catch((e)=>{
            console.error(JSON.stringify(e));
            resolve();
        });
    });
};

const deleteing = (items)=>{
    return new Promise((resolve,reject)=>{
        let result = [];
        items.forEach(element => {
            result.push(new Promise((res,rej)=>{
                res({
                    DeleteRequest: {
                        Key: { 
                            ownlist: element.ownlist,
                            createtime: element.createtime
                        }
                    }
                });
            }));
        });

        Promise.all(result).then((resitem)=>{
            let params = {
                RequestItems: {}
            };
            params.RequestItems[ITEM_TABLE] = resitem;
            docClient.batchWrite(params,(err,data)=>{
                if (err){
                    console.log(err);
                }else{
                    console.log(data);
                    resolve();
                }
            }); 
        })
    });
}

const getitems = async (listid) => {
  const params = {
    TableName: ITEM_TABLE,
    ExpressionAttributeValues: {
        ":ownlist":listid
    },
    KeyConditionExpression: "ownlist = :ownlist",
    ScanIndexForward:false
  };
  console.log(JSON.stringify(params));
  try {
    const data = await docClient.query(params).promise();
    return data;
  } catch(error) {
    return [];
  }
};