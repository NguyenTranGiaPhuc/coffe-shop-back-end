import 'dotenv/config'

export const env = {
  MONGODB_URI : process.env.MONGODB_URI,
	DATABASE_NAME : process.env.DATABASE_NAME,
	APP_HOST : process.env.APP_HOSTNAME,
	APP_PORT : process.env.APP_PORT
}