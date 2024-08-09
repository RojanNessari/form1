const express=require("express");
const bodyParser=require("body-parser");
const path=require("path");

const port=3000;
const app=express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/form1.html");
});
app.post('/submit-form',(req,res)=>{
  const{name,phoneNum}=req.body;

  const phoneFormat=/^\d{3}-\d{3}-\d{4}/;
  if(phoneNum.match(phoneFormat)){
    res.send(`<h1>success</h1><p>thanks for joining ${name} your phone number (${phoneNum})is submitted!!</p>`);

  }else{
    res.send(`Sorry, ${name}. The phone number ${phoneNum} is not valid. Please enter it in the format ddd-ddd-dddd.`);
  }
});
app.listen(port,()=>{
  console.log(`Server is running on http://localhost:${port}`);
})
