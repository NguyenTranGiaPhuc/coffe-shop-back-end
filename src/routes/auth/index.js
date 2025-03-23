import express from 'express'
import { StatusCodes } from 'http-status-codes'
import { authRoutes } from './authRoutes.js'

const Router = express.Router()

//Check APIs auth status
Router.get('/status', (req, rest) => {
    rest.status(StatusCodes.OK).json({ message: 'APIs auth are ready to use.'})
})

// Board APIs 
Router.use('/auth', authRoutes)

export const APIs_AUTH = Router