const express=require('express');
const router=express.Router();
router.get('/',(req,res)=>{
    res.send('Hello');
})
router.get('/new',(req,res)=>{
    res.send('Hello new user');
})
router.get('/:id',(req,res)=>{
    res.send(`User with ID ${req.params.id},Name :${req.user.name}`);
})
router.put('/:id',(req,res)=>{
    res.send(`updated User with ID ${req.params.id}`);
})
router.delete('/:id',(req,res)=>{
    res.send(`deleted User with ID ${req.params.id}`);
})
const users=[{name:'Raksha'},{name:'Ashmi'}];
router.param('id',(req,res,next,id)=>{
    req.user=users[id];
    next();
})
module.exports=router;