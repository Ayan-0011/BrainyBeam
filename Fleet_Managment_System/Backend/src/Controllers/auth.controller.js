const usermodel = require("../Model/UserModel")
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')


const registerUser = async (req, res) => {

    const { name, email, password, phone, role, profileImage } = req.body;

    const existingUser = await usermodel.findOne({ email });

    if (existingUser) {
        return res.status(400).json({
            message: "User alreday existis"
        });
    }

    const HasedPass = await bcrypt.hash(password, 10);

    const user = await usermodel.create({
        name,
        email,
        password: HasedPass,
        phone,
        role,
        profileImage
    })

    const token = jwt.sign({
        id: user._id,
        role: user.role,
    }, process.env.JWT_SECRET)


    res.cookie("token", token);


    res.status(201).json({
        message: "User Create successfull",
        user
    })
}

const loginUser = async (req, res) => {

    const { email, password } = req.body;

    const userdata = await usermodel.findOne({ email });
    //console.log(userdata);


    if (!userdata) {
        return res.status(400).json({
            message: "Invalid Credentials"
        })
    }

    const match = await bcrypt.compare(password, userdata.password);

    if (!match) {
        return res.status(400).json({
            message: "Invalid Credentials"
        })
    }

    const token = jwt.sign({
        id: userdata._id,
        role: userdata.role
    }, process.env.JWT_SECRET)


    res.cookie("token", token)

    res.status(200).json({
        message: "Login Successfull",
        userdata,
        token
    })

}

const logoutUser = async (req, res) => {
    res.cookie('token', "", {
        httpOnly: true,
        expries: new Date(0)
    });

    res.status(200).json({
        message: "Logout Successfull"
    });
}

const getUser = async (req, res) => {

    try {
        const Alluser = await usermodel.find();
        res.status(200).json({

            message: "All user is here",
            Alluser
        })
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}

const editUser = async (req, res) => {
    try {

        const { id } = req.params
        const user = await usermodel.findByIdAndUpdate( id, req.body, { new: true, runValidators: true });

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        res.status(200).json({
            success: true,
            messsage: "User updated successfull",
            user
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}





module.exports = { registerUser, loginUser, logoutUser, getUser, editUser }
