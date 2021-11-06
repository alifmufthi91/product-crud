import HTTP_CODE from '../constant/http_code'
import CommonError from './common_error'

export default class ParamIllegal extends CommonError {
  constructor (message) {
    super(HTTP_CODE.PARAM_ILLEGAL, message)
  }
}
