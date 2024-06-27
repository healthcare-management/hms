const connection = require('../../Model/dbConnection'); 

const getrole = async (req,res)=>{ 

    let query = 'SELECT * FROM role ORDER BY role_id';

    await connection.query(query,(err,result) =>{

        if(err){
            res.send(err)
        }
 
        else {
            res.send(result)
        }
    })
}

const postrole = async(req,res)=>{

    let {role_id, role_name} = req.body;

    let query = 'INSERT INTO role (role_id, role_name) values($1,$2)';

    await connection.query(query,[role_id, role_name],(err,result)=>
    {
        if(err){
            res.send(err);
        }

        else {
            res.send(result);
        }
    })
}


const deleterole = async(req,res)=>{
    let role_id = req.params.role_id;
    let query = 'DELETE FROM role WHERE role_id = $1 ';

    await connection.query(query,[role_id],(err,result)=>{

        if (err){

            res.send(err)
        }

        else{
            res.send(result);
        }
    })
}

const putrole = async(req,res)=>{
    let role_id= req.params.role_id;
    let {role_name} = req.body;
   
    let query = 'update role SET role_name = $1 Where role_id = $2';

    connection.query(query,[role_name, role_id], (error,result)=>{
 
        if(error){
            console.error('Error executing query:', error.message);
        }

        else {
            res.send(result);
        }
    })
}

module.exports = {getrole,postrole,deleterole, putrole };

