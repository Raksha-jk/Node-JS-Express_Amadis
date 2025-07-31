const {DataTypes}=require('sequelize');
const Sequelize=require('../config/db')
const User=Sequelize.define('User',{
    name:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    email:{
        type:DataTypes.STRING,
        allowNull:true,
    },
})
module.exports=User;