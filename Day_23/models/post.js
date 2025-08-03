const {DataTypes}=require('sequelize');
const sequelize=require('../config/db');
const post=sequelize.define('Posts',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
    },
    title:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    content:{
        type:DataTypes.TEXT,
    },
    userId:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:'Users',
            key:'id',
        },
        onDelete:'CASCADE',
    }
})
module.exports=post;