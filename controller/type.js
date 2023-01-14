const { Project_type } = require('../models');


const getAllType = async (req,res) => {
    try {
        const data = await Project_type.findAll();
        res
        .status(200)
        .json({
            message:'success',
            data:data,
        })
        
    } catch (error) {
        res
        .json({
            message:'Server Error',
            error : error
            
        })
        .status(500)
    }
   
}
const getTypeBySlug = async (req,res) => {
    const {slug} = req.params;
    try {
        const data = await Project_type.findOne({
            where: {slug:slug},
        });
        if(!data){
            res
            .status(400)
            .json({
                message:'type not found',
               
            })
        }
        res
        .status(200)
        .json({
            message:'success',
            data:data,
        })
       
        
    } catch (error) {
        res
        .json({
            message:'Server Error',
            error : error
            
        })
        .status(500)
    }
}

module.exports = {
    getAllType,
    getTypeBySlug
}