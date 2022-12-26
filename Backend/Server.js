const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const bodyParser = require('body-parser');
const mongoose = require("mongoose");

const app = express()
const PORT = process.env.PORT || 4000;
 // Connect to mongo db  and start servr //
 mongoose
 .connect(process.env.MONGO_URI)
 .then(() =>{
    app.listen(PORT,()=>{
        console.log(`Srver Running on port ${PORT} `)
    })
 })
 .catch((err)=> console.log(err))

