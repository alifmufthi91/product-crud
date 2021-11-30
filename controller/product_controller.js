import { logger } from 'express-glass'
import ParamIllegal from '../error/param_illegal'
import productService from '../service/product_service'
import { assertNotNull, assertTrue } from '../util/assert_util'
import { objectToLogStr } from '../util/log_util'
import responseUtil from '../util/response_util'
import productValidator from '../validator/product_validator'

const productController = {}

productController.register = async (req, res, next) => {
  try {
    logger().info(`product registration request, data = ${objectToLogStr(req.body)}`)
    const validationResult = productValidator.register.validate(req.body)
    assertTrue(!validationResult.error,
      new ParamIllegal(validationResult.error ? validationResult.error.message : ''))
    const product = await productService.register(validationResult.value)
    responseUtil.success(res, { product })
  } catch (e) {
    logger().error(`user registration failed, error = ${e}`)
    responseUtil.fail(res, e)
  }
}

productController.getAll = async (req, res, next) => {
  try {
    logger().info('get all product request')
    const products = await productService.getAll(req.query)
    responseUtil.success(res, { products })
  } catch (e) {
    logger().error(`get all products failed, error = ${e}`)
    responseUtil.fail(res, e)
  }
}

productController.getById = async (req, res, next) => {
  try {
    logger().info('get product by id request')
    assertNotNull(req.params.id,
      new ParamIllegal('product id cant be empty'))
    const product = await productService.getById(req.params.id)
    responseUtil.success(res, { product })
  } catch (e) {
    logger().error(`get product by id failed, error = ${e}`)
    responseUtil.fail(res, e)
  }
}

productController.update = async (req, res, next) => {
  try {
    logger().info(`product update request, data = ${objectToLogStr(req.body)}`)
    assertNotNull(req.params.id,
      new ParamIllegal('product id cant be empty'))
    const validationResult = productValidator.update.validate(req.body)
    assertTrue(!validationResult.error,
      new ParamIllegal(validationResult.error ? validationResult.error.message : ''))
    const product = await productService.update(validationResult.value, req.params.id)
    responseUtil.success(res, { product })
  } catch (e) {
    logger().error(`user registration failed, error = ${e}`)
    responseUtil.fail(res, e)
  }
}

productController.delete = async (req, res, next) => {
  try {
    logger().info('product delete request')
    assertNotNull(req.params.id,
      new ParamIllegal('product id cant be empty'))
    await productService.delete(req.params.id)
    responseUtil.success(res, { })
  } catch (e) {
    logger().error(`user registration failed, error = ${e}`)
    responseUtil.fail(res, e)
  }
}

export default productController
