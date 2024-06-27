const connection = require('../../Model/dbConnection');

const getpatient = async( req,res)=>{

    let query = 'SELECT * FROM patient ORDER BY patient_id';

    await connection.query(query,(err,result)=>{

        if(err){
            console.error('Error executing query:', err.message);
        }

        else {

            res.send(result);
        }
    }) 
}
                 
 

const postpatient = async(req,res)=>{
    
    let {patient_id, patient_name, patient_age, patient_gender, Contact_no, city,  symptoms} = req.body;
     
    const query = 'INSERT INTO patient (patient_id, patient_name, patient_age, patient_gender, Contact_no, city,  symptoms) values($1,$2,$3,$4,$5,$6,$7) ';

    await connection.query(query,[patient_id, patient_name, patient_age, patient_gender, Contact_no, city, symptoms], (err,result)=>{

        if(err){

            console.error('err', err.message);
        }

        else{
            res.send(result)
        }
    })
}


const deletepatient = async (req,res)=>{
    let patient_id = req.params.patient_id;

    let query = 'DELETE FROM patient WHERE patient_id = $1';

    await connection.query(query,  [ patient_id ], (err,result)=>{

        if(err){
            console.err('err', err.message);
        }

        else {
            res.send(result);
        }
    })
}

const putpatient = async (req,res)=>{
    let patient_id = req.params.patient_id;

    let { patient_name, patient_age, patient_gender, Contact_no, city, symptoms} = req.body

    let query = 'UPDATE patient SET patient_name = $1,  patient_age = $2, patient_gender = $3, Contact_no= $4, city= $5, symptoms=$6  WHERE patient_id = $7';

    await connection.query(query, [patient_name, patient_age, patient_gender, Contact_no, city,  symptoms, patient_id ], (err,result)=>{

        if(err){

            console.error('err', err.message);
        }

        else{
            res.send(result)
        }
    })
}



module.exports= {getpatient, postpatient, deletepatient, putpatient};