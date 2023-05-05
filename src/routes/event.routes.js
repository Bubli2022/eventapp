const { Router } = require("express")
const {
   getAllEvent,
   getEventById,
   createEvent,
   updateEvent,
   deleteEvent,
} = require("../controllers/event.controller")

const authMiddleware = require("../middlewares/auth.middleware")

const router = Router()
/**
 * @openapi
 * /api/v1/event:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: Create a new event
 *     tags: [Event]
 *     requestBody:
 *       description: Create a new event for the app
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/create_event"
 *     responses:
 *       201:
 *         description: created event
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
 *                     $ref: "#/components/schemas/request_event"
 *   get:
 *     summary: See all event
 *     tags: [Event]
 *     responses:
 *       200:
 *         description: Data displayed successfully
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
 *                     $ref: "#/components/schemas/request_event"
 *   delete:
 *     security:
 *       - bearerAuth: []
 *     summary: See the data of a cart in the app
 *     tags: [Event]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: event Id
 *     responses:
 *       200:
 *         description: Data displayed successfully
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
 *                     $ref: "#/components/schemas/request_event_delete"
 */

router.get("/event", getAllEvent)

router.get("/event/:id", getEventById)

router.post("/event", authMiddleware, createEvent)

router.put("/event/:id", authMiddleware, updateEvent)

router.delete("/event/:id", authMiddleware, deleteEvent)

module.exports = router
