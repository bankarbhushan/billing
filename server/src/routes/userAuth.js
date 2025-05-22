const express = require("express");
const authRouter = express.Router();
const { validateData, validateForgotPassword } = require("./utils/validation");
const User = require("./model/User");
const bcrypt = require("bcrypt");

authRouter.post("/signup", async (req, res) => {
  try {
    validateData(req);

    const { userName, email, password } = req.body;

    const passwordHash = await bcrypt.hash(password, 10);
    const user = new User({
      userName,
      email,
      password: passwordHash,
    });

    const singupUser = await user.save();

    res.json({ message: "User added successfully", data: singupUser });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

authRouter.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email });

    if (!user) {
      throw new Error("user not found ");
    }

    const isPasswordValid = await user.validatePassword(password);

    if (!isPasswordValid) {
      throw new Error("enter a valid password...");
    }
    const token = await user.GET_JWT_TOKEN();

    res.cookie("token", token);

    res.json({ message: "login Successfull..." });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

authRouter.post("/logout", async (req, res) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
  });
  res.json({ message: "Logout Successfull..." });
});

authRouter.patch("/forgotpassword", async (req, res) => {
  try {
    const { email, password } = req.body;

    validateForgotPassword(req);
    const user = await User.findOne({ email: email });

    if (!user) {
      throw new Error("user not found");
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    user.password = hashedPassword;

    await user.save();

    res.json({ message: "Password updated successfully" });
  } catch (err) {
    res.status(400).json({ errorMessage: err.message });
  }
});

module.exports = authRouter;
