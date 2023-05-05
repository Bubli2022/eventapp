const db = require("./utils/database")
const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const routerApi = require("./routes")

const app = express()

app.use(express.json())
app.use(cors())
app.use(morgan("tiny"))

routerApi(app)

db.sync({ alter: true }) //devuelve una promesa
   .then(() => console.log("Base de datos sincronizada"))
   .catch((error) => console.log(error))

app.get("/", (req, res) => {
   res.status(200).json({
      status: "Respuesta exitosa",
      description:
         "Prueba esta API con SWAGGER en el siguiente enlace https://eventapp-production-ad47.up.railway.app/api/v1/docs/",
      link: process.env.HOST,
   })
})

module.exports = app
