const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return admin_event.init(sequelize, DataTypes);
}

class admin_event extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    admin_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'admin',
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
    tableName: 'admin_event',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "admin_event_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
