const models = require("../models")

class EventServices {
   static async getAll() {
      try {
         const result = await models.event.findAll()
         return result
      } catch (error) {
         throw error
      }
   }

   static async getById(id) {
      try {
         const result = await models.event.findByPk(id)
         return result
      } catch (error) {
         throw error
      }
   }

   static async create(event) {
      try {
         const result = await models.event.create(event)
         return result
      } catch (error) {
         throw error
      }
   }

   static async update(id, field) {
      try {
         const result = await models.event.update(field, { where: { id } })
         return result
      } catch (error) {
         throw error
      }
   }

   static async delete(id) {
      try {
         const result = await models.event.destroy({ where: { id } })
         return result
      } catch (error) {
         throw error
      }
   }
}

module.exports = EventServices
