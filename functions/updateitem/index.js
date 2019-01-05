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
    Key: {
      ownlist: body.listid,
      createtime: body.createtime
    },
    UpdateExpression: "set #status = :status",
    ExpressionAttributeNames:{
      "#status":"status",
    },
    ExpressionAttributeValues:{
        ":status":body.newstatus,
    },
    ReturnValues:"ALL_NEW"
  };
  try {
    const data = await docClient.update(params).promise();
    return { 
      statusCode: 200, 
      headers: {
        "Access-Control-Allow-Origin" : "*", // Required for CORS support to work
        "Access-Control-Allow-Credentials" : true // Required for cookies, authorization headers with HTTPS
      },
      body: JSON.stringify({ item: data.Attributes }) };
  } catch(error) {
    return {
      statusCode: 400,
      error: `Could not post: ${error.stack}`
    };
  }
};