import express from 'express'
import { authController } from "../../controllers/authController.js";
import { StatusCodes } from "http-status-codes";
import { authValidation } from '../../validations/authValidation.js';

const Router = express.Router();

//AUTH
Router.route('/register')
    .get((req, res) => {
        res.status(StatusCodes.OK).json({message: 'Sending request register.'})
    })

    .post(authValidation.createNew, authController.createNew)
    
Router.post('/login', authValidation.createNew)

export const authRoutes = Router
