// const mongoose = require("mongoose");

// const addressSchema = new mongoose.Schema({
//   addressLine1: {
//     type: String,
//     required: true,
//   },
//   addressLine2: {
//     type: String,
//   },
//   landmark: {
//     type: String,
//   },
//   pincode: {
//     type: String,
//     required: true,
//   },
//   city: {
//     type: String,
//     required: true,
//   },
//   state: {
//     type: String,
//     required: true,
//   },
//   country: {
//     type: String,
//     required: true,
//   },
//   addressType: {
//     type: String,
//     enum: ["home", "work", "away", "other"],
//     default: "home",
//     required: true,
//   },

//   userId: {
//     type: String,

//     required: true,
//   },
// });

// const Address = mongoose.model("Address", addressSchema);

// module.exports = Address;

//added

const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema(
  {
    addressLine1: {
      type: String,
      required: [true, 'Address Line 1 is required'],
      trim: true,
    },
    addressLine2: { type: String, trim: true },
    landmark: { type: String, trim: true },
    pincode: {
      type: String,
      required: [true, 'Pincode is required'],
      match: [/^\d{5,10}$/, 'Please provide a valid pincode'],
    },
    city: { type: String, required: [true, 'City is required'], trim: true },
    state: { type: String, required: [true, 'State is required'], trim: true },
    country: {
      type: String,
      required: [true, 'Country is required'],
      trim: true,
    },
    addressType: {
      type: String,
      enum: ['home', 'work', 'away', 'other'],
      default: 'home',
      required: [true, 'Address type is required'],
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, 'User ID is required'],
      ref: 'User',
    },
    size: { type: String, required: false, trim: true }, // Optional
    color: { type: String, required: false, trim: true }, // Optional
    quantity: {
      type: Number,
      required: false,
      min: [1, 'Quantity must be at least 1'],
    }, // Optional with validation
  },
  {
    timestamps: true,
  }
);

const Address = mongoose.model('Address', addressSchema);

module.exports = Address;
