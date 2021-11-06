import { logger } from 'express-glass'
import HTTP_CODE from '../constant/http_code'
import CommonError from '../error/common_error'
import InternalServerError from '../error/internal_server_error'

const responseUtil = {}
responseUtil.success = (res, data) => {
  const { SUCCESS } = HTTP_CODE
  const body = {
    code: SUCCESS.code,
    message: 'SUCCESS',
    data
  }
  res.statusCode = HTTP_CODE.SUCCESS.httpStatus
  res.send(body)
}

responseUtil.fail = (res, error) => {
  if (!(error instanceof CommonError)) {
    logger().error(`Found not known error, error ${error}`)
    error = new InternalServerError('Something went wrong')
  }
  const body = {
    code: error.code,
    message: error.message,
    data: {}
  }

  res.statusCode = error.httpStatus
  res.send(body)
}

export default responseUtil
