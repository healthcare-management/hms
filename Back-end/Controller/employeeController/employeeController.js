const connection = require('../../Model/dbConnection');

const getemployee = async(req,res)=>{

    let query = 'SELECT * FROM employee ORDER BY employee_id';

    await connection.query(query, (err,result)=>{

        if(err){

            console.error('err', err.message);

        }

        else{
            res.send(result)
        }
    })
}

const getemployee1 = async(req,res)=>{
 const employee_id = req.params.employee_id
    let query =" SELECT employee.employee_id, assignrole.role_id, role.role_name FROM employee INNER JOIN assignrole on employee.employee_id = assignrole.employee_id INNER JOIN role on assignrole.role_id = role.role_id";

    await connection.query(query,employee_id, (err,result)=>{

        if(err){

            console.error('err', err.message);

        }

        else{
            res.send(result)
        }
    })
}


const getemployee2 = async(req,res)=>{
const employee_id = req.params.employee_id
    let query ="SELECT * FROM employee e JOIN employee_profile p ON e.employee_id = p.employee_id WHERE e.employee_id = $1";

    await connection.query(query,[employee_id], (err,result)=>{

        if(err){

            console.error('err', err.message);

        }

        else{
            res.send(result)
        }
    })
}

const postemployee = async (req,res)=>{
    const {employee_id, employee_name, department_id, employee_email, employee_contactno, status, viewprofile} = req.body;

    let query = 'INSERT INTO employee (employee_id, employee_name, department_id, employee_email, employee_contactno,status, viewprofile) values($1,$2,$3,$4,$5,$6,$7)';

    await connection.query(query, [employee_id, employee_name, department_id, employee_email, employee_contactno, status,viewprofile],(err,result)=>{

        if(err){

            console.error('error', err.message);
            
        }

        else {

            res.send(result);
        }
        

    })
}

const deleteemployee = async(req,res)=>{
    let employee_id = req.params.employee_id;

    let query = 'DELETE FROM employee WHERE employee_id= $1';

    await connection.query(query,[employee_id], (err,result)=>{

        if(err){
            res.send(err)
        }

        else{
            res.send(result)
        }
    })

}

const putemployee = async(req,res)=>{
    let employee_id = req.params.employee_id;
    let {employee_name, department_id, employee_email, employee_contactno, status,viewprofile} = req.body;

    let query = 'UPDATE employee SET employee_name = $1, department_id = $2, employee_email = $3, employee_contactno = $4, status = $5, viewprofile =$6 WHERE employee_id = $7' ;

    await connection.query(query,[employee_name, department_id, employee_email, employee_contactno, status, viewprofile, employee_id], (err,result)=>{

        if(err){
            console.error('Error executing query:', err.message);
        }

        else{
            res.send(result);
        }
    })
}

module.exports = {getemployee,postemployee,deleteemployee,putemployee,getemployee1,getemployee2};