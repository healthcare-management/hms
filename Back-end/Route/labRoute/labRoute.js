const { validateLab } = require("../../Controller/labController/labValidation");
const { getlab, postlab, deletelab, putlab } = require("../../Controller/labController/labCotroller");

const express = require('express');

labrouter = express.Router();




labrouter.get('/getlab', getlab);
labrouter.post('/postlab',validateLab, postlab);
labrouter.delete('/deletelab/:lab_no',deletelab);
labrouter.put('/putlab/:lab_no', putlab)


module.exports = {labrouter};