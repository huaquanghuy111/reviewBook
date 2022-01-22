'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Book.init(
    {
      title: DataTypes.STRING,
      decription: DataTypes.STRING(5000),
      thumbnail: DataTypes.STRING(5000),
      KindId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Book',
    }
  )
  return Book
}
