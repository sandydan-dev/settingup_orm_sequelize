// require sequelize and datatypes and then create instance of sequelize

const sq = require("sequelize");

const sequelize = new sq.Sequelize({
  dialect: "sqlite",
  storage: "./db/track_database.sqlite",
});

module.exports = { sequelize, DataTypes: sq.DataTypes };
