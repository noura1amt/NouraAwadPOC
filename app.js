const express = require("express");
const path = require("path");
const foodDb = require("./foodDb");

const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json());

// Serve static frontend files from the 'public' directory
app.use(express.static(path.join(__dirname, "../public")));

/**
 * GET /foods
 * CRUD route to retrieve all food items from the singleton mock database.
 */
app.get("/foods", (req, res) => {
  console.log(`[GET /foods] Request received at ${new Date().toISOString()}`);
  const items = foodDb.getAll();
  console.log(`[GET /foods] Returning ${items.length} items.`);
  res.status(200).json(items);
});

/**
 * 404 Catch-All Middleware
 * Handles requests made to undefined routes.
 */
app.use((req, res) => {
  console.log(`[404 Not Found] Attempted access to: ${req.method} ${req.originalUrl}`);
  res.status(404).json({ error: "Route not found" });
});

module.exports = app;