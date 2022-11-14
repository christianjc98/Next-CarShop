import jwt from "jsonwebtoken";
import { UnAuthenticatedError } from "../errors/index.js";

const verifyJWT = async (req, res, next) => {
  const authHeaders = req.headers.authorization || req.headers.Authorization;
  if (!authHeaders || !authHeaders.startsWith("Bearer")) {
    throw new UnAuthenticatedError("Authentication invalid");
  }

  const token = authHeaders.split(" ")[1];
  console.log(authHeaders);

  try {
    const payload = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
    console.log(payload);
    req.user = { userId: payload.userId, roles: payload.roles };
    next();
  } catch (error) {
    throw new UnAuthenticatedError("Authentication invalid");
  }
};

export default verifyJWT;
