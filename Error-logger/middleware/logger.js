const fs=require('fs')
const path=require('path')
const logware=(req,res,next)=>{
    const log=`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}\n`;
    fs.appendFileSync(path.join(__dirname, '../logs/error.log'), log);
    next();
}
module.exports=logware;