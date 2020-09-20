const mongoose = require("mongoose");
const InputSchema = mongoose.Schema({
  address: {
    type: String,
    trim: true,
    required: [true, "Address Required"],
  },
  first_name: {
    type: String,
    trim: true,
    required: [true, "First Name Required"],
  },
  last_name: {
    type: String,
    trim: true,
    required: [true, "Last Name Required"],
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
  default_amount: {
    type: String,
    trim: true,
    required: [true, "Default Amount Required"],
  },
  auction_date: {
    type: Date,
    trim: true,
    required: [true, "Auction Date Required"],
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

const Input = mongoose.model("input", InputSchema);

module.exports = Input;
