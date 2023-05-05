const swaggerJSDoc = require("swagger-jsdoc")
const swaggerUi = require("swagger-ui-express")
require("dotenv").config()

const options = {
   apis: [
      "./src/routes/auth.routes.js",
      "./src/routes/auth.admin.routes.js",

      "./src/routes/users.routes.js",
      "./src/models/users.js",

      "./src/routes/admin.routes.js",
      "./src/models/admin.js",

      "./src/routes/event.routes.js",
      "./src/models/event.js",
   ],
   definition: {
      openapi: "3.0.0",
      info: {
         title: "Eventapp de eventos en Node.js",
         version: "0.0.9",
         description: "API para aplicación de eventos",
      },
   },
}

//Genero una especificacion en json para la documentacion

const swaggerSpec = swaggerJSDoc(options)

const swaggerDocs = (app, port) => {
   //Ruta donde se mostrará la documentación
   app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec))
   app.get("/api/v1/docs.json", (req, res) => {
      res.setHeader({ "Content-type": "application/json" })
      res.send(swaggerSpec)
   })
   console.log(
      `La documentación está disponible en ${process.env.URL}:${port}/api/v1/docs`
   )
}

module.exports = swaggerDocs
