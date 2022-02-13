let express  = require('express')
let app = express()
let env = require('dotenv')
let port = config.env.port||3000
let signup = require('./routes/signup')
let login = require('./routes/login')

app.listen(port,()=>{
    console.log("app is running under port"+port)
})
