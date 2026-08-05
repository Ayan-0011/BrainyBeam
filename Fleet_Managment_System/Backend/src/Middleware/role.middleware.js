const user = require('../Model/UserModel')


const authorize = (...roles) => {

    return (req, res, next) => {

        // console.log("Logged In Role:", req.user.role);
        // console.log("Allowed Roles:", roles);

        if (!roles.includes(req.user.role)) {
            return res.status(403).json({
                message: "Access Denied"
            })
        }

        next();
    }
}

module.exports = authorize;