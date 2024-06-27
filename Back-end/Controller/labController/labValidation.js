const joi = require('joi');

const lab = joi.object({
    lab_no:
    joi.string().min(2).max(10).required(),
    lab_name:
    joi.string().min(4).max(30).required(),
    room_id:
    joi.string().min(2).max(10).required(),
    department_id:
    joi.string().min(2).max(10).required(),
})

 const validateLab = (req,res,next)=>{

    const{error,value} = lab.validate(req.body)

    if (error){
        console.log(error);
        return res.send('invalid register');
    }

    else{  

    }

    next();
}

module.exports= {validateLab};