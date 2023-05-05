const { Router } = require("express")
const { register, login } = require("../controllers/auth.admin.controller")

const router = Router()

/**
 * @openapi
 * /api/v1/auth.admin/register:
 *   post:
 *     summary: create a new admin into application
 *     tags: [Auth admin]
 *     requestBody:
 *       description: Required fields to create a new admin
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/register'
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: admin created
 *       400:
 *         description: Validation error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: validation error
 * /api/v1/auth.admin/login:
 *   post:
 *     summary: Login an existing admin into the app
 *     tags: [Auth admin]
 *     requestBody:
 *       description: Required fields to login a existing admin
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/login"
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/login"
 *       400:
 *         description: not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: admin not found / something wrong / not password or email provided
 */

router.post("/register", register)
router.post("/login", login)

module.exports = router
