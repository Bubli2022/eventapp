const EventServices = require("../services/event.service")
// const { Evento } = require("../models")

const getAllEvent = async (_, res) => {
   try {
      const result = await EventServices.getAll()
      res.json(result)
   } catch (error) {
      res.status(400).json(error.message)
   }
}

const getEventByDate = async (req, res) => {
   const { fechaInicio, fechaFin } = req.params
   try {
      const result = await EventServices.findAll({
         where: {
            Date: {
               [Op.between]: [fechaInicio, fechaFin],
            },
         },
      })

      res.json(result)
   } catch (error) {
      res.status(500).json({ mensaje: "Hubo un error al obtener los eventos." })
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
      res.json({ message: "event deleted" })
   } catch (error) {
      res.status(400).json(error.message)
   }
}

module.exports = {
   getAllEvent,
   getEventByDate,
   createEvent,
   updateEvent,
   deleteEvent,
}
