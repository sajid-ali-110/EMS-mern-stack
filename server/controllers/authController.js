import jwt from "jsonwebtoken";
import User from "../models/User.js";
import bcrypt from "bcrypt";

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email, password);
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ success: false, error: "User Not Found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(401)
        .json({ success: false, error: "Password Doesn't Match" });
    }
    const token = jwt.sign(
      { _id: user._id, role: user._role },
      process.env.JWT_KEY,
      { expiresIn: "70d" }
    );

    res
      .status(200)
      .json({
        success: true,
        token,
        user: { _id: user._id, name: user.name, role: user.role },
      });
  } catch (error) {
    console.log(error.message);
  }
};

export const Users = async (req, res) => {
  return res.json({ message: "Adasdasd" });
};

export default login;
