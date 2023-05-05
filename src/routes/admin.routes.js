const { Router } = require("express")

const { createAdmin, deleteAdmin } = require("../controllers/admin.controller")

const authMiddleware = require("../middlewares/auth.middleware")

const router = Router()

/**
 * @openapi
 * /api/v1/admin:
 *   post:
 *     summary: Register a new admin into the app
 *     tags: [Admin]
 *     requestBody:
 *       description: To register a new admin you need a email and password
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/register"
 *     responses:
 *       201:
 *         description: created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/admin"
 * /api/v1/admin/{id}:
 *   delete:
 *     security:
 *       - bearerAuth: []
 *     summary: deleted data of admin
 *     tags: [Admin]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: user Id
 *     responses:
 *       200:
 *         description: Admin delete successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/admin"
 */

router.post("/admin", createAdmin)
router.delete("/admin/:id", authMiddleware, deleteAdmin)

module.exports = router
