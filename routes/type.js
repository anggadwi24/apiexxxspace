var express = require('express');
const TypeController = require('../controller/type');
var router = express.Router();




router.get('/', TypeController.getAllType);
router.get('/:slug',TypeController.getTypeBySlug)

module.exports = router;