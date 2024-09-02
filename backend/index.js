require("dotenv").config();

const express = require("express");
const cors = require("cors");
const Razorpay = require("razorpay");
const fs = require("fs");
const bcrypt = require("bcryptjs");
const { mongoose } = require("mongoose");
const UserModel = require("./Schema/UserModel");
const CartModel = require("./Schema/Cart");
const WishlistModel = require("./Schema/Wishlist");
const OrderModel = require("./Schema/Orders");
const PORT = process.env.PORT || 3000;
const PUBLIC_URL = process.env.PUBLIC_URL;
const MONGO_URL = process.env.MONGO_URL;

const app = express();
app.use(express.json());
app.use(
  cors({
    methods: "GET,POST,PATCH,DELETE,OPTIONS",
    optionsSuccessStatus: 200,
    origin: PUBLIC_URL,
    credentials: true,
  })
);
app.options("*", cors());

//api
// app.get("/check", async (req, res) => {
//   try {
//     res.status(200).json("backend working properly");
//   } catch (err) {
//     console.log(err);
//     res.status(500).json("internal server error");
//   }
// });

//Start the server
app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
});
