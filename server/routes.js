import express from 'express'
import fileController from '../controller/file_controller'
import productController from '../controller/product_controller'
import userController from '../controller/user_controller'
import JwtAuth from '../middleware/authentication'

const routes = express()

routes.post('/files', JwtAuth, fileController.upload)
routes.get('/files/:name', fileController.download)

routes.post('/users', userController.register)
routes.get('/users', JwtAuth, userController.getAll)
routes.post('/users/login', userController.login)

routes.post('/products', JwtAuth, productController.register)
routes.get('/products', JwtAuth, productController.getAll)

export default routes
