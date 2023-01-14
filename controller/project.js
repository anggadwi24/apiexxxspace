const { Project } = require('../models');

const getAllProject = async (req,res) => {
    try {
        const data = await Project.findAll({
          
            where: {isPublish:'y'},
        });
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
const getProjectBySlug = async (req,res) => {
    const {slug} = req.params;
    try {
        const data = await Project.findOne({
            include:[db.projectImage],
            where: {isPublish:'y',slug:slug},
        });
        if(!data){
            res
        .status(400)
        .json({
            message:'Slug not found',
            
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
    getAllProject,
    getProjectBySlug,
   
   
}