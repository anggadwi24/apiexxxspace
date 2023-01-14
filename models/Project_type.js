module.exports = (sequelize,DataType) => {
    const Project_type = sequelize.define('Project_type',{
        id:{
            type: DataType.INTEGER ,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
        },
        name:{
         type:DataType.STRING,
         allowNull:false
        },
        slug:{
         type:DataType.STRING,
         allowNull:false
        },
       
       
       
    },{
        createdAt: false,
        updatedAt: false,
        tableName:'project_type'
    });
    Project_type.removeAttribute('id');
    return Project_type;
}