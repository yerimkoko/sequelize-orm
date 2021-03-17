class BaseException extends Error {
  constructor(status, code, message) {
    super();
    this.status = status;
    this.code = code;
    this.message = message;
    Error.captureStackTrace(this, this.constructor);
  }
}

class BadRequsetException extends BaseException {
  constructor(message) {
    super(400, 'BAD_REQUEST_EXCEPTION', message);
  }
}

class UnAuthorizedException extends BaseException {
  constructor(message) {
    super(401, 'UNAUTHORIZED_EXCEPTION', message);
  }
}

class NotFoundException extends BaseException {
  constructor(message) {
    super(404, 'NOT_FOUND_EXCEPTION', message);
  }
}

class ConflictException extends BaseException {
  constructor(message) {
    super(409, 'CONFLICT_EXCEPTION', message);
  }
}

class InternalServerException extends BaseException {
  constructor(message) {
    super(500, 'INTERNAL_SERVER_EXCEPTION', message);
  }
}

module.exports = {
  BadRequsetException,
  ConflictException,
  NotFoundException,
  InternalServerException,
  UnAuthorizedException,
};
