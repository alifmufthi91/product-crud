import { logger } from 'express-glass'
import ParamIllegal from '../error/param_illegal'
import productService from '../service/product_service'
import { assertTrue } from '../util/assert_util'
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
    const products = await productService.getAll()
    responseUtil.success(res, { products })
  } catch (e) {
    logger().error(`get all products failed, error = ${e}`)
    responseUtil.fail(res, e)
  }
}

export default productController
