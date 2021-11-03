'use strict';

const { query } = require('express');
const sequelize = require('sequelize');

module.exports = {
  up: (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return queryInterface.addColumn('UserGameBiodata', 'user_id', {
      type: sequelize.INTEGER,
      references: {
        model: 'UserGames',
        key: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return queryInterface.removeColumn('UserGameBiodata', 'user_id', {});
  },
};
