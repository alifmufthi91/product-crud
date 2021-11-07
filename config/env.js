// import dotenv from 'dotenv'
const dotenv = require('dotenv')

dotenv.config()
const env = {
  PORT: process.env.PORT,

  DB_HOST: process.env.DB_HOST,
  DB_PORT: process.env.DB_PORT,
  DB_NAME: process.env.DB_NAME,
  DB_USERNAME: process.env.DB_USERNAME,
  DB_PASSWORD: process.env.DB_PASSWORD,

  JWT_SECRET: process.env.JWT_SECRET,
  JWT_TTL: process.env.JWT_TTL,

  FILE_STORAGE: process.env.FILE_STORAGE,
  FILE_MAXIMUM_SIZE: process.env.FILE_MAXIMUM_SIZE

}

module.exports = env
