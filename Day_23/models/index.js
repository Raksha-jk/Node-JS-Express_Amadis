const Posts=require('./post');
const Users=require('./users')
Users.hasMany(Posts, { foreignKey: 'userId' });
Posts.belongsTo(Users, { foreignKey: 'userId' });
module.exports={Users,Posts};