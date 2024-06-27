
const connection = require('../../Model/dbConnection');

const gethospttreatment = async( req,res)=>{

    let query = 'SELECT * FROM hospt_treatment ORDER BY patient_id';

    await connection.query(query,(err,result)=>{

        if(err){
            console.error('Error executing query:', err.message);
        }

        else {

            res.send(result);
        }
    })
}


const posthospttreatment = async(req,res)=>{

    let {patient_id, employee_id, date} = req.body;
    let query= 'INSERT INTO hospt_treatment (patient_id, employee_id, date) values($1,$2,$3)';

    await connection.query(query,[patient_id, employee_id, date],(err,result)=>{
        if(err){
            console.error('Error executing query:', err.message);
        }

        else {

            res.send(result);
        }

    }) 
}

const deletehospttreatment = async(req,res)=>{
    const patient_id = req.params.patient_id;
    let query = 'DELETE FROM hospt_treatment WHERE patient_id = $1';

    connection.query(query,[patient_id],(err,result)=>{

        if(err){
            console.log('error', err.message);
        }

        else{
            res.send(result)
        }
    })
}


const puthospttreatment = async(req,res)=>{
    let patient_id = req.patient_id;
    let {employee_id} = req.body;
   
    let query = 'UPDATE hospt_treatment SET employee_id = $1 WHERE patient_id = $2';

    connection.query(query,[employee_id, patient_id], (error,result)=>{
 
        if(error){
            console.error('Error executing query:', error.message);
        }

        else {
            res.send(result);
        }
    })
}





module.exports = {gethospttreatment, posthospttreatment, deletehospttreatment,  puthospttreatment};