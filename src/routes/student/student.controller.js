const { Student, StudentId } = require('../../models/student.model')
const CustomError = require('../../errors/index')

const { StatusCodes } = require('http-status-codes')

const addStudent = async (req, res) => {
  let student = new Student({
    ...req.body,
    class: req.body.classAdmittedTo,
    studentName: {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
    },
    parentDetails: {
      fathersName: req.body.fathersName,
      fathersOccupation: req.body.fathersOccupation,
      fathersLocation: req.body.fathersLocation,
      mothersName: req.body.mothersName,
      mothersOccupation: req.body.mothersOccupation,
      mothersLocation: req.body.mothersLocation,
    },
    address: {
      address_Line_1: req.body.address_Line_1,
      city: req.body.city,
      state: req.body.state,
      postalCode: req.body.postalCode,
      country: req.body.country,
    },
    studentId: new StudentId({
      classRollNo: req.body.classRollNo,
      registrationNo: req.body.registrationNo,
    }),
  })

  const studentExists = await Student.findOne({
    'studentId.classRollNo': req.body.classRollNo,
  })

  if (studentExists) {
    throw new CustomError.BadRequestError('Student exist')
  }

  console.log(14, student)

  student = await student.save()

  // console.log(18, student)

  res.status(StatusCodes.CREATED).json({
    status: true,
    student,
  })
}

module.exports = {
  addStudent,
}
