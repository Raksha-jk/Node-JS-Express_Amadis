const {Sequelize}=require('sequelize');
// require('dotenv').config();
const sequelize=new Sequelize('Node_SEQ','postgres','8520',
    {
        host:'localhost',
        port:5432,
        dialect:'postgres',
    }
)
module.exports=sequelize;