const AdminServices = require("../services/admin.services")

const createAdmin = async (req, res) => {
   try {
      const newAdmin = req.body
      const result = await AdminServices.create(newAdmin)
      res.status(201).json(result)
   } catch (error) {
      res.status(400).json(error.message)
   }
}

const deleteAdmin = async (req, res) => {
   try {
      const { id } = req.params
      const result = await AdminServices.delete(id)
      res.json({ message: "admin deleted" })
   } catch (error) {
      res.status(400).json(error.message)
   }
}

module.exports = {
   createAdmin,
   deleteAdmin,
}
