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
    super(200, 2000, message);
  }
}

class UnAuthorizedException extends BaseException {
  constructor(message) {
    super(200, 2001, message);
  }
}

class NotFoundException extends BaseException {
  constructor(message) {
    super(200, 2002, message);
  }
}

class ConflictException extends BaseException {
  constructor(message) {
    super(200, 2004, message);
  }
}

class InternalServerException extends BaseException {
  constructor(message) {
    super(200, 4000, message);
  }
}

module.exports = {
  BadRequsetException,
  ConflictException,
  NotFoundException,
  InternalServerException,
  UnAuthorizedException,
};
