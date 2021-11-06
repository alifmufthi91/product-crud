import HTTP_CODE from '../constant/http_code'
import CommonError from './common_error'

export default class FileNotFound extends CommonError {
  constructor (message) {
    super(HTTP_CODE.FILE_NOT_FOUND, message)
  }
}
