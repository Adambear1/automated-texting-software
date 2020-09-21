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
    enum: ["Cancelled", "Expired", "Foreclosure", "FSBO"],
  },
  default_amount: {
    type: String,
  },
  auction_date: {
    type: Date,
  },
  list_site: {
    type: String,
  },
  takedown_date: {
    type: Date,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

const Input = mongoose.model("input", InputSchema);

module.exports = Input;
