const express=require('express');
const app=express();
const port=4000;
const bodyParser=require('body-parser')
const nodemailer=require('nodemailer');
require('dotenv').config();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/public.index.html');
})
app.post('/register',(req,res)=>{
    const {name,email}=req.body;
    const transporter=nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:process.env.Email,
            pass:process.env.password,
        }
    })
    const mailOptions={
        from:'rakshajk1904@gmail.com',
        to:email,
        subject:'Welcome!',
        text:`Hello ${name}, Welcome to our website`
    }
    transporter.sendMail(mailOptions,(error,info)=>{
        if(error){
            console.log(error);
            res.send('Error sending mail');
        }else{
            console.log('Email sent:'+info.response);
            res.send('Registration successful! Email sent.')
        }
    })
})
app.listen(port,()=>{
    console.log(`Server is running in ${port}`)
})