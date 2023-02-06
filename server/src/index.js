const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config()
const PORT = process.env.PORT;
const cors = require("cors")
const {authRoutes} = require("./routes")
app.use(express.json());
app.use(cors());


app.use("/auth",authRoutes)


app.listen(PORT,()=>{
    console.log("API is running on PORT " + PORT)
})