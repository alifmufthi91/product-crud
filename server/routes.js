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
routes.get('/users/:id', JwtAuth, userController.getById)
routes.post('/users/login', userController.login)

routes.post('/products', JwtAuth, productController.register)
routes.get('/products', JwtAuth, productController.getAll)
routes.get('/products/:id', JwtAuth, productController.getById)
routes.put('/products/:id', JwtAuth, productController.update)
routes.delete('/products/:id', JwtAuth, productController.delete)

export default routes
