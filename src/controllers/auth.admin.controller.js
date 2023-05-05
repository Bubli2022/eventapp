const AuthAdminServices = require("../services/auth.admin.services")
const transporter = require("../utils/mailer")

const register = async (req, res) => {
   try {
      const admin = req.body
      const result = await AuthAdminServices.register(admin)

      if (result) {
         res.status(201).json({ message: "admin created" })
         await transporter.sendMail({
            to: result.email,
            from: "bublicius2010@gmail.com",
            subject: "Email confirmation",
            html: "<h1>Gracias por registrarte en nuestra app de eventos, podrás registrarte para eventos futuros y visualizar los eventos que ya han sucedido.</h1> <p>Tienes que confirmar tu email</p><p> Solo haz click en el siguiente <a href='#'' target='new_blank'> enlace </a>",
         })
      } else {
         res.status(400).json({ message: "something wrong" })
      }
   } catch (error) {
      res.status(400).json(error.message)
   }
}

const login = async (req, res) => {
   try {
      const { email, password } = req.body
      if (!email) {
         res.status(400).json({
            error: "Missing data",
            message: " Not email or password provided",
         })
      }
      if (!password) {
         res.status(400).json({
            error: "Missing data",
            message: " Not email or password provided",
         })
      }
      const result = await AuthAdminServices.login({ email, password })
      if (result.isValid) {
         const { username, id, email } = result.admin
         const adminData = { username, id, email }
         const token = AuthAdminServices.genToken(adminData)
         adminData.token = token
         res.json(adminData)
      } else {
         res.status(400).json({ message: "admin noy found" })
      }
   } catch (error) {
      res.status(400).json({ message: "Something wrong" })
   }
}

module.exports = {
   register,
   login,
}
