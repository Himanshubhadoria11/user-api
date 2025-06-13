// In-memory user data used as a temporary data source (no database needed)
let users = [
  {
    id: "1",              // Unique user ID (as a string)
    firstName: "Himanshu", // User's first name
    lastName: "Bhadoria",  // User's last name
    hobby: "Reading"     // User's hobby
  },
  {
    id: "2",
    firstName: "Ravi",
    lastName: "Sharma",
    hobby: "Cycling"
  }
];

// Export the users array so it can be used in controllers
module.exports = users;
