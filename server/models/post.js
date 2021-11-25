'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Post.init({
    title: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: { msg: "Title is required" }
      }
    },
    author_name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: { msg: "Author is required" }
      }
    },
    content: {
      type: DataTypes.TEXT,
      validate: {
        notContains: { msg: "Content is required" }
      }
    },
    image_url: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: { msg: "Image URL is required" }
      }
    }
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};