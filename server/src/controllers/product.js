const db = require("../models")
const Product = db.product
const Brand = db.brand
const Gender = db.gender
const {Op} = require("sequelize")
const productController = {
    getProduct : async (req,res) => {
        try {
            const product = await Product.findAll({
                include:[
                    {
                        model:Brand,
                        as:"Brand"
                    },
                    {
                        model:Gender,
                        as:"Gender"
                    }
                ]
            })
            
            res.status(200).json({
                message : product
            })

        } catch (err) {
            res.status(400).json({
                message : err
            })
        }

    },
    addProduct : async (req,res) => {
        try {
            const {name,stock,harga,image_url,brand_id,gender_id} = req.body

            const checkProduct = await Product.findOne({
                where : {
                    name : name 
                }
            })

            if (checkProduct) {
                return res.status(400).json({
                    message: "produk sudah tersedia"
                })
            }

            const addProduct = await Product.create({...req.body})
            res.status(200).json({
                message: "produk berhasil ditambahkan",
                result : addProduct
            })

        } catch (err) {
            console.log(err)
            res.status(400).json({
                message:err
            })
        }
    },
    getProductByName : async(req,res) =>{
        try {
            const name = req.body.name 
            const filterName = await Product.findAll({
                include:[
                {
                    model:Brand,
                    attributes:["name"],
                    as:"Brand"
                },
                {
                    model:Gender,
                    attributes:["name"],
                    as:"Gender"
                }
                ],
                where:{
                    name :{
                        [Op.like] : `%${name}%`
                    }
                }
            })
            res.status(200).json({
                message:"filter product berdasarkan nama",
                result:filterName
            })

        } catch (err) {
            console.log(err)
            res.status(400).json({
                message:err
            })
        }
    },
    getProductByBrand : async (req,res) => {
        try {
            const brand_id = req.body.brand_id;
            
            const filterBrand = await Product.findAll({
                 include:[
                {
                    model:Brand,
                    attributes:["name"],
                    as:"Brand"
                },
                {
                    model:Gender,
                    attributes:["name"],
                    as:"Gender"
                }
                ],
                where :{
                    brand_id : brand_id
                }
            })

            res.status(200).json({
                message: "filter berdasarkan brand",
                result : filterBrand
            })
        } catch (err) {
            res.status(400).json({
                message: err
            })
        }

    },
    getProductByGender:async (req,res) =>{
        try {
            const gender_id = req.body.gender_id

            const filterGender = await Product.findAll({
                include : [
                    {
                        model:Brand,
                        attributes:["name"],
                        as:"Brand"
                    },
                    {
                        model:Gender,
                        attributes:["name"],
                        as:"Gender"
                    }
                ],
                where :{
                    gender_id:gender_id
                }
            })
            res.status(200).json({
                message:"filter berdasarkan gender",
                result:filterGender
            })
        } catch (err) {
            console.log(err)
            res.status(400).json({
                message:err
            })
        }
    }
    
}

module.exports = productController;