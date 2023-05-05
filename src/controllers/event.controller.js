const EventServices = require("../services/event.service")

const getAllEvent = async (_, res) => {
   try {
      const result = await EventServices.getAll()
      res.json(result)
   } catch (error) {
      res.status(400).json(error.message)
   }
}

const getEventById = async (req, res) => {
   try {
      const { id } = req.params
      const result = await EventServices.getById(id)
      res.json(result)
   } catch (error) {
      res.status(400).json(error.message)
   }
}

const createEvent = async (req, res) => {
   try {
      const event = req.body
      const result = await EventServices.create(event)
      res.json(result)
   } catch (error) {
      res.status(400).json(error.message)
   }
}

const updateEvent = async (req, res) => {
   try {
      const { id } = req.params
      const field = req.body
      const result = await EventServices.update(id, field)
      res.json(result)
   } catch (error) {
      res.status(400).json(error.message)
   }
}

const deleteEvent = async (req, res) => {
   try {
      const { id } = req.params
      const result = await EventServices.delete(id)
      res.json(result)
   } catch (error) {
      res.status(400).json(error.message)
   }
}

module.exports = {
   getAllEvent,
   getEventById,
   createEvent,
   updateEvent,
   deleteEvent,
}
