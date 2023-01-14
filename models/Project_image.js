module.exports = (sequelize,DataType) => {
    const Project_image = sequelize.define('Project_image',{
        id:{
            type: DataType.INTEGER ,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
        },
        project_id : DataType.INTEGER,
        filename : DataType.STRING,
        file : DataType.STRING,

    },{
        createdAt : false,
        updatedAt : false,
        tableName:'project_image'
    });
  
    return Project_image;
}