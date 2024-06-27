const joi = require('joi');

const employeeprofile = joi.object({

    profile_id:
    joi.string().min(0).max(10).required().optional(),
    profile_name:
    joi.string().min(0).max(30).required().optional(),
    age:
    joi.number().min(1).max(150).required().optional(),
    gender:
    joi.string().min(4).max(20).required().optional(),
    contact_no:
    joi.string().min(10).max(10).required().optional(),
    address:
    joi.string().min(5).max(40).required().optional(),
    salary:
    joi.string().min(1).max(10).optional(),
    date_of_joining:
    joi.date().required().optional(),
    date_of_birth:
    joi.date().required().optional(),
    department_id:
    joi.string().min(2).max(10).required().optional(),
    image:
    joi.string().min(1).max(500).required().optional()


})


employeeprofileValidatde = (req,res,next)=>{

    const{error,value} = employeeprofile.validate(req.body)

    if (error){
        console.log(error);
        return res.send('invalid register')
    }

    else{

    }

    next();
}

module.exports= {employeeprofileValidatde};