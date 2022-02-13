let express = require('express')
const { MongoClient } = require('mongodb');
const env =require('dotenv')
let Router = express().Router;
let router = Router()


const url = 'mongodb://localhost:27017';
const client = new MongoClient();


const dbName = 'attainu';
// for signup
app.post('/signup',(req,res)=>{
    let {name, emailid, phoneno, password, confirmpassword} = req.body
    if (name==''||emailid==''||phoneno==''||password==''||confirmpassword==''){
        alert('All fields are required')
    }
    else if (password.length<6 || password.length >20){
        alert('password should be between 6 to 20 characters')
    }
    else if (phoneno.length!=10){
        alert('phone no. should have 10 numbers')
    }
    else if (password!==confirmpassword){
        alert('password and confirm password should be same')
    }
    else{
        dbName.collection('users').insertOne({name:req.body.name,emailid:req.body.emailid,phoneno:req.body.phoneno,password:require('bcrypt').hash(req.body.password)})
        window.location='/dashboard'
    }
})
exports.module = router