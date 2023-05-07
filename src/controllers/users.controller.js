const UserServices = require("../services/users.services")

const createUser = async (req, res) => {
   try {
      const newUser = req.body
      const result = await UserServices.create(newUser)
      res.status(201).json(result)
   } catch (error) {
      res.status(400).json(error.message)
   }
}

const deleteUser = async (req, res) => {
   try {
      const { id } = req.params
      const result = await UserServices.delete(id)
      res.json({ message: "user deleted" })
   } catch (error) {
      res.status(400).json(error.message)
   }
}

module.exports = {
   createUser,
   deleteUser,
}
