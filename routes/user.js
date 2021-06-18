const express = require('express');

const User = require('../models/user');
const router = express.Router();



//get all Users
router.get('/', async (req,res)=>{
    try{
        const users = await User.find();
        res.json(users);
    }catch(err){
        res.json(err);
    }
});


//Submit Details of User
router.post('/', async(req,res)=>{
    const user = new User({
        name:req.body.name,
        email:req.body.email,
        description:req.body.description

    });
    try{
    const saveUSer = await user.save();
    res.json(saveUSer);
    }catch(err){
        res.json(err);

    }
});

//Detail of a User
router.get('/:id', async (req,res)=>{
    try{
        const users = await User.findById(req.params.id);
        res.json(users);
    }catch(err){
        res.json(err);
    }
});

//Edit Details of a User
router.put('/:id', async (req,res)=>{
    try{
        const updateUsers = await User.updateOne({_id: req.params.id},
            {$set : {name : req.body.name,
            email: req.body.email,
            description: req.body.description}});
        res.json(updateUsers);
    }catch(err){
        res.json(err);
    }
});

//Delete a Specific User
router.delete('/:id', async (req,res)=>{
    const deletePost = await User.findByIdAndDelete(req.params.id);
    res.json(deletePost);
});




module.exports = router;