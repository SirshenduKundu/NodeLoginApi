require('dotenv').config()
const express =require('express')
const path =require('path');
const app =express()

const routing=require('./router/userRoute')

app.use(express.urlencoded())

const mongoose =require('mongoose')
// const dbDriver='mongodb+srv://data_kundu:sirshendu123@cluster0.13xzb.mongodb.net/ApiUserDatabase?retryWrites=true&w=majority'



app.use(routing)
mongoose.connect(process.env.DB_CONNECT,{ useNewUrlParser: true,useUnifiedTopology: true}).then(result=>{
  console.log(result);
  app.listen(process.env.PORT || 3001, () =>{
  console.log(`Example app listening on port 3001!`)
  });
}).catch(error=>{
  console.log(error);
})
