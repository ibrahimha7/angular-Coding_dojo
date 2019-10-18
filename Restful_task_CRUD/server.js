var express = require("express");
var app = express();
var mongoose = require("mongoose");
var path=require("path");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(express.static(__dirname + '/CRUDTask/dist/CRUDTask'));
mongoose.connect("mongodb://localhost/restful_task_API", {useNewUrlParser: true, useUnifiedTopology: true});
require("./server/config/mongoose.js");

require("./server/config/routes.js")(app);

app.listen(8000, function(){
    console.log("Listening on port: 8000");
})