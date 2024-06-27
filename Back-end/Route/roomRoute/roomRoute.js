const express = require('express');

const roomroute = express.Router();

const {getroom,postroom,deleteroom, putroom} = require('../../Controller/roomController/roomContoller');
const { validateroom } = require('../../Controller/roomController/roomValidation');

/**
 * @swagger
 * components:
 *   schemas:
 *     Room:
 *       type: object
 *       properties:
 *         room_id:
 *           type: string
 *         room_name:
 *           type: string
 */

/**
 * @swagger
 * /getroom:
 *   get:
 *     summary: Retrieve all room records
 *     description: Node.js GET API for retrieving room records
 *     responses:
 *       200:
 *         description: Successful retrieval of room records
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Room'
 */

/**
 * @swagger
 * /postroom:
 *   post:
 *     summary: Add a new room
 *     description: Node.js API for adding a new room
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Room'
 *     responses:
 *       200:
 *         description: Room added successfully
 */

/**
 * @swagger
 * /deleteroom/{room_id}:
 *   delete:
 *     summary: Delete a room by ID
 *     description: Node.js API for deleting a room
 *     parameters:
 *       - in: path
 *         name: room_id
 *         required: true
 *         description: The ID of the room to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Room deleted successfully
 */

/**
 * @swagger
 * /putroom/{room_id}:
 *   put:
 *     summary: Update a room by ID
 *     description: Node.js API for updating a room
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
 *             $ref: '#/components/schemas/Room'
 *     responses:
 *       200:
 *         description: Room updated successfully
 */


roomroute.get('/getroom',getroom);
roomroute.post('/postroom',validateroom,postroom);
roomroute.delete('/deleteroom/:room_id',deleteroom);
roomroute.put('/putroom/:room_id',putroom);


module.exports = roomroute;
