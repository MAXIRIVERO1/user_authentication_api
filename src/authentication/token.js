const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();
const jwtSecret = process.env.JWT_SECRET

const verifyToken = (req, res, next) => {
    const token = req.body.token || req.headers['authorization']?.split(" ")[1];

    if (!token) {
        return res.status(403).json({ message: "No token provided, please log in" });
    }

    try {
        const decoded = jwt.verify(token, jwtSecret);
        req.userId = decoded.userId;
        next();
    } catch (error) {
        return res.status(401).json({ error: "Invalid or expired token" });
    }
};

module.exports = { 
    verifyToken 
};