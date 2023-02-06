const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config()
const PORT = process.env.PORT;
const cors = require("cors")
const {authRoutes} = require("./routes")
app.use(express.json());
const mysql = require("mysql2");
const cors=require('cors');
app.use(cors())
const options = {
    origin: 'http://localhost:3000',
    }
    app.use(cors(options))


app.use("/auth",authRoutes)


app.listen(PORT,()=>{
    console.log("API is running on PORT " + PORT)
})