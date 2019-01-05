const Sequelize = require('sequelize');
const sequelize = require('../config/connection');

const todo = sequelize.define('todo', {
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  checked: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
});

module.exports = todo;
