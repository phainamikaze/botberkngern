'use strict';
const request = require('request');
const PAGE_ACCESS_TOKEN = process.env.PAGE_ACCESS_TOKEN;

module.exports.handler = async (event, context) => {
  const qs = event.queryStringParameters.qs;
  const userId = event.pathParameters.id;
  
  try {
    const data = await callRequest(userId,qs);
    return { 
      statusCode: 200, 
      headers: {
        "Access-Control-Allow-Origin" : "*", // Required for CORS support to work
        "Access-Control-Allow-Credentials" : true // Required for cookies, authorization headers with HTTPS
      },
      body: JSON.stringify({ data }) };
  } catch(error) {
    return { 
      statusCode: 200, 
      headers: {
        "Access-Control-Allow-Origin" : "*", // Required for CORS support to work
        "Access-Control-Allow-Credentials" : true // Required for cookies, authorization headers with HTTPS
      },
      body: JSON.stringify({ data:
        {
          "first_name": "noname",
          "last_name": "noname",
          "profile_pic": "notset",
          "id": userId
        }
      }) };
  }
};

const callRequest = (userId,qs) => {
    return new Promise((resolve,reject)=>{
      request({
        method: 'GET',
        url: `https://graph.facebook.com/v2.6/${userId}`,
        json: true,
        qs: {
          access_token: PAGE_ACCESS_TOKEN,
          fields: qs,
        },
      }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
          resolve(body);
        } else {
          reject('ERROR');
        }
      });
    });
  };