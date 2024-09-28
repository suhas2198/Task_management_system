import { comparePassword, hashpassword } from "../helpers/userHelper.js";
import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";

export const registerController = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    console.log(req.body);
    //Validation
    if (!name) {
      return res.send({ message: "the name is required" });
    }
    if (!email) {
      return res.send({ message: "the email is required" });
    }
    if (!password) {
      return res.send({ message: "The password is required" });
    }

    //check user

    const existingUser = await userModel.findOne({ email });

    if (existingUser) {
      return res.status(200).send({
        success: false,
        messgae: "already registerd please login",
      });
    }

    //registration of admin

    const hashedPassword = await hashpassword(password);

    const user = await new userModel({
      name,
      email,
      password: hashedPassword,
    }).save();

    res.status(201).send({
      success: true,
      message: "you are successfully registered",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in registration",
      error,
    });
  }
};

//Login ||post

export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    //validation
    if (!email || !password) {
      return res.status(404).send({
        success: fasle,
        messsage: "email or password are wrong",
      });
    }
    //check user
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).send({
        succes: false,
        message: "user is not registerd",
      });
    }

    //matching password

    const match = await comparePassword(password, user.password);

    if (!match) {
      return res.stus(404).send({
        succes: false,
        Message: "Invalid Password",
      });
    }

    //token

    const token = await jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    res.status(200).send({
      success: true,
      message: "Login Successfully",
      user: {
        name: user.name,
        email: user.email,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Login",
      error,
    });
  }
};
