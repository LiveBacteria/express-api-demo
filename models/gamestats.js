'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class gameStats extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  gameStats.init({
    playerName: DataTypes.STRING,
    healthPoints: DataTypes.INTEGER,
    manaPoints: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'gameStats',
  });
  return gameStats;
};