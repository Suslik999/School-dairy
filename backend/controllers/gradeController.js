const Grade = require('../models/Grade');

exports.getGrades = async (req, res) => {
  try {
    const grades = await Grade.find({ studentId: req.params.studentId });
    res.json(grades);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.addGrade = async (req, res) => {
  const { studentId, subject, grade, teacherId } = req.body;
  try {
    const newGrade = new Grade({ studentId, subject, grade, teacherId });
    await newGrade.save();
    res.json({ message: 'Grade added!' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
