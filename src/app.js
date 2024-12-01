const express = require("express");
const {connectDB } = require("./config/database.js")
const User = require("./models/user")
const validate = require("validator")
const app = express();
app.use(express.json());


app.post("/user",async (req,res)=>{
    const userEmail = req.body.emailId;
    try{
        const userData = await User.findOne({ emailId : userEmail });
        if(userData.lenth === 0){
            res.status(404).send("Email is is not exits...")
        }else{
            res.send(userData);
        }
    }catch(err){
        res.status(401).send("Error find the user emailId : "+err.message);
    }
});

app.delete("/user",async (req,res)=>{
    const userId = req.body.userId;
    try{
        const user = await User.findByIdAndDelete(userId);
        res.send("User deleted successfully.");

    }catch(err){
        res.status(401).send("Error find the user emailId : "+err.message);
    }
});

app.get("/feed",async (req,res)=>{
    try{
        const users = await User.find({});
        if(users.lenth === 0){
            res.status(404).send("No users exits...")
        }else{
            res.send(users);
        }
        
    }catch(err){
        res.status(401).send("Error find the user emailId : "+err.message);
    }
});

app.post("/signup", async (req,res) => {
    const user = new User(req.body);
    try{
          await user.save();
          res.send("User added successfully...")
    }catch(err){
        res.status(400).send("Error saving the usaer : "+err.message);
    }

})


connectDB().then(()=>{
    console.log("Moongose DB connected successfully...")
    app.listen(3000,()=>{
        console.log("Divtinder server is running on 3000 port");
    });
}).catch((err)=>{
    console.error("DB connection is failed!!!!.");
});
