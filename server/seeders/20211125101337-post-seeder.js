'use strict';
const posts = require("./post.json")
posts.forEach(post => {
  post.createdAt = new Date(),
  post.updatedAt = new Date()
});
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Posts', posts, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Posts', null, {});
  }
};
