// Import Express framework
const express = require("express");
const app = express();

// Define the port number where the server will run
const PORT = 7000;

// Import custom middleware and routes
const logger = require("./middlewares/logger");           // Logger middleware for request logging
const userRoutes = require("./routes/userRoutes");        // User-related route definitions

// --- Global Middleware ---

// Built-in middleware to parse JSON bodies from incoming requests
app.use(express.json());

// Custom logger middleware to log method, URL, and status code
app.use(logger);

// --- Routes ---

// Mount user routes under the root path (e.g., /users, /user/:id)
app.use("/", userRoutes);

// --- Start the Server ---

// Start the Express server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
