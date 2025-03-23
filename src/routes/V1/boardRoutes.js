import express from 'express'
import { StatusCodes } from 'http-status-codes'
import { authController } from '../../controllers/authController.js'
import { authValidation } from '../../validations/authValidation.js'

const Router = express.Router()

Router.route('/')
	.get((req, res) => {
		res.status(StatusCodes.OK).json({ message: 'Note: API get list board.'})
	})

	.post(authValidation.createNew, authController.createNew)

export const boardRoutes = Router