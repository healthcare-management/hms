const joi = require('joi');

const room = joi.object({

    room_id:
    joi.string().min(2).max(20).required(),
    room_name:
    joi.string().min(1).max(50).required(),
    status:
    joi.string().min(1).max(50),
})

const validateroom = (req,res,next)=>{
    const{error,value} = room.validate(req.body);
    if(error){
        console.log(error);
        return res.status(400).json({ message: error.details[0].message });
        return res.send('invalid register') 
    }

    else {
        
    }
    next();
}


module.exports= {validateroom};