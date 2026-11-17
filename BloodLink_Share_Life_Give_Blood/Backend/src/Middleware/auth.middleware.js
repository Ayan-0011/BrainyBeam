const jwt = require('jsonwebtoken');
const UserModel = require('../Model/User.model');

const protect = async (req, res, next) => {
  
    try {

        const token = req.cookies.token;

        if (!token) {
            return res.status(401).json({
                message: "Please Login First"
            })
        }

        const decode = jwt.verify(token, process.env.JWT_SECRET);

        const user = await UserModel.findById(decode.id).select("-password");

        if (!user) {
            return res.status(401).json({
                message: "User not found"
            })
        }

        req.user = user;

        next();

    } catch (error) {
        return res.status(401).json({
            message: "Invalid or expired token"
        })
    }
}


module.exports = protect;