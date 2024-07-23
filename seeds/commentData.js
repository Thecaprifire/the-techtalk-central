const { Comment } = require("../models");

const commentData = [
  {
    comment_text: "Did you try turning it off and on again?",
    user_id: 6,
    post_id: 1,
  },
  {
    comment_text: "I swear it worked on my machine!",
    user_id: 2,
    post_id: 1,
  },
  {
    comment_text: "When in doubt, blame the compiler.",
    user_id: 3,
    post_id: 1,
  },
  {
    comment_text: "Real coders don’t use semicolons.",
    user_id: 4,
    post_id: 1,
  },
  {
    comment_text: "Is it a bug or a feature?",
    user_id: 5,
    post_id: 1,
  },
  {
    comment_text: "If it compiles, ship it.",
    user_id: 1,
    post_id: 2,
  },
  {
    comment_text: "99 little bugs in the code, 99 bugs in the code...",
    user_id: 2,
    post_id: 2,
  },
  {
    comment_text: "Why does it work only on Fridays? It must be on a weekend bug vacation!",
    user_id: 3,
    post_id: 1,
  },
  {
    comment_text: "The real bug is trying to understand why tabs and spaces are such a big deal.",
    user_id: 4,
    post_id: 2,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;