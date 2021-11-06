import { logger } from 'express-glass'
import http from 'http'
import env from './config/env'
import app from './server/app'

const server = http.createServer(app)

server.listen(env.PORT, () => {
  logger().info(`Running on port ${env.PORT}...`)
})

export default server
