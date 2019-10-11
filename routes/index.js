var express = require('express');
var router = express.Router();
var AWS = require("aws-sdk");
var controller=require('../Controller/indexcontroller');
var docClient=new AWS.DynamoDB.DocumentClient();
/* GET home page. */
router.get('/', function(req, res, next) {
  controller.getall(req,res);
});
router.get('/search/:year',function (req,res) {
  var myMovieYear = req.param("year");
  controller.getyear(req,res,myMovieYear);
});

module.exports = router;
