const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return users_event.init(sequelize, DataTypes);
}

class users_event extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    event_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'event',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'users_event',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "users_event_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
