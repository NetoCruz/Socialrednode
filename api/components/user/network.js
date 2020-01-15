const express = require('express');
const response = require('../../../network/response')
const router = express.Router();
const controller = require('./controller')
router.get('/', function (req,res){
    const lista = controller.list()
    response.success(req,res,lista,200)
})

module.exports = router;