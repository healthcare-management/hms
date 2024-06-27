
const connection = require('../../Model/dbConnection');

const getdepartment = async( req,res)=>{

    let query = 'SELECT * FROM department ORDER BY department_id';

    await connection.query(query,(err,result)=>{

        if(err){
            console.error('Error executing query:', err.message);
        }

        else {

            res.send(result);
        }
    })
}


const postdepartment = async(req,res)=>{
    
    let {department_id, department_name, department_est_date, room_id, status} = req.body;
     
    const query = 'INSERT INTO department (department_id, department_name, department_est_date, room_id, status) values($1,$2,$3,$4,$5) ';

    await connection.query(query,[department_id, department_name, department_est_date, room_id, status], (err,result)=>{

        if(err){

            console.error('err', err.message);
        }

        else{
            res.send(result)
        }
    })
}

const deletedepartment = async (req,res)=>{
    let department_id = req.params.department_id;

    let query = 'DELETE FROM department WHERE department_id = $1';

    await connection.query(query,[department_id], (err,result)=>{

        if(err){
            console.error('err', err.message);
        }

        else {
            res.send(result);
        }
    })
}

const putdepartment = async (req,res)=>{
    let department_id = req.params.department_id;

    let{department_name, department_est_date,room_id, status} = req.body

    let query = 'UPDATE department SET department_name = $1, department_est_date= $2, room_id = $3, status = $4 WHERE department_id = $5';

    await connection.query(query, [department_name, department_est_date,room_id,status,department_id ], (err,result)=>{

        if(err){

            console.error('err', err.message);
        }

        else{
            res.send(result)
        }
    })
}

module.exports = {getdepartment, postdepartment, deletedepartment, putdepartment};