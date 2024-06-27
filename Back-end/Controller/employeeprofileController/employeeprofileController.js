
const connection = require('../../Model/dbConnection');

const getemployeeprofile = async (req, res) => {
    let employee_id = req.params.employee_id;

    let query = "SELECT profile_id, profile_name, age, gender, contact_no, address, salary, date_of_joining, date_of_birth, image, employee_id FROM employee_profile WHERE employee_id = $1";

    try {
        const result = await connection.query(query, [employee_id]);
        if (result.rows.length === 0) {
            return res.status(404).send({ message: 'Employee profile not found' });
        }
        res.send(result.rows);
    } catch (err) {
        console.error('Error executing query:', err);
        res.status(500).send({ message: 'Internal Server Error' });
    }
};

const getallemployeeprofile = async (req, res) => {


    let query = "SELECT * FROM employee_profile";

    connection.query(query, (err, result) => {
        res.send(result)
    })
};



const postemployeeprofile = async (req, res) => {
    try {
        let imageData = { image: null };

        console.log(req.body);

        if (req.file && req.file.filename) {
            imageData.image = req.file.filename;
        }
 var fullurl= req.protocol+"://" + req.get("host") + "/public/";
        const data = {

            profile_id: req.body.profile_id,
            profile_name: req.body.profile_name,
            age: req.body.age,
            gender: req.body.gender,
            contact_no: req.body.contact_no,
            address: req.body.address,
            salary: req.body.salary,
            date_of_joining: req.body.date_of_joining,
            date_of_birth: req.body.date_of_birth,
            employee_id: req.body.employee_id,
            image: fullurl + req.file.filename
        };

        const query = 'INSERT INTO employee_profile (profile_id, profile_name, age, gender, contact_no, address, salary, date_of_joining, date_of_birth, employee_id, image) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)';

        const values = [
            data.profile_id,
            data.profile_name,
            data.age,
            data.gender,
            data.contact_no,
            data.address,
            data.salary,
            data.date_of_joining,
            data.date_of_birth,
            data.employee_id,
            data.image
        ];

        const result = await connection.query(query, values);

        res.send(result);
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).send({ error: 'An error occurred while inserting the employee profile' });
    }
};


const deleteemployeeprofile = async (req,res)=>{
    let profile_id = req.params.profile_id;

    let query = 'DELETE FROM employee_profile WHERE profile_id = $1';

    await connection.query(query,[profile_id], (err,result)=>{

        if(err){
            console.err('err', err.message);
        }

        else {
            res.send(result);
        }
    })
}

const putemployeeprofile = async (req,res)=>{
    let profile_id = req.params.profile_id;

    let{profile_name,age,gender, contact_no,address,salary, date_of_joining,  date_of_birth, employee_id, image} = req.body

    let query = 'UPDATE employee_profile SET profile_name=$1, age=$2 ,gender=$3, contact_no =$4,address=$5,salary=$6, date_of_joining=$7,  date_of_birth=$8, employee_id=$9, image =$10 WHERE profile_id = $11';

    await connection.query(query, [profile_name,age,gender, contact_no,address,salary, date_of_joining,  date_of_birth, employee_id,image,profile_id], (err,result)=>{

        if(err){

            console.error('err', err.message);
        }

        else{
            res.send(result)
        }
    })
}

module.exports = {getemployeeprofile, postemployeeprofile,deleteemployeeprofile,putemployeeprofile, getallemployeeprofile};