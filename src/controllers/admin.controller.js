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

const deleteAdmin = (_, res) => {
   res.json({ message: "eliminando un admin" })
}

module.exports = {
   createAdmin,
   deleteAdmin,
}
