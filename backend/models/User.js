const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  role: { type: String, enum: ['student', 'teacher'], required: true },
  email: { type: String, unique: true },
  password: String,
});

module.exports = mongoose.model('User', userSchema);
