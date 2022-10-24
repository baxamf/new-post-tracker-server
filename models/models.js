const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const User = sequelize.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  username: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
    require: true,
  },
  password: { type: DataTypes.STRING, allowNull: false, require: true },
});

const Token = sequelize.define("token", {
  refreshToken: { type: DataTypes.STRING, require: true },
});

const Ttn = sequelize.define("ttn", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  value: { type: DataTypes.STRING, unique: true },
});

const City = sequelize.define("city", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  value: { type: DataTypes.STRING, unique: true },
});

const Warhouse = sequelize.define("warhouse", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  description: { type: DataTypes.STRING, unique: true, allowNull: false },
});

User.hasOne(Token);
Token.belongsTo(User);
City.hasMany(Warhouse);
Warhouse.belongsTo(City);

module.exports = {
  User,
  Token,
  Ttn,
  City,
  Warhouse,
};
