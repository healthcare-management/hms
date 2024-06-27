const joi = require('joi');

const role = joi.object({
    role_id:
    joi.string().min(2).max(10).required(),
    role_name:
    joi.string().min(4).max(30).required()
})

 const validateRole = (req,res,next)=>{

    const{error,value} = role.validate(req.body)

    if (error){
        console.log(error);
        return res.send('invalid register');
    }

    else{

    }
validateRole
    next();
}

module.exports= {validateRole};