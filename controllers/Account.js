import Account from "../models/Account.js";

export const getAccount = async(req, res) => {
    try{
        const account = await Account.findAll();
        res.send(account);
    }catch(err){
        console.log(err);
    }
}

export const getAccountById = async(req, res) => {
    try{
        const account = await Account.findAll({
            where:{
                id: req.params.id
            }
        });
        res.send(account[0]);
    }catch(err){
        console.log(err);
    }
}

export const createAccount = async(req,res) => {
    try{
        await Account.create(req.body);
        res.json({
            "message": "Account Has Been Created"
        });
    }catch(err){
        console.log(err);
    }
}

export const updateAccount = async(req,res) => {
    try{
        await Account.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.json({
            "message": "Account Has Been Updated"
        });
    }catch(err){
        console.log(err);
    }
}

export const deleteAccount = async(req,res) => {
    try{
        await Account.destroy({
            where:{
                id: req.params.id
            }
        });
        res.json({
            "message": "Account Has Been Deleted"
        });
    }catch(err){
        console.log(err);
    }
}