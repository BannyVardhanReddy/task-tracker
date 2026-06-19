const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const exists = await User.findOne({ email });

    if (exists) {
      return res.status(404).json({
        message: "User already exists!",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      name,
      email,
      password: hashedPassword,
    });

    await user.save();

    res.status(201).json({
      message: "Registration Successfull",
      user: { name: user.name, email: user.email },
    });
  } catch (error) {
    res.status(500).send({
      message: "Registration Failed. Try Again",
      error,
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const exists = await User.findOne({ email });

    if (!exists) {
      return res.status(404).json({
        message: "Login Failed! Wrong Email or Password",
      });
    }

    const matched = await bcrypt.compare(password, exists.password);

    if (!matched) {
      return res.status(404).json({
        message: "Login Failed! Wrong email or Password.",
      });
    }

    const token = jwt.sign(
      {
        id: exists._id,
        email: exists.email,
      },
      process.env.JWT_TOKEN,
      {
        expiresIn: "1h",
      },
    );

    res.status(200).json({
      messgae: "Login Successfull.",
      token: token,
      user: { name: exists.name, email: exists.email },
    });
  } catch (error) {
    res.status(500).json({
      message: "Login Failed. Try again later.",
      error: error.message
    });
  }
};
