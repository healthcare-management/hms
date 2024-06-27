const connection = require('../../Model/dbConnection');


const getlab = async(req,res)=>{

    let query = ' SELECT * FROM lab ORDER BY lab_no';

    await connection.query(query, (err,result)=>{

        if(err)
            {
                console.log('error',err.message)
            }

            else{
                res.send(result)
            }
    })
}

const postlab = async(req,res)=>{

   let {lab_no, lab_name, room_id, department_id}= req.body;
    let query = 'INSERT INTO lab ( lab_no, lab_name, room_id, department_id) VALUES($1,$2,$3,$4)';

    await connection.query(query,[lab_no, lab_name, room_id, department_id],(err,result)=>{
        if(err){
            console.log('err',err.message)
        }

        else {
            res.send(result)
        }
    })
}


const deletelab = async(req,res)=>{

    let lab_no = req.params.lab_no;

    let query = ' DELETE from lab WHERE lab_no = $1';

    await connection.query(query,[lab_no], (err,result)=>{
        if(err){
            console.log(err)
        }

        else{
            res.send(result)
        }
    })
}

const putlab = async(req,res)=>{
    let lab_no = req.params.lab_no;
    let {lab_name, room_id, department_id} = req.body;

    let query = 'UPDATE lab SET lab_name = $1, room_id = $2, department_id = $3 WHERE lab_no = $4' ;

    await connection.query(query,[lab_name, room_id, department_id, lab_no], (err,result)=>{

        if(err){
            console.error('Error executing query:', err.message);
        }

        else{
            res.send(result);
        }
    })
}

module.exports={getlab,postlab,deletelab,putlab};