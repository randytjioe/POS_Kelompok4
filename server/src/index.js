
const express = require("express");
const app=express();
app.use(express.json());
const mysql = require("mysql2");
const cors=require('cors');
app.use(cors())
const options = {
    origin: 'http://localhost:3000',
    }
    app.use(cors(options))


const db=mysql.createConnection({
    host :"localhost",
    port:3306,
    user:"root",

    password :"password",
    database:"project_pos",
});

db.connect((err)=>{
    if (err){
        console.log(err);
    } else {
        console.log("db connected");
    }
})

app.get("/product-men",(req,res)=>{
    const qString = "Select * from product_jamtangan where men = 1";
    db.query(qString,(err,result)=>{
        if (err){
            res.status(400).json({
                message:"query error",
            });
        }
        res.status(200).json({
            message:"data fetched",
            result:result,
        })
    })
})

app.get("/product-women",(req,res)=>{
    const qString = "Select * from product_jamtangan where women = 1";
    db.query(qString,(err,result)=>{
        if (err){
            res.status(400).json({
                message:"query error",
            });
        }
        res.status(200).json({
            message:"data fetched",
            result:result,
        })
    })
})



app.listen(2000,()=>{
    console.log("api is running");
})