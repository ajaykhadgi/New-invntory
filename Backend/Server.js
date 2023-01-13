const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const userRoute = require("./routes/userRoute")

const app = express()
//middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(bodyParser.json())
//Route middleware
app.use("/api/users",userRoute)
//Routs
// app.use(app.router);
// routes:initialize(app);
app.get("/",(req, res) => {
    res.send("home page");

})
const PORT = process.env.PORT || 4000;
 // Connect to mongo db  and start servr //
 mongoose
 .connect(process.env.MONGO_URI)
 .then(() =>{
    app.listen(PORT,()=>{
        console.log(`Server Running on port ${PORT} `)
    })
 })
 .catch((err)=> console.log(err))

