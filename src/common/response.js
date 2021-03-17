const response = ({ isSuccess, code, message }, result) => {
  return {
    isSuccess: isSuccess,
    code: code,
    message: message,
    result: result,
  };
};

const success = (result) => {
  return {
    isSuccess: true,
    code: null,
    message: null,
    result: result,
  };
};

const fail = (exception) => {
  return {
    isSuccess: false,
    code: exception.code,
    message: exception.message,
    result: null,
  };
};

const errResponse = ({ isSuccess, code, message }) => {
  return {
    isSuccess: isSuccess,
    code: code,
    message: message,
  };
};

module.exports = { response, errResponse, success, fail };
