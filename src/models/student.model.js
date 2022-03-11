const mongoose = require("mongoose")

const studentIdSchema = new mongoose.Schema({
  classRollNo: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return v && v.length >= 3
      },
      message: "Roll must be greater than 3",
    },
  },
  registrationNo: {
    type: String,
    required: true,
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
    enum: ["male", "female", "other"],
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
  },
  religion: {
    type: String,
    required: true,
  },
  parentDetails: {
    fathersName: {
      type: String,
      required: true,
    },
    fathersOccupation: {
      type: String,
      required: true,
    },
    fathersLocation: {
      type: String,
      required: true,
    },
    mothersName: {
      type: String,
      required: true,
    },
    mothersOccupation: {
      type: String,
      required: true,
    },
    mothersLocation: {
      type: String,
      required: true,
    },
  },
  email: String,
  phoneNumber: String,
  address: {
    address_Line_1: {
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
  courseName: {
    type: String,
    // required: true,
  },
  branchName: {
    type: String,
    // required: true,
  },
  class: {
    type: String,
    required: true,
    enum: ["jss1", "jss2", "jss3", "ss1", "ss2", "ss3"],
  },
  section: {
    type: String,
  },
  session: {
    type: String,
    required: true,
  },
  term: {
    type: String,
    required: true,
  },

  studentId: studentIdSchema,
})

const StudentId = mongoose.model("StudentId", studentIdSchema)

const Student = mongoose.model("Student", StudentSchema)
module.exports = { Student, StudentId }
