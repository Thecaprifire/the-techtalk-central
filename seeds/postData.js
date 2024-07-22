const { Post } = require("../models");

const postData = [
  {
    title: "Why My Code Works Only on Fridays",
    content: "Ever noticed how some code only decides to work on Fridays? Maybe it’s tired from a long week of bugs and just wants to take the weekend off!",
    user_id: 1,
  },
  {
    title: "The Great Tab vs. Space Debate: An Unending Saga",
    content: "Tabs or spaces? The coding world’s version of the chicken or the egg. Let's dive deep into why neither side will ever give up.",
    user_id: 2,
  },
  {
    title: "Debugging: The Art of Destroying Bugs and Sanity Simultaneously",
    content: "Debugging is like being the detective in a crime movie where you are also the murderer. Let’s explore the ups and downs of tracking those pesky bugs!",
    user_id: 3,
  },
  {
    title: "How to Name Your Variables: Avoiding ‘Thingy’ and ‘Stuff’",
    content: "Naming variables is an art. Learn how to avoid the dreaded ‘thingy’ and ‘stuff’ in your codebase and impress your team with your naming prowess.",
    user_id: 4,
  },
  {
    title: "Coffee: The Fuel That Powers Coders and Their Code",
    content: "Without coffee, would code even exist? Let's take a look at how this magical bean juice keeps the world of programming spinning.",
    user_id: 5,
  }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;