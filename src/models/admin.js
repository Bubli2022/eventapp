const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return admin.init(sequelize, DataTypes);
}

class admin extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: "admin_username_key"
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: "admin_email_key"
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'admin',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "admin_email_key",
        unique: true,
        fields: [
          { name: "email" },
        ]
      },
      {
        name: "admin_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "admin_username_key",
        unique: true,
        fields: [
          { name: "username" },
        ]
      },
    ]
  });
  }
}
