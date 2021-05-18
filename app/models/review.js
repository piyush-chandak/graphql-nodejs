'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Review.belongsTo(models.Blog, {
        foreignKey: 'blogId',
        as: 'Blog'
      });

      Review.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'User'
      });
    }
  };

  Review.init({
    comment: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    blogId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Review',
  });

  return Review;
};