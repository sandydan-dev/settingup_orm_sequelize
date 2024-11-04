// require sequelize instance to create models

const { sequelize, DataTypes } = require("../lib/index");

// create model using sequelize instance and make it validate which type of data to insert into.

const track = sequelize.define("track", {
  name: DataTypes.TEXT,
  artist: DataTypes.TEXT,
  genre: DataTypes.TEXT,
  album: DataTypes.TEXT,
  duration: DataTypes.INTEGER,
  release_year: DataTypes.INTEGER,
});

// export model for seeding date
module.exports = track;
