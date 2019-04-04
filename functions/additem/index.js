'use strict';
const AWS = require('aws-sdk');

const ITEM_TABLE = process.env.ITEM_TABLE;
const AWS_REGION = process.env.AWS_REGION;
const docClient = new AWS.DynamoDB.DocumentClient({region: AWS_REGION});
module.exports.handler = async (event, context) => {
  const body = JSON.parse(event.body);
  console.log(body);
  //-------------
  const monEng = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const monTha = ["มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม"];
  const [dmon,dday,dyear] = body.details.split(" ");
  let ifmonth;
  let details;
  const ifmon = monEng.some((mon,i)=>{
    if(mon===dmon){
      ifmonth = monTha[i]
      return true
    }
  })
  if(ifmon===true){
    details = ifmonth+' '+dyear;
  }else{
    details = body.details;
  }
  //-------------
  const params = {
    TableName: ITEM_TABLE,
    Item: {
      ownlist: body.listid,
      createtime: Date.now().toString(),
      amount: Number(body.amount),
      details: details,
      status:"NEW",
      act:[
        {
          user:body.viewer,
          msg:"สร้างไอเท็มใหม่",
          acttime:Date.now().toString(),
        }
      ],
      ownliststatus:body.listid+"_NEW"
    },
  };
  try {
    const data = await docClient.put(params).promise();
    return { 
      statusCode: 200, 
      headers: {
        "Access-Control-Allow-Origin" : "*", // Required for CORS support to work
        "Access-Control-Allow-Credentials" : true // Required for cookies, authorization headers with HTTPS
      },
      body: JSON.stringify({ item: params.Item }) };
  } catch(error) {
    return {
      statusCode: 400,
      error: `Could not post: ${error.stack}`
    };
  }
};