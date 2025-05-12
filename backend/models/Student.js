const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'Please add a first name'],
    trim: true
  },
  lastName: {
    type: String,
    required: [true, 'Please add a last name'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Please add an email'],
    unique: true,
    trim: true,
    match: [
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      'Please add a valid email'
    ]
  },
  major: {
    type: String,
    required: [true, 'Please add a major'],
    trim: true
  },
  graduationYear: {
    type: Number,
    required: [true, 'Please add graduation year'],
    min: [1900, 'Graduation year must be after 1900'],
    max: [new Date().getFullYear() + 10, 'Graduation year is too far in the future']
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Student', studentSchema);
