import User from "../models/user.model.js";
import { errorHandle } from "../utils/error.js";
import bcryptjs from "bcryptjs";

export const test = (req, res) => {
  res.json({
    message: "api controllers testing",
  });
};

// Update user

export const updateUser = async (req, res, next) => {
  if (req.user.id !== req.params.id) {
    return next(errorHandle(401, "You can update only your account"));
  }

  try {
    if (req.body.password) {
      req.body.password = bcryptjs.hashSync(req.body.password, 10);
    }

    const updatedUser = await User.findOneAndUpdate(
      { _id: req.params.id }, // Specify the query condition
      {
        $set: {
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
          profilePicture: req.body.profilePicture,
        },
      },
      { new: true }
    );

    if (!updatedUser) {
      // Handle the case where the user is not found
      return next(errorHandle(404, "User not found"));
    }

    const { password, ...rest } = updatedUser._doc;
    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};
