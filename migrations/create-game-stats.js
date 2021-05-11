"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("gameStats", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      playerName: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      healthPoints: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      manaPoints: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      aliveStatus: {
        allowNull: false,
        type: Sequelize.ENUM,
        values: ["alive", "dead", "incapacitated"],
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("gameStats");
  },
};
