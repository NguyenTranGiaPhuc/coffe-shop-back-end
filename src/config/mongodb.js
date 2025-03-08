import { MongoClient, ServerApiVersion } from 'mongodb'
import dotenv from "dotenv";

dotenv.config();

const DATABASE_NAME = 'CoffeeShop'
let coffeeDatabaseInstance = null

const mongoClientInstance = new MongoClient(process.env.MONGODB_URL, {
    serverApi: {
			version: ServerApiVersion.v1,
			strict: true,
			deprecationErrors: true
    }
})

export const CONNECT_DB = async () => {
	console.log('Connecting....')
	try {
		await mongoClientInstance.connect()
		console.log(' MongoDB connected successfully!');

		coffeeDatabaseInstance = mongoClientInstance.db(DATABASE_NAME)
	} catch (error) {
		console.error(' MongoDB connection failed:', error);
		process.exit(0);
	}
};

export const GET_DB = () => {
	if (!coffeeDatabaseInstance) throw new Error('Must connect to Database first!')
		return coffeeDatabaseInstance
}
