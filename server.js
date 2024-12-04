// // import express from 'express';
// // import mongoose from 'mongoose';

// // const cors = require('cors');

// // require('dotenv').config();

// // import connectDb from './config/db.js';

// // const designUploadRoute = require('./routes/designUploadRoute');
// // const categoryRoutes = require('./routes/category.routes');
// // const priceRoutes = require('./routes/price.routes');
// // const designRoutes = require('./routes/design.routes');
// // const addressRoutes = require('./routes/address.routes');

// // connectDb();

// // const app = express();

// // app.use(cors({}));

// // app.use(express.static('files'));
// // app.use(express.json());
// // app.use(express.urlencoded({ extended: true }));

// // app.use('/upload', designUploadRoute);
// // app.use(categoryRoutes);
// // app.use(priceRoutes);
// // app.use(designRoutes);
// // app.use(addressRoutes);

// // app.get('/', (req, res) => {
// //   res.send('Hello');
// // });

// // // app.get("/", (req, res) => {
// // //   res.send("Hello");
// // // });

// // mongoose
// //   .connect(process.env.MONGO_DB_URI, {
// //     dbName: process.env.DB_NAME,
// //   })
// //   .then(() => {
// //     console.log('connection success');
// //     app.listen(process.env.PORT);
// //     console.log('Listening at 8000');
// //   });

// import express from 'express';
// import mongoose from 'mongoose';
// import cors from 'cors'; // Use import instead of require
// import dotenv from 'dotenv'; // Use import instead of require

// import connectDb from './config/db.js'; // Use correct ES module syntax
// import designUploadRoute from './routes/designUploadRoute.js';
// import categoryRoutes from './routes/category.routes.js';
// import priceRoutes from './routes/price.routes.js';
// import designRoutes from './routes/design.routes.js';
// import addressRoutes from './routes/address.routes.js';

// // Load environment variables
// dotenv.config();

// // Connect to the database
// connectDb();

// const app = express();

// // Middleware
// app.use(cors({}));
// app.use(express.static('files'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Routes
// app.use('/upload', designUploadRoute);
// app.use(categoryRoutes);
// app.use(priceRoutes);
// app.use(designRoutes);
// app.use(addressRoutes);

// // Root endpoint
// app.get('/', (req, res) => {
//   res.send('Hello');
// });

// // MongoDB connection and server start
// mongoose
//   .connect(process.env.MONGO_DB_URI, {
//     dbName: process.env.DB_NAME,
//   })
//   .then(() => {
//     console.log('Database connection successful');
//     app.listen(process.env.PORT || 8000, () => {
//       console.log(`Server is running on port ${process.env.PORT || 8000}`);
//     });
//   })
//   .catch((error) => {
//     console.error('Database connection error:', error);
//   });

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');  // Use require instead of import
const dotenv = require('dotenv');  // Use require instead of import

const connectDb = require('./config/db');  // Use require for custom modules
const designUploadRoute = require('./routes/designUploadRoute');
const categoryRoutes = require('./routes/category.routes');
const priceRoutes = require('./routes/price.routes');
const designRoutes = require('./routes/design.routes');
const addressRoutes = require('./routes/address.routes');

// Load environment variables
dotenv.config();

// Connect to the database
connectDb();

const app = express();

// Middleware
app.use(cors({}));
app.use(express.static('files'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/upload', designUploadRoute);
app.use(categoryRoutes);
app.use(priceRoutes);
app.use(designRoutes);
app.use(addressRoutes);

// Root endpoint
app.get('/', (req, res) => {
  res.send('Hello');
});

// MongoDB connection and server start
mongoose
  .connect(process.env.MONGO_DB_URI, {
    dbName: process.env.DB_NAME,
  })
  .then(() => {
    console.log('Database connection successful');
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running on port ${process.env.PORT || 8000}`);
    });
  })
  .catch((error) => {
    console.error('Database connection error:', error);
  });
