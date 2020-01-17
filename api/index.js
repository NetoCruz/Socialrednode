const express = require("express");
const config = require('../config.js');
const bodyParser = require('body-parser');
const app = express();
const user = require('./components/user/network')
const swaggerUi = require('swagger-ui-express');

app.use(bodyParser.json());
const swaggerDoc = require('./swagger.json');
//rutas

app.use('/api/user',user)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.listen(config.api.port, () => {
   console.log('APi escuchando en el purto', config.api.port) 
})