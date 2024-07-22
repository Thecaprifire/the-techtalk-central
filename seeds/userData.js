// Importing Post model from ../models directory
const { User } = require("../models");
// Array of dummy blog post data
const userData = [
  {
    username: "DaenarysStormborn",
    email: "dany@example.com",
    password: "password1",
  },
  {
    username: "RhaenyraTargaryen",
    email: "rhae2@example.com",
    password: "password2",
  },
  {
    username: "JohnSnow",
    email: "jonjon@example.com",
    password: "password3",
  },
  {
    username: "CerseiLannister",
    email: "cerlan@example.com",
    password: "password4",
  },
  {
    username: "TomenBaratheon",
    email: "tomy@example.com",
    password: "password5",
  },

];
// Function to seed posts table with dummy data using bulkCreate method
const seedUsers = () => User.bulkCreate(userData);
// Exporting seedPosts function for use in other files
module.exports = seedUsers;