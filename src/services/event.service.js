const models = require("../models")
// const { Evento } = require("../models")

class EventServices {
   static async getAll() {
      try {
         const result = await models.event.findAll()
         return result
      } catch (error) {
         throw error
      }
   }

   static async getEventByDate(fechaInicio, fechaFin) {
      try {
         const result = await models.event.findAll({
            where: {
               Date: {
                  [Op.between]: [fechaInicio, fechaFin],
               },
            },
         })

         return result
      } catch (error) {
         console.log(error)
         throw new Error("Hubo un error al obtener los eventos.")
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
