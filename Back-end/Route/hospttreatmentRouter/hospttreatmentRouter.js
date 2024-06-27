const express = require('express');
hospttreatment = express.Router();



const { gethospttreatment, posthospttreatment, deletehospttreatment, puthospttreatment} = require('../../Controller/hospttreatmentController/hospttreatmentController');




hospttreatment.get('/gethospttreatment', gethospttreatment);
hospttreatment.post('/posthospttreatment',posthospttreatment);
hospttreatment.delete('/deletehosttreatment/:patient_id', deletehospttreatment);
hospttreatment.put('/puthospttreatment/:patient_id', puthospttreatment)

module.exports= { hospttreatment };