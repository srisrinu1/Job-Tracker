const mongoose=require('mongoose');

const ConnectToDb=async()=>{
  try{
    const connect=await mongoose.connect(process.env.CONNECTION_STRING);
    console.log('Connected to DB:',connect.connection.host,connect.connection.name)
  }
  catch(error){
    console.log(error);
    process.exit(1)
  }
}

module.exports=ConnectToDb;