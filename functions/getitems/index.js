'use strict';
const AWS = require('aws-sdk');

const ITEM_TABLE = process.env.ITEM_TABLE;
const AWS_REGION = process.env.AWS_REGION;
const docClient = new AWS.DynamoDB.DocumentClient({region: AWS_REGION});
module.exports.handler = async (event, context) => {
  //const body = JSON.parse(event.body);
  const listid = event.pathParameters.id;
  const params = {
    TableName: ITEM_TABLE,
    KeyConditionExpression: "ownlist = :ownlist",
    ExpressionAttributeValues: {
        ":ownlist": listid
    },
    ScanIndexForward:false
  };
  try {
    const data = await docClient.query(params).promise();
    return { 
      statusCode: 200, 
      headers: {
        "Access-Control-Allow-Origin" : "*", // Required for CORS support to work
        "Access-Control-Allow-Credentials" : true // Required for cookies, authorization headers with HTTPS
      },
      body: JSON.stringify({ items:data.Items }) };
  } catch(error) {
    return {
      statusCode: 400,
      error: `Could not post: ${error.stack}`
    };
  }
};