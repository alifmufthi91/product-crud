import { logger } from 'express-glass'
import { Transaction } from 'sequelize'
import DataNotFound from '../error/data_not_found'
import { Product, User } from '../model'
import { assertNotNull } from '../util/assert_util'
import { objectToLogStr } from '../util/log_util'
import getProductConditions from '../util/query/product_query'
import pagedData from '../util/response/paged_data'

// const productRepository = new ProductRepository()
const productService = {}

productService.register = async (product) => {
  logger().info(`register new product, product = ${objectToLogStr(product)}`)
  const newProduct = await Product.create(product)
  logger().info('register new product success')
  return newProduct
}

productService.getAll = async (query) => {
  logger().info('getting all product')
  const { size, page, order_by, order_direction } = query
  const pageSize = parseInt(size) || 12
  const start = page ? (parseInt(page) * pageSize) - pageSize : null || 0
  const products = await Product.findAndCountAll({
    limit: pageSize,
    offset: start,
    order: order_by ? [[order_by, order_direction || 'DESC']] : null,
    where: getProductConditions(query)
  })
  const totalPage = Math.ceil(products.count / pageSize)
  logger().info('getting all product success')
  return pagedData(products.rows, products.count, totalPage)
}

productService.getById = async (productId) => {
  logger().info(`getting product by id, id = ${productId}`)
  const product = await Product.findOne({
    where: {
      id: productId
    },
    include: [{
      model: User,
      as: 'uploader'
    }]
  })
  assertNotNull(product,
    new DataNotFound('product is not found'))
  logger().info('getting product by id success')
  return product
}

productService.update = async (product, productId) => {
  logger().info(`update product, product = ${objectToLogStr(product)}`)
  const oldProduct = await Product.findOne({
    where: {
      id: productId
    },
    lock: Transaction.LOCK.UPDATE
  })
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
  const product = await Product.findOne({
    where: {
      id: productId
    }
  })
  await product.destroy()
  logger().info('delete product by id success')
}

export default productService
