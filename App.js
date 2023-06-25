const express = require("express");
const path = require("path");
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Application started and Listening on port 3000");
});

app.get("/appointment", (req, res) => {
  const filePath = path.join(__dirname, "appointment.html");
  res.sendFile(filePath);
  console.log(__dirname);
});

app.get("/insurance", (req, res) => {
  const filePath = path.join(__dirname, "Insurance.html");
  res.sendFile(filePath);
  console.log(__dirname);
});