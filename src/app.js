const express = require("express");

const app = express();

app.use((req,res)=>{
    res.send("Hello Wold!!!!")
});

app.listen(3000,()=>{
    console.log("Divtinder server is running on 3000 port.....@123");
});