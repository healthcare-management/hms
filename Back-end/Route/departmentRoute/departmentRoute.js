const express = require('express');

const departmentroute = express.Router();

const {getdepartment, postdepartment,deletedepartment, putdepartment} = require('../../Controller/departmentController/departmentController');
const { validatedeperatment } = require('../../Controller/departmentController/deartmentValidation');

/**
 * @swagger
 * components:
 *   schemas:
 *     hospital:
 *       type: object
 *       properties:
 *         department_id:
 *           type: string
 *         department_name: 
 *           type: string
 *         department_est_date:
 *           type: string
 *           format: date
 *         room_id:
 *           type: string
 */

/**
 * @swagger
 * /getdepartment:
 *   get:
 *     summary: Retrieve all department records
 *     description: Node.js GET API for retrieving department records
 *     responses:
 *       200:
 *         description: Successful retrieval of department records
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/hospital'
 */

/**
 * @swagger
 * /postdepartment:
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
 * /deletedepartment/{department_id}:
 *   delete:
 *     summary: This API is used to check if the DELETE method is working or not
 *     description: Node.js API testing
 *     parameters:
 *       - in: path
 *         name: department_id
 *         required: true
 *         description: String department_id required
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Deleted successfully
 */

/**
 * @swagger
 * /putdepartment/{department_id}:
 *   put:
 *     summary: Check if PUT method is working
 *     description: Node.js PUT API for updating room records
 *     parameters:
 *       - in: path
 *         name: department_id
 *         required: true
 *         description: String department_id required
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


departmentroute.get('/getdepartment', getdepartment);
departmentroute.post('/postdepartment',validatedeperatment,postdepartment);
departmentroute.delete('/deletedepartment/:department_id', deletedepartment);
departmentroute.put('/putdepartment/:department_id', putdepartment);
departmentroute.get('/getdepartment1')




module.exports = departmentroute;
