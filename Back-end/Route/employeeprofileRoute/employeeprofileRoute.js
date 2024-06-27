const express = require('express');

const employeeprofileroute = express.Router();

const {getemployeeprofile, postemployeeprofile,deleteemployeeprofile,putemployeeprofile, getallemployeeprofile} = require('../../Controller/employeeprofileController/employeeprofileController');
const upload = require('../../Multer/Multer');
 const { employeeprofileValidatde } = require('../../Controller/employeeprofileController/employeeprofileValidation');

/**
 * @swagger
 * components:
 *   schemas:
 *     hospital:
 *       type: object
 *       properties:
 *         profile_id:
 *           type: string
 *         profile_name: 
 *           type: string
 *         age:
 *           type: number
 *         gender:
 *           type: string
 *         contact_no:
 *           type: string
 *         address:
 *           type: string
 *         salary:
 *           type: string
 *         date_of_joining:
 *           type: date
 *         date_of_birth:
 *           type: date
 *         department_id:
 *           type: string
 */

/**
 * @swagger
 * /getemployeeprofile:
 *   get:
 *     summary: Retrieve all department records
 *     description: Node.js GET API for retrieving employeeprofile records
 *     responses:
 *       200:
 *         description: Successful retrieval of employeeprofile records
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/hospital'
 */

/**
 * @swagger
 * /postemployeeprofile:
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
 * /deleteemployeeprofile/{profile_id}:
 *   delete:
 *     summary: This API is used to check if the DELETE method is working or not
 *     description: Node.js API testing
 *     parameters:
 *       - in: path
 *         name: profile_id
 *         required: true
 *         description: String profile_id required
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Deleted successfully
 */

/**
 * @swagger
 * /putemployeeprofile/{profile_id}:
 *   put:
 *     summary: Check if PUT method is working
 *     description: Node.js PUT API for updating employee records
 *     parameters:
 *       - in: path
 *         name: profile_id
 *         required: true
 *         description: String profile_id required
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


employeeprofileroute.get('/getemployeeprofile/:employee_id', getemployeeprofile);
employeeprofileroute.get('/getallemployeeprofile', getallemployeeprofile);
employeeprofileroute.post('/postemployeeprofile',employeeprofileValidatde,upload.single("image"),postemployeeprofile );
employeeprofileroute.delete('/deleteemployeeprofile/:profile_id', deleteemployeeprofile );
employeeprofileroute.put('/putemployeeprofile/:profile_id',  putemployeeprofile);




module.exports = employeeprofileroute;
