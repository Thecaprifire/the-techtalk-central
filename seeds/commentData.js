const { Comment } = require("../models");

const commentData = [
  {
    comment_text: "Nice idea!",
    user_id: 1,
    post_id: 1,
  },
  {
    comment_text: "Cool!",
    user_id: 2,
    post_id: 1,
  },
  {
    comment_text: "That's what I thought.",
    user_id: 3,
    post_id: 1,
  },
  {
    comment_text: "Great work!",
    user_id: 4,
    post_id: 1,
  },
  {
    comment_text: "That's kinda boring.",
    user_id: 5,
    post_id: 1,
  },
  {
    comment_text: "Good job.",
    user_id: 1,
    post_id: 2,
  },
  {
    comment_text: "Same with me.",
    user_id: 2,
    post_id: 2,
  }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;