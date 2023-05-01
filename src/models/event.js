const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return event.init(sequelize, DataTypes);
}

class event extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    shortDescription: {
      type: DataTypes.STRING,
      allowNull: true
    },
    longDescription: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    hour: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    organizer: {
      type: DataTypes.STRING,
      allowNull: true
    },
    site: {
      type: DataTypes.STRING,
      allowNull: true
    },
    statePublished: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    stateDraft: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    subscribe: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    complete: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    admin_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'event',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "event_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
