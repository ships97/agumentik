const express = require('express');
const UserRouter = express.Router();
const {UserModel} = require('../Model');
const jwt = require('jsonwebtoken');
const Authorization = require('../Middleware/authorisation');
UserRouter.get('/',(req,res)=>res.send("Welcome to user route"));
UserRouter.post('/signup',async(req,res)=>{
    const {email,role} = req.body;
    try{
        const user = await UserModel.findOne({email});
        if(role=='admin'){
            return res.status(401).send("Not access for admin role");
        }
        if(user){
           return  res.status(409).send("User is already signup")
        };
        const newUser =  new UserModel(req.body);
        await newUser.save();
        res.send(newUser);
    }catch(e){
        return res.status(500).send({error:e.message});
    }
})




UserRouter.post('/login',async(req,res)=>{
    const {email,password,role} = req.body;
    try{
        const user = await UserModel.findOne({email,password});
        console.log(user);
        if(!user){
            return res.status(404).send("Please signup first");
        };
        const token = jwt.sign(
            {id:user._id,email:user.email,role:user.role},
            process.env.MAIN_TOKEN,
            {
                expiresIn:"10 days"
            }
        );
        res.send({token});
    }catch(e){
        console.log(e)
        res.status(501).send(e.message);
    }
});
UserRouter.patch('/admin/:id',Authorization,async(req,res)=>{
    const {id} = req.params;
    const {role} = req.body;
    try{ 
    const user = await UserModel.findByIdAndUpdate(id,{role});
    console.log(user,role,id);
    res.send({msg:"Updated Successfully"});
    }catch(e){
        console.log(e)
        res.status(501).send(e);
    }
})
UserRouter.get('/admin/users',Authorization,async(req,res)=>{
    try{ 
    const users = await UserModel.find();
    const filtered = users.filter((el)=>el.email!='shiprapal97@gmail.com');
    res.send(filtered);
    }catch(e){
        console.log(e)
        res.status(501).send(e);
    }
})

module.exports = UserRouter;