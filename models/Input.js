const mongoose = require("mongoose");
const InputSchema = mongoose.Schema({
  address: {
    type: String,
    trim: true,
    required: [true, "Address Required"],
  },
  name: {
    type: String,
    trim: true,
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
    enum: ["Cancelled", "Expired", "Foreclosure", "FSBO"],
    trim: true,
    required: [true, "Type Required"],
  },
  // Foreclosure
  default_amount: {
    type: String,
    trim: true,
    required: [true, "Default Amount Required"],
  },
  auction_date: {
    type: Date,
    trim: true,
  },
  // FSBO
  list_site: {
    type: String,
    trim: true,
  },
  // Cancelled/Expired
  takedown_date: {
    type: Date,
    trim: true,
  },
  //
  date: {
    type: Date,
    default: Date.now(),
  },
});

const Input = mongoose.model("input", InputSchema);

module.exports = Input;
