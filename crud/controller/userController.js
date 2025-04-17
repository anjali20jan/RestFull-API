const {users} = require('../model/userModel.js');

exports.create = async(req, res)=>{
  
    try{
        const userData =new users(req.body);

        const email = userData.email;


        const userExist = await users.findOne({email});
        if(userExist){
            return res.status(400).json({message:"user exist"});
        }
        const savedUser =await userData.save();
        return res.status(200).json(savedUser);


    }catch(error){
        console.log(error.message)
        res.status(500).json({error:"server error"})
    }
}

exports.fetch = async(req, res)=>{
    try{
       const User = await users.find();
       if(User.length===0){
       return  res.status(404).json({message:"user not found"})
       }
       res.status(200).json(User);


    }catch(err){
       res.status(500).json({err:"server error"})
    }
}

exports.update =async ( req,res)=>{
    try{
        const id = req.params.id;
        const userExist= await users.findOne({_id: id});
        if(!userExist){
          return res.status(404).json({message:"user not found"}); 
        }
        const updateUser= await users.findByIdAndUpdate(id , req.body, {new: true})
        res.status(200).json(updateUser);


    }catch{

        res.status(500).json({err:"server error"})
    }
}
exports.deleteUser =async ( req,res)=>{
    try {
        const id = req.params.id;
        const userExist= await users.findOne({_id: id});
        if(!userExist){
          return res.status(404).json({message:"user not found"}); 
        }
        await users.findByIdAndDelete(id);
        res.status(200).json({message:"deleted successfully" })
        
    } catch (error) {
        res.status(500).json({error:"server error"})
    }
}