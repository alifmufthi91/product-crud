import env from '../config/env'
import Sequelize from 'sequelize'

const sequelize = new Sequelize({
  host: env.DB_HOST,
  username: env.DB_USERNAME,
  password: env.DB_PASSWORD,
  database: env.DB_NAME,
  dialect: 'mysql'
})

module.exports = sequelize
