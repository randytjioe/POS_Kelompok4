const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config()
const PORT = process.env.PORT;
const cors = require("cors")
const {authRoutes,productRoutes,brandRoutes,genderRoutes,transRoutes} = require("./routes")
app.use(express.json());
const mysql = require("mysql2");
const db = require("./models");
// db.sequelize.sync({ alter: true });

const options = {
    origin: 'http://localhost:3000',
    }
    app.use(cors(options))


app.use("/auth",authRoutes)
app.use("/product",productRoutes)
app.use("/gender", genderRoutes)
app.use("/brand",brandRoutes)
app.use("/transaction",transRoutes)
app.use("/post_image",express.static(`${__dirname}/public/IMAGE_PRODUCT`))



app.listen(PORT,()=>{
    console.log("API is running on PORT " + PORT)
})