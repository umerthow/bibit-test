const Sequelize = require('sequelize');
const db = require('./../configs/db');

const LogModel = db.define('logs', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  url: { type: Sequelize.STRING },
  params: { type: Sequelize.STRING },
  method: { type: Sequelize.STRING }
},
{
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  freezeTableName: true
});

module.exports = LogModel;
