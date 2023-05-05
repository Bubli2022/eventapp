const models = require("../models")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
require("dotenv").config()

class AuthServices {
   static async register(admin) {
      try {
         const result = await models.admin.create(admin)
         return result
      } catch (error) {
         throw error
      }
   }
   static async login(credentials) {
      try {
         const { email, password } = credentials
         const admin = await models.admin.findOne({ where: { email } })
         if (admin) {
            const isValid = bcrypt.compareSync(password, admin.password)
            return isValid ? { isValid, admin } : { isValid }
         }
         return { isValid: false }
      } catch (error) {
         throw error
      }
   }
   static genToken(data) {
      try {
         const token = jwt.sign(data, process.env.JWT_SECRET, {
            expiresIn: "10m",
            algorithm: "HS512",
         })
         return token
      } catch (error) {
         throw error
      }
   }
}

module.exports = AuthServices
