require('dotenv').config()
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const connectDatabase = require('./src/DB/index');
const routes = require('./src/routes/index');
const bodyParser = require('body-parser')

// connect to database
connectDatabase();

//middleware

app.use(bodyParser())

app.get('/', (req,res)=>{
    res.json({message:"Server is successfully Running"})
});


app.use("/api" , routes)
// server listening
app.listen(port, (err)=>{
    if(err){
        return console.error("Error Starting the server" , err)
    }
    console.log(`Server is start listening on PORT ${port}`)
});

