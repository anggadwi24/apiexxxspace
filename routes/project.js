var express = require('express');
var router = express.Router();

const ProjectController = require('../controller/project');




router.get('/', ProjectController.getAllProject);
router.get('/:slug', ProjectController.getProjectBySlug);






module.exports = router;