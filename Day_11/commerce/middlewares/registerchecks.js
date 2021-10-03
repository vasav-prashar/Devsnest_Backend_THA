const {emailvalidate,passwordvalidate}=require('../utils/validate')


const registerchecks=(req,res,next)=>{
        const {email,password,confirmpassword}=req.body;
        if(typeof email==='string'&&
            typeof password ==='string'&&
            typeof confirmpassword==='string'&&
            email.length>0&&
            password.length>8&&
            confirmpassword===password&&
            emailvalidate(email)&&passwordvalidate(password)
        ){
        next();
        }
        else{
        res.status(401).send("INITIAL CHECKS FAILS")
        }
        }
        module.exports=registerchecks
