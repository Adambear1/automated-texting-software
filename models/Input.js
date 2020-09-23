const mongoose = require("mongoose");
const InputSchema = mongoose.Schema({
  address: {
    type: String,
    required: [true, "Address Required"],
  },
  city: {
    type: String,
    required: [true, "City Required"],
  },
  county: {
    type: String,
    required: [true, "County Required"],
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
  amount: {
    type: Number,
    trim: true,
    required: [true, "Amount Owed is Required"],
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
