// Import the in-memory user data array from the user model
let users = require("../models/userModel");

// GET /users - Retrieve all users
const getAllUsers = (req, res) => {
  // Respond with status 200 (OK) and the full list of users
  res.status(200).json(users);
};

// GET /users/:id - Retrieve a user by their ID
const getUserById = (req, res) => {
  // Find the user whose ID matches the route parameter
  const user = users.find(u => u.id === req.params.id);

  // If user not found, return 404 Not Found
  if (!user) return res.status(404).json({ error: "User not found." });

  // If found, return 200 OK with the user data
  res.status(200).json(user);
};

// POST /user - Create a new user
const createUser = (req, res) => {
  // Destructure fields from request body
  const { firstName, lastName, hobby } = req.body;

  // Create a new user object with an incremented ID
  const newUser = {
    id: String(users.length + 1),
    firstName,
    lastName,
    hobby
  };

  // Add the new user to the in-memory array
  users.push(newUser);

  // Return 201 Created with the new user
  res.status(201).json(newUser);
};

// PUT /user/:id - Update an existing user by ID
const updateUser = (req, res) => {
  // Find the index of the user in the array
  const index = users.findIndex(u => u.id === req.params.id);

  // If not found, return 404 Not Found
  if (index === -1) return res.status(404).json({ error: "User not found." });

  // Destructure fields from request body
  const { firstName, lastName, hobby } = req.body;

  // Update the user at the found index
  users[index] = { id: req.params.id, firstName, lastName, hobby };

  // Return 200 OK with the updated user
  res.status(200).json(users[index]);
};

// DELETE /user/:id - Delete a user by ID
const deleteUser = (req, res) => {
  // Find the index of the user to delete
  const index = users.findIndex(u => u.id === req.params.id);

  // If not found, return 404 Not Found
  if (index === -1) return res.status(404).json({ error: "User not found." });

  // Remove the user from the array
  const deletedUser = users.splice(index, 1);

  // Return 200 OK with the deleted user
  res.status(200).json(deletedUser[0]);
};

// Export all controller functions for use in routes
module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};
