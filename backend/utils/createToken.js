import jwt from "jsonwebtoken";

//Generate JWT token
const generateToken = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  //set JWT as an HTTP-Only Cookie

  res.cookie("jwt", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    sameSite: "strict",
    maxAge: 30 * 21 * 60 * 60 * 1000,
  });
  return token;
};

export default generateToken;
