const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// CORS setup: Allow requests from localhost:3000 (frontend)
const corsOptions = {
  origin: "http://localhost:3000", // Allow frontend from this address
  methods: ["GET", "POST", "PUT", "DELETE"], // Specify allowed methods
  credentials: true, // Allow credentials (cookies, authorization headers, etc.)
};

app.use(cors(corsOptions)); // Apply CORS middleware with custom options

// Import Routes
const ideaRoutes = require("./routes/ideaRoutes");
const userRoutes = require("./routes/userRoutes");

// Routes
app.use("/api/ideas", ideaRoutes); // Idea-related routes
app.use("/api/users", userRoutes); // User-related routes

// Database connection (adjust to your DB setup)
mongoose
  .connect(
    "mongodb+srv://summeet:apple.com@mwcd.lwgyi.mongodb.net/?retryWrites=true&w=majority&appName=MWCD",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// Set up the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
