import { logger } from 'express-glass'
import ProductRepository from '../repository/product_repository'
import { assertNotNull } from '../util/assert_util'
import { objectToLogStr } from '../util/log_util'
import DataNotFound from '../error/data_not_found'

const productRepository = new ProductRepository()
const productService = {}

productService.register = async (product) => {
  logger().info(`register new product, product = ${objectToLogStr(product)}`)
  const newProduct = await productRepository.create(product)
  logger().info('register new product success')
  return newProduct
}

productService.getAll = async () => {
  logger().info('getting all product')
  const products = await productRepository.findAll()
  logger().info('getting all product success')
  return products
}

productService.getById = async (productId) => {
  logger().info(`getting product by id, id = ${productId}`)
  const product = await productRepository.findById(productId)
  assertNotNull(product,
    new DataNotFound('product is not found'))
  logger().info('getting product by id success')
  return product
}

productService.update = async (product, id) => {
  logger().info(`update product, product = ${objectToLogStr(product)}`)
  const oldProduct = await productRepository.findById(id)
  assertNotNull(oldProduct,
    new DataNotFound('product is not found'))
  oldProduct.set({
    product_name: product.product_name,
    product_description: product.product_description,
    photo: product.photo,
    updated_at: new Date().getTime()
  })
  await oldProduct.save()
  logger().info('update product success')
  return oldProduct
}

productService.delete = async (productId) => {
  logger().info(`delete product by id, product.id = ${productId}`)
  const product = await productRepository.findById(productId)
  await product.destroy()
  logger().info('delete product by id success')
}

export default productService
