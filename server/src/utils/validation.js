const validator = require("validator");

const validateData = (req) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new Error("enter email and password ");
  } else if (!validator.isEmail(email)) {
    throw new Error("email is not valid ");
  } else if (!validator.isStrongPassword(password)) {
    throw new Error("Password is not valid ");
  }
};
const validateForgotPassword = (req) => {
  const { password } = req.body;
  console.log(password);

  if (!validator.isStrongPassword(password)) {
    throw new Error("Password is not valid...");
  }
};

module.exports = {
  validateData,
  validateForgotPassword,
};
