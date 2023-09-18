// class HttpError extends Error {
//   constructor(message, status) {
//     super(message);
//     this.name = "HttpError";
//     this.status = status;
//   }
// }
const errorMessageList = {
  400: "Bad Request",
  401: "Unauthorized",
  403: "Forbidden",
  404: "Not found",
  409: "Conflict",
};

const HttpError = (status, message = errorMessageList[status]) => {
  const error = new Error(message);
  error.status = status;
  return error;
};

module.exports = HttpError;
