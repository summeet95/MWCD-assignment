// models/Idea.js

const mongoose = require("mongoose");

const ideaSchema = new mongoose.Schema(
  {
    employeeName: {
      type: String,
      required: true,
    },
    department: {
      type: String,
      required: true,
    },
    idea: {
      type: String,
      required: true,
    },
    votes: { type: Number, default: 0 },
  },
  { timestamps: true } // Automatically includes createdAt and updatedAt fields
);

const Idea = mongoose.model("Idea", ideaSchema);

module.exports = Idea;
