const UserModel = require("../Model/User.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")

const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const existingUser = await UserModel.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                message: "User already exists"
            });
        }

        const hashedPass = await bcrypt.hash(password, 10);

        const user = await UserModel.create({
            name,
            email,
            password: hashedPass
        });

        res.status(201).json({
            message: "User created successfully",
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            }
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Server error"
        });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const userdata = await UserModel.findOne({ email });

        if (!userdata) {
            res.status(400).json({
                message: "Invalid Credentials"
            })
        }

        const match = await bcrypt.compare(password, userdata.password);

        if (!match) {
            res.status(400).json({
                message: "Invalid Credentials"
            })
        }

        const token = jwt.sign({
            UserId: userdata._id,
            email: userdata.email
        }, process.env.JWT_SECRET)

        res.cookie("token", token);

        res.status(200).json({
            message: "Login successfull",
            userdata,
            token
        })
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }

}

module.exports = { registerUser, login };