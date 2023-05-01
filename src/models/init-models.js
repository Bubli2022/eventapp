const DataTypes = require("sequelize").DataTypes;
const _admin = require("./admin");
const _admin_event = require("./admin_event");
const _event = require("./event");
const _users = require("./users");
const _users_event = require("./users_event");

function initModels(sequelize) {
  const admin = _admin(sequelize, DataTypes);
  const admin_event = _admin_event(sequelize, DataTypes);
  const event = _event(sequelize, DataTypes);
  const users = _users(sequelize, DataTypes);
  const users_event = _users_event(sequelize, DataTypes);

  admin_event.belongsTo(admin, { as: "admin", foreignKey: "admin_Id"});
  admin.hasMany(admin_event, { as: "admin_events", foreignKey: "admin_Id"});
  admin_event.belongsTo(event, { as: "event", foreignKey: "event_Id"});
  event.hasMany(admin_event, { as: "admin_events", foreignKey: "event_Id"});
  users_event.belongsTo(event, { as: "event", foreignKey: "event_Id"});
  event.hasMany(users_event, { as: "users_events", foreignKey: "event_Id"});
  users_event.belongsTo(users, { as: "user", foreignKey: "user_Id"});
  users.hasMany(users_event, { as: "users_events", foreignKey: "user_Id"});

  return {
    admin,
    admin_event,
    event,
    users,
    users_event,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
