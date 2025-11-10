const express=require ("express");
const app=express();

app.get("/", (req, res) => {
  res.send("Hello, Express Server lololololol!");
});
 app.listen(3000,()=>{
    console.log("server running on http://localhost:3000")
 });

 