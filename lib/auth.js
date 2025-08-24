import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "supersecretkey"; // store in .env

// Create JWT
export function signJWT(payload) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: "1d" });
}

// Verify JWT
export function verifyJWT(token) {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (err) {
    return null;
  }
}
