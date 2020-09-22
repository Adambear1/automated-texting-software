const mongoose = require("mongoose");
const InputSchema = mongoose.Schema({
  address: {
    type: String,
    required: [true, "Address Required"],
  },
  name: {
    type: String,
    required: [true, "Name Required"],
  },
  email: {
    type: String,
    trim: true,
    required: [true, "Email Required"],
  },
  phoneNumber: {
    type: String,
    trim: true,
    required: [true, "Phone Number Required"],
  },
  type: {
    type: String,
    trim: true,
    required: [true, "Type of Procurement is Required"],
  },
  default_amount: {
    type: String,
  },
  date: {
    type: String,
  },
  date_published: {
    type: Date,
    default: Date.now(),
  },
});

const Input = mongoose.model("input", InputSchema);

module.exports = Input;
