const express = require('express');
const { getGrades, addGrade } = require('../controllers/gradeController');
const router = express.Router();

router.get('/:studentId', getGrades); 
router.post('/', addGrade);     
module.exports = router;
