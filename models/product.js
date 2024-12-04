// const mongoose = require("mongoose");

// const ProductSchema = new mongoose.Schema({
//   frontImage: { type: String, required: true }, // URL or path of front image
//   backImage: { type: String, required: false }, // URL or path of back image
//   size: { type: String, required: true },
//   quantity: { type: Number, required: true },
//   color: { type: String, required: true },
//   address: { type: String, required: true },
// //   PaymentId: { type: String, required: true }, //add after enabling payment method
//   createdAt: { type: Date, default: Date.now },
// });

// module.exports = mongoose.model("Product", ProductSchema);

const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    orderItems: [
      {
        frontImage: { type: String, required: false },
        backImage: { type: String, required: false },
        size: { type: String, required: false },
        quantity: { type: Number, required: false },
        color: { type: String, required: false },
        orderId: { type: String, required: false },
        placement: { type: String, required: false },
        designPosition: { type: String, required: false },
        contactDetails: { type: Object, required: false }, // You can customize this further
      },
    ],
    ShippingAddress: {
      addressLine1: {
        type: String,
        required: false,
      },
      addressLine2: {
        type: String,
      },
      landmark: {
        type: String,
      },
      pincode: {
        type: String,
        required: false,
      },
      city: {
        type: String,
        required: false,
      },
      state: {
        type: String,
        required: false,
      },
      country: {
        type: String,
        required: false,
      },
      addressType: {
        type: String,
        enum: ['home', 'work', 'away', 'other'],
        default: 'home',
        required: false,
      },
    },
    // add payment schema here
  },
  {
    timestamps: false,
  }
);

const Order = mongoose.model('Order', orderSchema);

export default Order;
