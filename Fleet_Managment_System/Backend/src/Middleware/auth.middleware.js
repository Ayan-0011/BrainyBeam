const jwt = require('jsonwebtoken');
const UserModel = require('../Model/UserModel');


const protect = async (req, res, next) => {
    try {

        // cookies se token lena 
        const token = req.cookies.token;

        if (!token) {
            return res.status(401).json({
                message: "Please Login fisrt"
            });
        }

        // jwt verify
        const decode = jwt.verify(token, process.env.JWT_SECRET);

        //db se user lana 
        const user = await UserModel.findById(decode.id).select("-password");

        if (!user) {
            return res.status(401).json({
                messgae: "User Not found"
            });
        }

        //req me user attach karna 

        req.user = user;

        //next middleware or controller chalana without next() yaha pr ruk jaayega
        next();

    } catch (error) {
        return res.status(401).json({
            message: "Invalid Token"
        });
    }
}


module.exports = protect;
