const Sequelize = require("sequelize")
module.exports = (sequelize, DataTypes) => {
   return event.init(sequelize, DataTypes)
}

/**
 * @openapi
 * components:
 *   schemas:
 *     request_event:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *           example: musical event for the whole family
 *         shortDescription:
 *           type: string
 *           example: new event is coming soon
 *         longDescription:
 *           type: string
 *           example: This event is a beautiful moment to your life
 *         date:
 *           type: date
 *           example: 2023-06-12
 *         hour:
 *           type: number
 *           example: 15
 *         organizer:
 *           type: string
 *           example: Ariel Marcos
 *         site:
 *           type: string
 *           example: Burzaco, Buenos Aires
 *         statePublished:
 *           type: bool
 *           example: false
 *         stateDraft:
 *           type: boolean
 *           example: true
 *         subscribe:
 *           type: boolean
 *           example: false
 *         complete:
 *           type: boolean
 *           example: false
 *         admin_id:
 *           type: number
 *           example: 2
 *         user_id:
 *           type: number
 *           example: 1
 *     create_event:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *           example: musical event for the whole family
 *         shortDescription:
 *           type: string
 *           example: new event is coming soon
 *         longDescription:
 *           type: string
 *           example: This event is a beautiful moment to your life
 *         date:
 *           type: date
 *           example: 2023-06-12
 *         hour:
 *           type: number
 *           example: 15
 *         organizer:
 *           type: string
 *           example: Ariel Marcos
 *         site:
 *           type: string
 *           example: Burzaco, Buenos Aires
 *         statePublished:
 *           type: bool
 *           example: false
 *         stateDraft:
 *           type: boolean
 *           example: true
 *         subscribe:
 *           type: boolean
 *           example: false
 *         complete:
 *           type: boolean
 *           example: false
 *     request_event_delete:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           example: event deleted
 *     securitySchemes:
 *       bearerAuth:
 *         type: http
 *         scheme: Bearer
 *         bearerFormat: JWT
 */

class event extends Sequelize.Model {
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
            title: {
               type: DataTypes.STRING,
               allowNull: false,
            },
            shortDescription: {
               type: DataTypes.STRING,
               allowNull: true,
            },
            longDescription: {
               type: DataTypes.STRING,
               allowNull: true,
            },
            Date: {
               type: DataTypes.DATEONLY,
               allowNull: true,
            },
            hour: {
               type: DataTypes.INTEGER,
               allowNull: true,
            },
            organizer: {
               type: DataTypes.STRING,
               allowNull: true,
            },
            site: {
               type: DataTypes.STRING,
               allowNull: true,
            },
            statePublished: {
               type: DataTypes.BOOLEAN,
               allowNull: true,
               defaultValue: false,
            },
            stateDraft: {
               type: DataTypes.BOOLEAN,
               allowNull: true,
               defaultValue: true,
            },
            subscribe: {
               type: DataTypes.BOOLEAN,
               allowNull: true,
               defaultValue: false,
            },
            complete: {
               type: DataTypes.BOOLEAN,
               allowNull: true,
               defaultValue: false,
            },
            user_id: {
               type: DataTypes.INTEGER,
               allowNull: false,
            },
            admin_id: {
               type: DataTypes.INTEGER,
               allowNull: false,
            },
         },
         {
            sequelize,
            tableName: "event",
            schema: "public",
            timestamps: false,
            indexes: [
               {
                  name: "event_pkey",
                  unique: true,
                  fields: [{ name: "id" }],
               },
            ],
         }
      )
   }
}
