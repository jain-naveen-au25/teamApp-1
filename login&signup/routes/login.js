let express = require('express')
const { MongoClient } = require('mongodb');
const env =require('dotenv')
let Router = express().Router;
let router = Router()


const url = 'mongodb://localhost:27017';
const client = new MongoClient();


const dbName = 'attainu';
// for login
app.post('/login',async (req,res)=>{
    let username = req.body.username
    let password = req.body.password
    let user = await dbName.collection('users').find({username})
    if (require('bcrypt').compare(password,user.password)){
        window.location='/dashboard'
    }
    else{
        alert('invalid password')
    }
})

exports.module=router
