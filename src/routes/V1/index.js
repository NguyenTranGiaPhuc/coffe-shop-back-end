import express from 'express'
import { StatusCodes } from 'http-status-codes'
import { boardRoutes } from './boardRoutes.js'

const Router = express.Router()

//Check APIs v1 status
Router.get('/status', (req, rest) => {
    rest.status(StatusCodes.OK).json({ message: 'APIs v1 are ready to use.'})
})

// Board APIs 
Router.use('/boards', boardRoutes)

export const APIs_V1 = Router