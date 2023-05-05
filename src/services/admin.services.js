const models = require("../models")

class AdminServices {
   static async create(user) {
      try {
         const result = await models.admin.create(user)
         return result
      } catch (error) {
         throw error
      }
   }

   static async delete(id) {
      try {
         const result = await models.admin.destroy({ where: { id } })
         return result
      } catch (error) {
         throw error
      }
   }
}

module.exports = AdminServices
