'use strict';
const AWS = require('aws-sdk');

const LIST_TABLE = process.env.LIST_TABLE;
const AWS_REGION = process.env.AWS_REGION;
const docClient = new AWS.DynamoDB.DocumentClient({region: AWS_REGION});
module.exports.handler = async (event, context) => {
  const body = JSON.parse(event.body);
  console.log(body);
  const [own,crt] = body.listid.split("_");
  const params = {
    TableName: LIST_TABLE,
    Key: {
      owner: own,
      createtime: crt
    },
    UpdateExpression: "set #sharedwith = :sharedwith",
    ExpressionAttributeNames:{
      "#sharedwith":"sharedwith",
    },
    ExpressionAttributeValues:{
        ":sharedwith":body.viewerId,
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