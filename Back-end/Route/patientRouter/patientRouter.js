const express = require('express');
const { getpatient, postpatient, deletepatient, putpatient } = require('../../Controller/patientController/patientController');

patientRouter = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     hospital:
 *       type: object
 *       properties:
 *         patient_id:
 *           type: string
 *         patient_name: 
 *           type: string
 *         patient_age:
 *           type: number
 *         patient_gender:
 *           type: string
 *         contact_no:
 *           type: string
 *         city:
 *           type: string
 *         symptoms:
 *           type: string
 */

/**
 * @swagger
 * /getpatient:
 *   get:
 *     summary: Retrieve all patient records
 *     description: Node.js GET API for retrieving patient records
 *     responses:
 *       200:
 *         description: Successful retrieval of patient records
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/hospital'
 */

/**
 * @swagger
 * /postpatient:
 *   post:
 *     summary: This API is used to check if the POST method is working or not
 *     description: Node.js API testing
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/hospital'
 *     responses:
 *       200:
 *         description: Added successfully
 */

/**
 * @swagger
 * /deletepatient/{patient_id}:
 *   delete:
 *     summary: This API is used to check if the DELETE method is working or not
 *     description: Node.js API testing
 *     parameters:
 *       - in: path
 *         name: patient_id
 *         required: true
 *         description: String patient_id required
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Deleted successfully
 */

/**
 * @swagger
 * /putpatient/{patient_id}:
 *   put:
 *     summary: Check if PUT method is working
 *     description: Node.js PUT API for updating patient records
 *     parameters:
 *       - in: path
 *         name: patient_id
 *         required: true
 *         description: String patient_id required
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/hospital'
 *     responses:
 *       200:
 *         description: Updated successfully
 */


patientRouter.get('/getpatient', getpatient);
patientRouter.post('/postpatient', postpatient);
patientRouter.delete('/deletepatient/:patient_id', deletepatient);
patientRouter.put('/putpatient/:patient_id', putpatient);

module.exports= { patientRouter } ;