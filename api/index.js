const express = require("express");
const config = require('../config.js');
const app = express();
const user = require('./components/user/network')

//rutas

app.use('/api/user',user)

app.listen(config.api.port, () => {
   console.log('APi escuchando en el purto', config.api.port) 
})