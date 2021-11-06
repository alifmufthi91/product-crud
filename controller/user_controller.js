import { logger } from 'express-glass'
import ParamIllegal from '../error/param_illegal'
import userService from '../service/user_service'
import { assertTrue } from '../util/assert_util'
import responseUtil from '../util/response_util'
import userValidator from '../validator/user_validator'

const userController = {}

userController.register = async (req, res, next) => {
  try {
    logger().info(`user registration request, data = ${req.body}`)
    const validationResult = userValidator.register.validate(req.body)
    assertTrue(!validationResult.error,
      new ParamIllegal(validationResult.error ? validationResult.error.message : ''))
    const user = await userService.add(validationResult.value)
    responseUtil.success(res, { user })
  } catch (e) {
    logger().error(`user registration failed, error = ${e}`)
    responseUtil.fail(res, e)
  }
}

userController.getAll = async (req, res, next) => {
  try {
    logger().info(`get all user request, data = ${req.body}`)
    const users = await userService.getAll()
    responseUtil.success(res, { users })
  } catch (e) {
    logger().error(`get all user failed, error = ${e}`)
    responseUtil.fail(res, e)
  }
}

export default userController
