const express=require('express');
const app=express();
const sequelize=require('./config/db')
const User=require('./models/user')
app.use(express.json())
app.post('/user',async(req,res)=>{
    const user=await User.create(req.body);
    res.json(user);
})
app.get('/user',async(req,res)=>{
    const users =await User.findAll();
    res.json(users);
})
app.post('/user',async(req,res))
sequelize.sync().then(() => {
    console.log('DB synced');
    app.listen(3000, () => {
    console.log('Server running on 3000');
  });
});