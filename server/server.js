const express=require('express');
const app=express();


app.get("/",(req,res)=>{
  res.status(200).json({message:'Test!'})
})

app.listen(5000,()=>{
    console.log('Listening on port 5000');
})