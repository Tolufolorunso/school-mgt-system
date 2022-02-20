const mongoose = require('mongoose')

const studentIdSchema = new mongoose.Schema({
  ClassRollNo: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return v && v.length > 3
      },
      message: 'Roll must be greater than 3',
    },
  },
  RegistrationNo: {
    type: String,
  },
})

const StudentSchema = new mongoose.Schema({
  studentName: {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    middlename: {
      type: String,
    },
  },
  gender: {
    type: String,
    required: true,
    enum: ['male', 'female', 'other'],
  },
  dateOfBirth: {
    type: String,
    required: true,
  },
  dateOfAdmission: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: ['General', 'OBC', 'SC', 'ST', 'Others'],
  },
  religion: {
    type: String,
    required: true,
    enum: ['Muslim', 'Hindu', 'Sikh', 'Christian', 'Jain', 'Others'],
  },
  fathersName: {
    type: String,
    required: true,
  },
  mothersName: {
    type: String,
    required: true,
  },
  fathersOccupation: {
    type: String,
    required: true,
  },
  mothersOccupation: {
    type: String,
    required: true,
  },
  email: String,
  phoneNumber: {
    type: String,
    required: true,
  },
  address: {
    Address_Line_1: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    postalCode: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
  },
  CourseName: {
    type: String,
    required: true,
  },
  BranchName: {
    type: String,
    required: true,
  },
  Class: {
    type: String,
    required: true,
    enum: [
      '1st Semester',
      '2nd Semester',
      '3rd Semester',
      '4th Semester',
      '5th Semester',
      '6th Semester',
      '7th Semester',
      '8th Semester',
    ],
  },
  Section: {
    type: String,
    required: true,
    enum: ['A', 'B', 'C'],
  },
  Session: {
    type: String,
    required: true,
  },
  StudentId: studentIdSchema,
})

const Student = mongoose.model('Student', StudentSchema)
module.exports = Student
