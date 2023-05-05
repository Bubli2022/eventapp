const Admin = require("../models/admin")

class AdminServices {
   static async create(user) {
      try {
         const result = await Admin.create(user)
         return result
      } catch (error) {
         throw error
      }
   }

   static async delete(id) {
      try {
         const result = await Admin.destroy({ where: { id } })
         return result
      } catch (error) {
         throw error
      }
   }
}

module.exports = AdminServices
