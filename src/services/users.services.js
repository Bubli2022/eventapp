const Users = require("../models/users")

class UserServices {
   static async create(user) {
      try {
         const result = await Users.create(user)
         return result
      } catch (error) {
         throw error
      }
   }

   static async delete(id) {
      try {
         const result = await Users.destroy({ where: { id } })
         return result
      } catch (error) {
         throw error
      }
   }
}

module.exports = UserServices
