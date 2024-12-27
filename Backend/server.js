const express = require("express")
const cors = require("cors")
const bodyparse = require("body-parser")
const app = express()
let arr=[]
app.use(cors());
app.use(bodyparse.json());

app.post("/savedata",(req,res)=>{
  let data = req.body;
  arr.push(data)
  console.log(arr)
 res.send({ "message": "ok" })
});



app.get("/getdata",(req,res)=>{
  res.send(arr);
})
app.listen(5000,()=>
console.log("server started successfully"));