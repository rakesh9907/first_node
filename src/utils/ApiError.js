class ApiError extends Error {
  constructor( statusCode, message = "Something went wrong", errors = [], statck = "" ) {
    super(message)
    this.statusCode = statusCode
    this.data = null // read about this.data in node js
    this.message = message
    this.success = false
    this.errors = errors

    if(statck) {
      this.statck = statck
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export default ApiError