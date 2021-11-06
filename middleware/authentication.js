import { logger } from 'express-glass'
import jwt from 'jsonwebtoken'
import env from '../config/env'
import Unauthorized from '../error/unauthorized'
import responseUtil from '../util/response_util'

const JwtAuth = async (req, res, next) => {
  try {
    const auth = req.headers.authorization
    const jwtToken = auth.split(' ')[1]
    req.auth = jwt.verify(jwtToken, env.JWT_SECRET)
    next()
  } catch (e) {
    logger().error(`invalid jwt token, error = ${e}`)
    responseUtil.fail(res, new Unauthorized('UNAUTHORIZED'))
  }
}

export default JwtAuth
