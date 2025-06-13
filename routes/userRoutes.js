// Import Express and create a router instance
const express = require("express");
const router = express.Router();

// Import controller functions for handling user logic
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
} = require("../controllers/userController");

// Import middleware to validate user input
const validateUser = require("../middlewares/validateUser");

// --- Route Definitions ---

// GET /users - Fetch all users
router.get("/users", getAllUsers);

// GET /users/:id - Fetch a user by ID
router.get("/users/:id", getUserById);

// POST /user - Create a new user (with validation)
router.post("/user", validateUser, createUser);

// PUT /user/:id - Update an existing user by ID (with validation)
router.put("/user/:id", validateUser, updateUser);

// DELETE /user/:id - Delete a user by ID
router.delete("/user/:id", deleteUser);

// Export the router to be used in the main app
module.exports = router;
