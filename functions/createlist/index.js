'use strict';
const AWS = require('aws-sdk');

const LIST_TABLE = process.env.LIST_TABLE;
const AWS_REGION = process.env.AWS_REGION;
const docClient = new AWS.DynamoDB.DocumentClient({region: AWS_REGION});
module.exports.handler = async (event, context) => {
  const body = JSON.parse(event.body);
  console.log(body);
  const params = {
    TableName: LIST_TABLE,
    Item: {
      owner: body.owner,
      createtime: Date.now().toString(),
      title: body.title? body.title:'no name'
    },
  };
  console.log(params);
  try {
    const data = await docClient.put(params).promise();
    return { 
      statusCode: 200, 
      headers: {
        "Access-Control-Allow-Origin" : "*", // Required for CORS support to work
        "Access-Control-Allow-Credentials" : true // Required for cookies, authorization headers with HTTPS
      },
      body: JSON.stringify({ id:(params.Item.owner+"_"+params.Item.createtime) }) };
  } catch(error) {
    return {
      statusCode: 400,
      error: `Could not post: ${error.stack}`
    };
  }
};