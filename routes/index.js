const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  // Possibly serve landing page of a sort
  res.status(404).send("This page cannot be accessed via web browser.");
});

module.exports = router;
