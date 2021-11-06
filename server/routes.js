import express from 'express'
import fileController from '../controller/file_controller'
import { JwtAuth } from '../middleware/authentication'

const routes = express()

routes.post('/files', fileController.upload)
routes.get('/files/:name', fileController.download)

export default routes
