
const connection = require('../../Model/dbConnection');

const getroom = async (req, res) => {
    let query = 'SELECT * FROM room ORDER BY room_id';

    await connection.query(query, (err, result) => {
        if (err) {
            console.error('Error executing query:', err.message);
            res.status(500).json({ error: 'Internal server error' });
        } else {
            res.status(200).json(result);

        }
    });
};

  

const postroom = async(req,res)=>{

    let {room_id, room_name, status} = req.body;
    let query= 'INSERT INTO room (room_id, room_name, status) values($1,$2,$3)';

    await connection.query(query,[room_id, room_name, status],(err,result)=>{
        if(err){
            console.error('Error executing query:', err.message);
        }

        else {

            res.send(result);
        }

    }) 
}

const deleteroom = async(req,res)=>{
    let room_id = req.params.room_id;
    let query = 'DELETE FROM room WHERE room_id = $1';

    connection.query(query,[room_id],(err,result)=>{

        if(err){
            console.log('error', err.message);
        }

        else{
            res.send(result)
        }
    })
}


const putroom = async(req,res)=>{
    let room_id= req.params.room_id;
    let {room_name, status} = req.body;
   
    let query = 'update room SET room_name = $1,status = $2 Where room_id = $3';

    connection.query(query,[room_name, status, room_id], (error,result)=>{
 
        if(error){
            console.error('Error executing query:', error.message);
        }

        else {
            res.send(result);
        }
    })
}
module.exports = {getroom, postroom,deleteroom, putroom};