const HTTP_CODE = {
  SUCCESS: {
    httpStatus: 200,
    code: 'SUCCESS'
  },
  INTERNAL_SERVER_ERROR: {
    httpStatus: 500,
    code: 'INTERNAL_SERVER_ERROR'
  },
  UNAUTHORIZED: {
    httpStatus: 404,
    code: 'UNAUTHORIZED'
  },
  PARAM_ILLEGAL: {
    httpStatus: 400,
    code: 'PARAM_ILLEGAL'
  },
  DATA_NOT_FOUND: {
    httpStatus: 400,
    code: 'DATA_NOT_FOUND'
  },
  FILE_NOT_FOUND: {
    httpStatus: 400,
    code: 'FILE_NOT_FOUND'
  },
  QUERY_ERROR: {
    httpStatus: 400,
    code: 'QUERY_ERROR'
  },
  STATUS_ILLEGAL: {
    httpStatus: 400,
    code: 'STATUS_ILLEGAL'
  },
  ALGO_TRANSACTION_ERROR: {
    httpStatus: 400,
    code: 'ALGO_TRANSACTION_ERROR'
  }
}

export default HTTP_CODE
