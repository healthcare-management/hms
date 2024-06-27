const pg = require('pg');

connection = new pg.Client({

    user: 'postgres',
    host: 'localhost',
    password: 'missjadon',
    database: 'hospital',
    port: 5432



})

connection.connect((err)=>{
    if(err){
        console.log('err');
    }

    else{

        console.log('connected postgres')
    }
})

module.exports = connection;