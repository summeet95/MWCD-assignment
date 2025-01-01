const express = require("express");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");

const router = express.Router();

// POST route to register a user
router.post("/register", async (req, res) => {
  const { username, email, password, isManager } = req.body;

  // Validate input
  if (!username || !email || !password) {
    return res.status(400).send({
      message: "All fields are required: username, email, and password.",
    });
  }

  try {
    // Create a new user with the isManager field
    const newUser = new User({ username, email, password, isManager }); // Include isManager
    console.log(newUser);

    // Save the user to the database
    await newUser.save();

    // Respond with the created user (excluding password)
    const { password: _, ...userWithoutPassword } = newUser.toObject();
    res.status(201).send(userWithoutPassword);
  } catch (error) {
    if (error.code === 11000) {
      return res
        .status(409)
        .send({ message: "User with this email already exists." });
    }
    res
      .status(500)
      .send({ message: "Error registering user", error: error.message });
  }
});

// POST route to log in a user
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  // Validate input
  if (!email || !password) {
    return res.status(400).send({
      message: "Email and password are required.",
    });
  }

  try {
    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).send({ message: "User not found." });
    }

    // Compare passwords
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).send({ message: "Invalid password." });
    }

    // Respond with success message (optionally include user data)
    const { password: _, ...userWithoutPassword } = user.toObject();
    res.status(200).send({
      message: "Login successful!",
      user: userWithoutPassword,
    });
  } catch (error) {
    res.status(500).send({
      message: "Error logging in",
      error: error.message,
    });
  }
});

module.exports = router;
