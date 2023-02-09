const { sequelize } = require("sequelize");
const db = require("../models")
const Trans_Item = db.trans_item;
const Trans_Header = db.trans_header;
const Product = db.product;
const Brand = db.brand
const Gender = db.gender
const User = db.user
const transController = {
    getTransaction : async (req,res) => {
        try {
            const trans = await Trans_Item.findAll({
                include:[
                    {
                        model:Product,
                        attributes:["name","stock","harga","image_url"],
                        as:"Product",
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
                        ]
                    },
                    {
                        model:Trans_Header,
                        attributes:["no_trans","total","tgl"],
                        as:"Trans_Header",
                        include:{
                            model:User,
                            attributes:["username","name","email","isadmin"],
                            as:"User"
                        }
                    }
                ]
            })

            res.status(200).json({
                message:"transaction fetched",
                result : trans
            })
        } catch (err) {
            console.log(err)
            res.status(400).json({
                message:err
            })
            
        }
    },
    addTranscationHeader : async(req,res) =>{
        const t = await sequelize.transaction()
        try {
            const tgl = new Date()
            const countHeader = await Trans_Header.count()
            const noTrans = "TRANS000" + countHeader + tgl
           

            const addHeader = await Trans_Header.create({
                no_trans : noTrans,
                total : 0,
                tgl : tgl

            })
        } catch (error) {
            
        }
    }
}
module.exports = transController;