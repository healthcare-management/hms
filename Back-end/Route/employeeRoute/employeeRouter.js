const express = require('express');

employeeroute = express.Router();

const {getemployee,postemployee,deleteemployee,putemployee, getemployee1, getemployee2}= require('../../Controller/employeeController/employeeController');

/**
 * @swagger
 * components:
 *   schemas:
 *     Employee:
 *       type: object
 *       properties:
 *         employee_id:
 *           type: string
 *         employee_name:
 *           type: string
 *         employee_contactno:
 *           type: string
 */

/**
 * @swagger
 * /getemployees:
 *   get:
 *     summary: Retrieve all employee records
 *     description: Node.js GET API for retrieving employee records
 *     responses:
 *       200:
 *         description: Successful retrieval of employee records
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Employee'
 */

/**
 * @swagger
 * /postemployee:
 *   post:
 *     summary: Add a new employee
 *     description: Node.js API for adding a new employee
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Employee'
 *     responses:
 *       200:
 *         description: Employee added successfully
 */

/**
 * @swagger
 * /deleteemployee/{employee_id}:
 *   delete:
 *     summary: Delete an employee by ID
 *     description: Node.js API for deleting an employee
 *     parameters:
 *       - in: path
 *         name: employee_id
 *         required: true
 *         description: The ID of the employee to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Employee deleted successfully
 */

/**
 * @swagger
 * /putemployee/{employee_id}:
 *   put:
 *     summary: Update an employee by ID
 *     description: Node.js API for updating an employee
 *     parameters:
 *       - in: path
 *         name: employee_id
 *         required: true
 *         description: The ID of the employee to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Employee'
 *     responses:
 *       200:
 *         description: Employee updated successfully
 */


employeeroute.get('/getemployee',getemployee);
employeeroute.post('/postemployee',postemployee);
employeeroute.delete('/deleteemployee/:employee_id',deleteemployee);
employeeroute.put('/putemployee/:employee_id',putemployee);
employeeroute.get('/getemployee1', getemployee1)
employeeroute.get('/getemployee2/:employee_id', getemployee2)

module.exports = employeeroute;