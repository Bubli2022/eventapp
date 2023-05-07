const Sequelize = require("sequelize")
const bcrypt = require("bcrypt")
module.exports = (sequelize, DataTypes) => {
   return users.init(sequelize, DataTypes)
}

/**
 * @openapi
 * components:
 *   schemas:
 *     users:
 *       type: object
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         username:
 *           type: string
 *           example: Ariel Marcos
 *         email:
 *           type: string
 *           example: arielMarcos@gmail.com
 *     register:
 *       type: object
 *       properties:
 *         username:
 *           type: string
 *           example: Ariel Marcos
 *         email:
 *           type: string
 *           example:  arielMarcos@gmail.com
 *         password:
 *           type: string
 *           example: 1234
 *     login:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           example:  arielMarcos@gmail.com
 *         password:
 *           type: string
 *           example: 1234
 *     request_auth:
 *       type: object
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         username:
 *           type: string
 *           example: Ariel
 *         email:
 *           type: string
 *           example:  arielMarcos@gmail.com
 *         token:
 *     request_logout:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           example: Usuario eliminado con exito
 */

class users extends Sequelize.Model {
   static init(sequelize, DataTypes) {
      return super.init(
         {
            id: {
               autoIncrement: true,
               autoIncrementIdentity: true,
               type: DataTypes.INTEGER,
               allowNull: false,
               primaryKey: true,
            },
            username: {
               type: DataTypes.STRING,
               allowNull: false,
               unique: "users_username_key",
            },
            email: {
               type: DataTypes.STRING,
               allowNull: false,
               unique: "admin_email_key",
            },
            password: {
               type: DataTypes.STRING,
               allowNull: false,
            },
         },
         {
            hooks: {
               beforeCreate: (user, options) => {
                  const { password } = user
                  const hash = bcrypt.hashSync(password, 10)
                  user.password = hash
               },
            },
            sequelize,
            tableName: "users",
            schema: "public",
            timestamps: false,
            indexes: [
               {
                  name: "users_pkey",
                  unique: true,
                  fields: [{ name: "id" }],
               },
               {
                  name: "users_username_key",
                  unique: true,
                  fields: [{ name: "username" }],
               },
            ],
         }
      )
   }
}
