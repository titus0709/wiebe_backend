// const express = require("express");
// const router = express.Router();
// const Address = require("../models/address.model");

// router.post("/submit-address", async (req, res) => {
//   const { addressType, address, userId } = req.body;

//   try {
//     const newAddress = new Address({
//       userId: userId,
//       // size: size,
//       // color: color,
//       // quantity: quantity,
//       addressType,
//       addressLine1: address.addressLine1,
//       addressLine2: address.addressLine2,
//       landmark: address.landmark,
//       pincode: address.pincode,
//       city: address.city,
//       state: address.state,
//       country: address.country,
//     });

//     const savedAddress = await newAddress.save();

//     res.status(200).json({
//       message: "Address submitted successfully",
//       data: savedAddress,
//     });
//   } catch (error) {
//     console.error("Error saving address:", error);
//     res.status(500).json({
//       message: "Failed to submit address",
//       error: error.message,
//     });
//   }
// });

// router.get("/addresses", async (req, res) => {
//   try {
//     const userId = req.query.userId;

//     const addresses = await Address.find({ userId });

//     if (!addresses || addresses.length === 0) {
//       return res
//         .status(404)
//         .json({ message: "No addresses found for this user." });
//     }

//     res.status(200).json(addresses);
//   } catch (error) {
//     console.error("Error fetching addresses:", error);
//     res.status(500).json({
//       message: "Failed to fetch addresses",
//       error: error.message,
//     });
//   }
// });

// module.exports = router;

//added

const express = require('express');
const router = express.Router();
const Address = require('../models/address.model');

// Endpoint to submit a new address
router.post('/submit-address', async (req, res) => {
  const { addressType, address, userId } = req.body;

  if (!userId || !addressType || !address) {
    return res.status(400).json({ message: 'Missing required fields.' });
  }

  try {
    const newAddress = new Address({
      userId,
      addressType,
      addressLine1: address.addressLine1,
      addressLine2: address.addressLine2,
      landmark: address.landmark,
      pincode: address.pincode,
      city: address.city,
      state: address.state,
      country: address.country,
    });

    const savedAddress = await newAddress.save();

    res.status(200).json({
      message: 'Address submitted successfully',
      data: savedAddress,
    });
  } catch (error) {
    console.error('Error saving address:', error);
    res.status(500).json({
      message: 'Failed to submit address',
      error: error.message,
    });
  }
});

// Endpoint to get addresses for a specific user
// Fetch addresses for a specific user
router.get('/addresses', async (req, res) => {
  try {
    const { userId } = req.query;
    if (!userId) {
      return res.status(400).json({ message: 'User ID is required.' });
    }

    const addresses = await Address.find({ userId });
    if (!addresses || addresses.length === 0) {
      return res
        .status(404)
        .json({ message: 'No addresses found for this user.' });
    }

    res.status(200).json(addresses);
  } catch (error) {
    console.error('Error fetching addresses:', error);
    res
      .status(500)
      .json({ message: 'Internal Server Error', error: error.message });
  }
});

module.exports = router;
