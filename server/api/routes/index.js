const express=require('express');
const app=express();

app.use('/api/users',require('./auth'));

module.exports=app;