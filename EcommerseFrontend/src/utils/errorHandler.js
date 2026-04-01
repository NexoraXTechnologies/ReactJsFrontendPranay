export const getErrorMessage = (error) => {
  // Axios error with response
  if (error?.response) {
    const data = error.response.data;

    // API custom message
    if (data?.message) {
      return data.message;
    }

    // Validation errors (array)
    if (Array.isArray(data?.errors)) {
      return data.errors.map((err) => err.message).join(", ");
    }

    // String response
    if (typeof data === "string") {
      return data;
    }

    return "Request failed. Please try again.";
  }

  // Network error
  if (error?.request) {
    return "Network error. Please check your internet connection.";
  }

  // JS error
  if (error?.message) {
    return error.message;
  }

  return "Something went wrong. Please try again.";
};