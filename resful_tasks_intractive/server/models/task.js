/* var mongoose = require("mongoose");

var TaskSchema = new mongoose.Schema({
    title: {type: String, default: ""},
    description: {type: String, default: ""},
    completed: {type: Boolean, default: false},
}, {timestamps: {createdAt: "created_at", updatedAt: "updated_at"}});

mongoose.model("Task", TaskSchema); */

var mongoose = require('mongoose');
const   TaskSchema = new mongoose.Schema({
    title: {type: String},
    description: {type: String, default:''},
    completed: {type: Boolean, default:true}},
    {timestamps: true});

   const Task = mongoose.model('Task', TaskSchema);
   