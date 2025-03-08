import express from 'express';
import { CONNECT_DB, GET_DB } from './config/mongodb.js';
// import authController from './controllers/authController.js';
import jwt from 'jsonwebtoken';
import { env } from './config/enviroment.js'
import dotenv from 'dotenv'
import { APIs_V1 } from './routes/V1/index.js';

dotenv.config()

const START_SERVER = () => {
  const app = express()

	// const PORT = env.APP_PORT
	// const HOST = env.APP_HOST
  app.use('/v1', APIs_V1)

	app.get('/', async (req, res) => {
		// console.log(await GET_DB().listCollections().toArray())
		res.end('<h1>Hello World! Welcome to my first back-end web.</h1>')
	})

	app.listen(env.APP_PORT, env.APP_HOST, ()=>{
		console.log(`Hello Phuc, I'm running server at ${env.APP_HOST}:${env.APP_PORT}/`)
	})
}

CONNECT_DB()
	.then(() => console.log('Connected to MongoDB Compass.'))
	.then(() => START_SERVER())
	.catch(error => {
		console.log(error)
		process.exit(0)
	})

// app.post('/register', async (req, res)=>{
  //   try{
  //       const salt = await bcrypt.genSalt(10);
  //       const hashed = await bcrypt.hash(req.body.password, salt);
  //       //CREATE NEW USER
  //       const newUser = await new User({
  //       username: req.body.username,
  //       email: req.body.email,
  //       password: hashed
  //       })
  //       const user = await newUser.save();
  //       res.status(200).json(user);
  //     }catch(err){
  //       res.status(500).json(err);}
  //   })