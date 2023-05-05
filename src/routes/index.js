const authRoutes = require("./auth.routes")
const authAdminRoutes = require("./auth.admin.routes")
const eventRoutes = require("./event.routes")
const adminRoutes = require("./admin.routes")
const usersRoutes = require("./users.routes")

const routerApi = (app) => {
   app.use("/api/v1/auth", authRoutes)
   app.use("/api/v1/auth.admin", authAdminRoutes)
   app.use("/api/v1/", eventRoutes)
   app.use("/api/v1/", adminRoutes)
   app.use("/api/v1/", usersRoutes)
}

module.exports = routerApi
