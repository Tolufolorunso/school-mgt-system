const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    lowercase: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    select: false
  },
  role: {
    type: String,
    required: true,
    enum: ["Accountant", "Teacher", "Principal", "Administrator"],
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  privileges: {
    read: {
      type: Boolean,
      default: false,
    },
    create: {
      type: Boolean,
      default: false,
    },
    update: {
      type: Boolean,
      default: false,
    },
    delete: {
      type: Boolean,
      default: false,
    },
  },
  created: {
    type: String,
    required: true,
  },
  request: {
    type: Boolean,
    default: false,
  },
});


UserSchema.pre('save', async function () {
  if (!this.isModified('password')) return;

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.comparePassword = async function (candidatePassword) {
  const isMatch = await bcrypt.compare(candidatePassword, this.password);
  return isMatch;
};


const User = mongoose.model('User', UserSchema);
module.exports = User;
