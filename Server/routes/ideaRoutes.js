const express = require("express");
const Idea = require("../models/Idea");
const router = express.Router();

// POST Route: Submit an idea
router.post("/submit", async (req, res) => {
  const { employeeName, department, idea } = req.body;

  try {
    const newIdea = new Idea({
      employeeName,
      department,
      idea,
    });

    await newIdea.save();
    res.status(201).json({ message: "Idea submitted successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to submit idea." });
  }
});

// GET Route: Get all ideas
router.get("/ideas", async (req, res) => {
  try {
    const ideas = await Idea.find();
    res.status(200).json(ideas);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch ideas." });
  }
});

// PUT Route: Increment vote count for an idea
router.put("/ideas/:id", async (req, res) => {
  try {
    const idea = await Idea.findById(req.params.id);

    if (!idea) {
      return res.status(404).json({ error: "Idea not found." });
    }

    // Increment the vote count
    idea.votes += 1;
    await idea.save();

    res
      .status(200)
      .json({ message: "Vote added successfully!", votes: idea.votes });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to add vote." });
  }
});

// DELETE Route: Delete an idea
router.delete("/delete/:id", async (req, res) => {
  try {
    const idea = await Idea.findByIdAndDelete(req.params.id);

    if (!idea) {
      return res.status(404).json({ error: "Idea not found." });
    }

    res.status(200).json({ message: "Idea deleted successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to delete idea." });
  }
});

module.exports = router;
