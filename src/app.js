const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const routerApi = require("./routes")

const app = express()

app.use(express.json())
app.use(cors())
app.use(morgan("tiny"))

routerApi(app)

app.get("/", (req, res) => {
   res.status(200).json({
      status: "Respuesta exitosa",
      description:
         "Prueba esta API con SWAGGER en el siguiente enlace https://ecommerce-perezariel.up.railway.app/api/v1/docs/",
      link: process.env.HOST,
   })
})

module.exports = app
