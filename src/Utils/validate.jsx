export const checkValidData = (email, password) => {
  const isEmailValid = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isEmailValid && !isPasswordValid) {
    return "Email and password both are invalid";
  } else {
    if (!isEmailValid) {
      return "Email is not valid";
    } else if (!isPasswordValid) {
      return "Password is not valid";
    }
  }
  return null;
};
