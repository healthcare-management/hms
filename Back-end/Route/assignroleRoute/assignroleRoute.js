const express = require('express');

assignroleRoute = express.Router();

const {getassignrole,postassignrole, deleteassignrole, putassignrole} = require('../../Controller/assingroleController/assignroleController');

assignroleRoute.get('/getassignrole', getassignrole);
assignroleRoute.post('/postassignrole', postassignrole);
assignroleRoute.delete('/deleteassignrole/:employee_id', deleteassignrole);
assignroleRoute.put('/putassignrole/:employee_id', putassignrole)




module.exports = assignroleRoute;