import cors from 'cors'
import express from 'express'
import { logger, httpContext, contextMiddleware } from 'express-glass'
import routes from './routes'

const app = express()

// Add headers
app.use((req, res, next) => {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Content-Type', 'application/json')
  next()
})

// use it before all route definitions
app.use(cors({ origin: ['*'] }))

// Middleware
app.use(express.json())
app.use(express.static('public'))
app.use(httpContext.middleware)
app.use(contextMiddleware)

app.disable('x-powered-by')

app.use('/api', routes)

export default app
logger().info('Executing Server: app.js ...')
