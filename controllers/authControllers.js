import { StatusCodes } from "http-status-codes";
import { BadRequestError, UnAuthenticatedError } from "../errors/index.js";
import User from "../models/User.js";
import jwt from "jsonwebtoken";

const register = async (req, res) => {
  const { name, email, password, role } = req.body;
  if (!name || !email || !password) {
    throw new BadRequestError("Please provide all values");
  }
  const userAlreadyExists = await User.findOne({ email });
  if (userAlreadyExists) {
    throw new BadRequestError("Email already in use");
  }

  const user = await User.create({ name, email, password, role });
  const token = user.createJWT();
  res.status(StatusCodes.CREATED).json({
    user: {
      name: user.name,
      email: user.email,
      role: user.role,
    },
    token,
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError("Please provide all values");
  }
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    throw new UnAuthenticatedError("Invalid credentials");
  }

  const isPasswordCorrect = await user.comparePassword(password);

  if (!isPasswordCorrect) {
    throw new UnAuthenticatedError("Invalid credentials");
  }

  const accessToken = user.createAccessToken();
  const refreshToken = user.createRefreshToken();
  user.password = undefined;

  res.cookie("jwt", refreshToken, {
    httpOnly: true,
    secure: true,
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });
  res.status(StatusCodes.CREATED).json({
    user,
    accessToken,
  });
};

const refresh = async (req, res) => {
  const cookies = req.cookies;
  if (!cookies?.jwt) {
    throw new UnAuthenticatedError("Invalid credentials");
  }

  const refreshToken = cookies.jwt;

  jwt.verify(
    refreshToken,
    process.env.JWT_REFRESH_SECRET,
    async (err, decoded) => {
      if (err) {
        return res.status(StatusCodes.FORBIDDEN).json({ msg: "Forbidden" });
      }
      const user = await User.findOne({ _id: decoded.userId });
      if (!user) {
        throw new UnAuthenticatedError("Invalid credentials");
      }
      const accessToken = user.createAccessToken();
      res.json({ accessToken });
    }
  );
};

const logout = async (req, res) => {
  const cookies = req.cookies;
  if (!cookies?.jwt) {
    return res.sendStatus(204);
  }
  res.clearCookie("jwt", { httpOnly: true });
  res.status(StatusCodes.OK).json({ msg: "Logout" });
};

export { register, login, logout, refresh };
