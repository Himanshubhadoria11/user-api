// Logger middleware to log request method, URL, and response status
const logger = (req, res, next) => {
  // Log the current timestamp, HTTP method, and requested URL
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);

  // Listen for the response to finish, then log the response status code
  res.on("finish", () => {
    console.log(`Status: ${res.statusCode}`);
  });

  // Pass control to the next middleware or route handler
  next();
};

// Export the logger middleware for use in app.js
module.exports = logger;
