
const Project_image = require('./Project_image');

module.exports = (sequelize,DataType) => {
    const Project = sequelize.define('Project',{
        id:{
            type: DataType.INTEGER ,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
        },
        project_type_id : DataType.INTEGER,
        slug : DataType.STRING,
        name : DataType.STRING,
        description : DataType.TEXT,
        location:DataType.STRING,
        dimention:DataType.STRING,
        year:DataType.INTEGER,
        designer:DataType.STRING,
        views:DataType.BIGINT,
        isPublish:{
            type:DataType.ENUM,
            values:['y','n']
        },
        thumbnail:DataType.STRING,

       
       
    },{
        createdAt: false,
        updatedAt: false,
        tableName:'project'
    });
   
   
    Project.removeAttribute('id');
    
    return Project;
}