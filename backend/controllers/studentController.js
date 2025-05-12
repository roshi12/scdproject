const Student = require('../models/Student');
const asyncHandler = require('express-async-handler');

// @desc    Get all students
// @route   GET /api/students
// @access  Public
exports.getStudents = asyncHandler(async (req, res) => {
  const students = await Student.find({});
  res.status(200).json(students);
});

// @desc    Get single student
// @route   GET /api/students/:id
// @access  Public
exports.getStudent = asyncHandler(async (req, res) => {
  const student = await Student.findById(req.params.id);

  if (!student) {
    res.status(404);
    throw new Error('Student not found');
  }

  res.status(200).json(student);
});

// @desc    Create a student
// @route   POST /api/students
// @access  Public
exports.createStudent = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, major, graduationYear } = req.body;

  if (!firstName || !lastName || !email || !major || !graduationYear) {
    res.status(400);
    throw new Error('Please add all fields');
  }

  // Check if student already exists
  const studentExists = await Student.findOne({ email });

  if (studentExists) {
    res.status(400);
    throw new Error('Student already exists');
  }

  // Create student
  const student = await Student.create({
    firstName,
    lastName,
    email,
    major,
    graduationYear
  });

  if (student) {
    res.status(201).json({
      _id: student._id,
      firstName: student.firstName,
      lastName: student.lastName,
      email: student.email,
      major: student.major,
      graduationYear: student.graduationYear
    });
  } else {
    res.status(400);
    throw new Error('Invalid student data');
  }
});

// @desc    Update a student
// @route   PUT /api/students/:id
// @access  Public
exports.updateStudent = asyncHandler(async (req, res) => {
  const student = await Student.findById(req.params.id);

  if (!student) {
    res.status(404);
    throw new Error('Student not found');
  }

  // Update student
  const updatedStudent = await Student.findByIdAndUpdate(
    req.params.id, 
    req.body, 
    { new: true, runValidators: true }
  );

  res.status(200).json(updatedStudent);
});

// @desc    Delete a student
// @route   DELETE /api/students/:id
// @access  Public
exports.deleteStudent = asyncHandler(async (req, res) => {
  const student = await Student.findById(req.params.id);

  if (!student) {
    res.status(404);
    throw new Error('Student not found');
  }

  await student.deleteOne();

  res.status(200).json({ id: req.params.id });
});
