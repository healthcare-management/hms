const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const cors = require('cors');

const app = express();    
const port = 6600;  

app.use(express.json());
app.use(cors())


const roomroute = require('./Route/roomRoute/roomRoute');
const departmentroute = require('./Route/departmentRoute/departmentRoute');
const employeeroute = require('./Route/employeeRoute/employeeRouter');
const roleroute = require('./Route/roleRoute/roleRoute');
const employeeprofileroute = require('./Route/employeeprofileRoute/employeeprofileRoute');
const assignroleRoute = require('./Route/assignroleRoute/assignroleRoute');
const { labrouter } = require('./Route/labRoute/labRoute');
const { patientRouter } = require('./Route/patientRouter/patientRouter');
const { hospttreatment } = require('./Route/hospttreatmentRouter/hospttreatmentRouter');

app.use('/', roomroute);
app.use('/', departmentroute);
app.use('/', employeeroute);
app.use('/', roleroute);
app.use('/', employeeprofileroute);
app.use('/', assignroleRoute);
app.use('/', labrouter);
app.use('/', patientRouter);
app.use('/',hospttreatment)



// Swagger setup for room

const roomSwaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Room API Documentation',
      version: '1.0.0',
    },
    servers: [
      {
        url: `http://localhost:${port}`,
      },
    ],
  },
  apis: ['./Route/roomRoute/roomRoute.js',
  './Route/departmentRoute/departmentRoute.js',
  './Route/employeeRoute/employeeRouter.js',
  './Route/roleRoute/roleRoute.js',
  './Route/employeeprofileRoute/employeeprofileRoute.js',
  './Route/patientRouter/patientRouter.js'
  ]
};

const roomSwaggerDocs = swaggerJsdoc(roomSwaggerOptions);
app.use('/testing', swaggerUi.serve, swaggerUi.setup(roomSwaggerDocs));

app.use("/public",express.static("Public"));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
