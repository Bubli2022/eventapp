const models = require("../models")

class UserServices {
   static async create(user) {
      try {
         const result = await models.users.create(user)
         return result
      } catch (error) {
         throw error
      }
   }

   static async delete(id) {
      try {
         const result = await models.users.destroy({ where: { id } })
         return result
      } catch (error) {
         throw error
      }
   }
}

module.exports = UserServices
