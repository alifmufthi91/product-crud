import { logger } from 'express-glass'
import ProductRepository from '../repository/product_repository'
import { objectToLogStr } from '../util/log_util'

const productRepository = new ProductRepository()
const productService = {}

productService.register = async (product) => {
  logger().info(`register new product, product = ${objectToLogStr(product)}`)
  const newProduct = await productRepository.create(product)
  logger().info('register new product success')
  return newProduct
}

productService.getAll = async () => {
  logger().info('geting all product')
  const products = await productRepository.findAll()
  logger().info('getting all product success')
  return products
}

export default productService
