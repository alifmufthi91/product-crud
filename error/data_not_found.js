import HTTP_CODE from '../constant/http_code'
import CommonError from './common_error'

export default class DataNotFound extends CommonError {
  constructor (message) {
    super(HTTP_CODE.DATA_NOT_FOUND, message)
  }
}
