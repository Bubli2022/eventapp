const Event = require("../models/event")

class EventServices {
   static async getAll() {
      try {
         const result = await Event.findAll()
         return result
      } catch (error) {
         throw error
      }
   }

   static async getById(id) {
      try {
         const result = await Event.findByPk(id)
         return result
      } catch (error) {
         throw error
      }
   }

   static async create(event) {
      try {
         const result = await Event.create(event)
         return result
      } catch (error) {
         throw error
      }
   }

   static async update(id, field) {
      try {
         const result = await Event.update(field, { where: { id } })
         return result
      } catch (error) {
         throw error
      }
   }

   static async delete(id) {
      try {
         const result = await Event.destroy({ where: { id } })
         return result
      } catch (error) {
         throw error
      }
   }
}

module.exports = EventServices
