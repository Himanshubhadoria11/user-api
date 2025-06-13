// Middleware to validate user input before creating or updating a user
const validateUser = (req, res, next) => {
  // Destructure required fields from the request body
  const { firstName, lastName, hobby } = req.body;

  // Check if any of the required fields are missing or empty
  if (!firstName || !lastName || !hobby) {
    // If validation fails, return 400 Bad Request with an error message
    return res.status(400).json({ error: "Invalid Input: firstName, lastName, and hobby are required." });
  }

  // If all fields are present, proceed to the next middleware or route handler
  next();
};

// Export the validation middleware for use in route definitions
module.exports = validateUser;

