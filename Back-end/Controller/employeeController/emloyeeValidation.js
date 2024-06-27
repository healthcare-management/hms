const joi = require('joi');

const employee = joi.object({

    employee_id:
    joi.string().min(2).max(10).required(),
    employee_name:
    joi.string().min(3).max(10).required(),
    department_id:
    joi.string().min(2).max(10).required(),
    employee_email:
    joi.string().min(20).max(30).required(),
    employee_contactno:
    joi.string().min(10).max(10).required(),
    status:
    joi.string().min(2).max(50).required()

})

const validateemployee = (req,res,next)=>{

    const{error,value} = employee.valid(req.body);

    if(error){
        console.log(error);
        console.send('invalid entries')
    }

    else {

    }
    
    next();
}


module.exports={validateemployee};