const express = require('express'); 
const { getrole, postrole,deleterole, putrole} = require('../../Controller/roleController/roleController');
const { validateRole } = require('../../Controller/roleController/roleValidation');

roleroute = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     role:
 *       type: object
 *       properties:
 *         role_id:
 *           type: string
 *         role_name:
 *           type: string
 */

/**
 * @swagger
 * /getrole:
 *   get:
 *     summary: Retrieve all role records
 *     description: Node.js GET API for retrieving role records
 *     responses:
 *       200:
 *         description: Successful retrieval of role records
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/hospital'
 */

/**
 * @swagger
 * /postrole:
 *   post:
 *     summary: Add a new role
 *     description: Node.js API for adding a new role
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/hospital'
 *     responses:
 *       200:
 *         description: Room added successfully
 */

/**
 * @swagger
 * /deleterole/{role_id}:
 *   delete:
 *     summary: Delete a room by ID
 *     description: Node.js API for deleting a role
 *     parameters:
 *       - in: path
 *         name: room_id
 *         required: true
 *         description: The ID of the role to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Room deleted successfully
 */

/**
 * @swagger
 * /putrole/{role_id}:
 *   put:
 *     summary: Update a room by ID
 *     description: Node.js API for updating a role
 *     parameters:
 *       - in: path
 *         name: room_id
 *         required: true
 *         description: The ID of the room to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Role'
 *     responses:
 *       200:
 *         description: Room updated successfully
 */


roleroute.get('/getrole',getrole);
roleroute.post('/postrole',validateRole,postrole);
roleroute.delete('/deleterole/:role_id',deleterole);
roleroute.put('/putrole/:role_id', putrole);

module.exports = roleroute;