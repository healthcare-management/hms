const connection = require('../../Model/dbConnection');

const getassignrole = async(req,res)=>{

    let query = 'SELECT * FROM assignrole';

    await connection.query(query,(err,result)=>{

        if(err){
            console.error('Error executing query:', err.message);
        }
        else{

            res.send(result)
        }
    })
}

const postassignrole = async(req,res)=>{

    let {employee_id,role_id} = req.body;
    let query = 'INSERT INTO assignrole (employee_id,role_id) values($1,$2)';

    await connection.query(query,[employee_id,role_id],(err,result)=>{

        if(err){

            console.log('err',err.message);
        }
        else{

            res.send(result);
        }
    })
}


const deleteassignrole = async(req,res)=>{
    const employee_id = req.params.employee_id;
    let query = 'DELETE FROM assignrole WHERE employee_id = $1';

    connection.query(query, [employee_id] ,(err,result)=>{

        if(err){
            console.log('error', err.message);
        }

        else{
            res.send(result)
        }
    })
}


const putassignrole = async (req, res) => {
    let employee_id = req.params.employee_id; // Correctly getting from params
    let { role_id } = req.body;

    console.log('Received employee_id:', employee_id);
    console.log('Received role_id:', role_id);

    let query = 'UPDATE assignrole SET role_id = $1 WHERE employee_id = $2';

    connection.query(query, [role_id, employee_id], (error, result) => {
        if (error) {
            console.error('Error executing query:', error.message);
            res.status(500).send('Server error');
        } else {
            console.log('Query executed, result:', result);
            if (result.rowCount === 0) {
                console.warn('No rows updated, check employee_id value');
                res.status(404).send('No matching employee_id found');
            } else {
                res.send(result);
            }
        }
    });
};





module.exports= {getassignrole,postassignrole,deleteassignrole, putassignrole};