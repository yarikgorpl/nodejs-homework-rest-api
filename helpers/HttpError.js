class ApiError extends Error {
  constructor(message) {
    super(message);
    this.name = ApiError;
  }
}
const HttpError = (status, message) => {
  const error = new ApiError(message);
  error.status = status;
  return error;
};

module.exports = HttpError;
