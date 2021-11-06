import HTTP_CODE from '../constant/http_code'
import CommonError from './common_error'

export default class InternalServerError extends CommonError {
  constructor (message) {
    super(HTTP_CODE.INTERNAL_SERVER_ERROR, message)
  }
}
