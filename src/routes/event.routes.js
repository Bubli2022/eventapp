const { Router } = require("express")

const {
   getAllEvent,
   getEventByDate,
   createEvent,
   updateEvent,
   deleteEvent,
} = require("../controllers/event.controller")

const authAdminMiddleware = require("../middlewares/auth.middleware")

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
 *     security:
 *       - bearerAuth: []
 *     summary: See all event in the app
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
 *                     $ref: "#/components/schemas/request_event"
 * /api/v1/event/{id}:
 *   delete:
 *     security:
 *       - bearerAuth: []
 *     summary: Delete event from the app
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
 *         description: Data deleted successfully
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

router.get("/event/:date", getEventByDate)

router.post("/event", authAdminMiddleware, createEvent)

router.put("/event/:id", authAdminMiddleware, updateEvent)

router.delete("/event/:id", authAdminMiddleware, deleteEvent)

module.exports = router
