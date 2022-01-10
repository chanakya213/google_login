const express = require('express');
const cors = require("cors");
const { OAuth2Client } = require('google-auth-library');
const cookieParser = require("cookie-parser");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());
require('dotenv').config()

const CLIENT_ID = process.env.CLIENT_ID;
app.get('/' , (req , res)=>{
   res.send('hello from simple server :)')
});

app.post("/login",(req,res)=>{
    const token = req.body.token;
const client = new OAuth2Client(CLIENT_ID);
async function verify() {
  const ticket = await client.verifyIdToken({
      idToken:token,
      audience: CLIENT_ID,
  });
  const payload = ticket.getPayload();
  const userid = payload['sub'];
}
verify().then(()=>{
     res.cookie("token",token);
     res.send("success");
}).catch(console.error);
});

app.get("/logout",(req,res)=>{
    res.clearCookie("token");
    res.send("you have successfully log out ")
});

app.listen(5000, () => {
    console.log(`Server started on port ${5000}`);
});