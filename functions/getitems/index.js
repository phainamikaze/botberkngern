'use strict';
const AWS = require('aws-sdk');

const ITEM_TABLE = process.env.ITEM_TABLE;
const AWS_REGION = process.env.AWS_REGION;
const docClient = new AWS.DynamoDB.DocumentClient({region: AWS_REGION});
module.exports.handler = async (event, context) => {
  console.log(event);
  const filter = event.queryStringParameters.filter;
  const listid = event.pathParameters.id;
  let params = {
    TableName: ITEM_TABLE,
    ExpressionAttributeValues: {
        ":ownlist": listid
    },
    ScanIndexForward:false
  };
  if(filter==="ALL"){
    params.KeyConditionExpression = "ownlist = :ownlist";
  }else{
    params.KeyConditionExpression = "ownlist = :ownlist and #status = :status";
    params.ExpressionAttributeNames = {};
    params.ExpressionAttributeNames["#status"] = "status";
    params.IndexName = "ownlist-status-index";
    if(filter==="NEW"){
      params.ExpressionAttributeValues[":status"]= "NEW";
    }else if(filter==="PAID"){
      params.ExpressionAttributeValues[":status"]= "PAID";
    }else if(filter==="CONFIRM"){
      params.ExpressionAttributeValues[":status"]= "CONFIRM";
    }else{
      return {
        statusCode: 400,
        error: `filter is invalid`
      };
    }
  }

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