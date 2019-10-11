var express = require('express');
var AWS = require("aws-sdk");

AWS.config.update({
    accessKeyId:"admin123",
    secretAccessKey:"admin123",
    region: "us-west-2",
    endpoint: "http://localhost:8000"
});
let params={
    TableName: "Movies",
    FilterExpression:"#yr=:y",
    ExpressionAttributeNames:{"#yr":"year"},
    ExpressionAttributeValues: {":y":2000}
}
let params1={
    TableName: "Movies"
}
var docClient=new AWS.DynamoDB.DocumentClient();
/* GET home page. */
function getall(req, res) {
    docClient.scan(params1, (err, data) => {
        res.render('index',{data:data.Items});
        res.end();
    });
};
function getyear(req, res,year) {
    docClient.scan(params, (err, data) => {
        res.render("result",{data:data.Items});
        res.end();
    });
};

module.exports={
    getall:getall,
    getyear:getyear
}
