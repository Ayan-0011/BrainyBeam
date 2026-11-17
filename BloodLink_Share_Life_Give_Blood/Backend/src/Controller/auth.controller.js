const UserModel = require("../Model/User.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const cookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 24 * 60 * 60 * 1000 // 1 din
    // 60 * 1000 // 1 min
};

const makeToken = (user) =>
    jwt.sign(
        { id: user._id, email: user.email, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
    );

const publicUser = (user) => ({
    id: user._id,
    name: user.name,
    email: user.email,
    role: user.role
});

const registerWithRole = (role) => async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ message: "All fields required" });
        }

        const existingUser = await UserModel.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPass = await bcrypt.hash(password, 10);

        const user = await UserModel.create({ name, email, password: hashedPass, role });

        return res.status(201).json({
            message: "Registered successfully",
            user: publicUser(user)
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server error" });
    }
};

const registerUser = registerWithRole("patient");
const registerPatient = registerWithRole("patient");
const registerDonor = registerWithRole("donor");

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "Email and password required" });
        }

        const user = await UserModel.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: "Invalid Credentials" });
        }

        const match = await bcrypt.compare(password, user.password);

        if (!match) {
            return res.status(400).json({ message: "Invalid Credentials" });
        }

        const token = makeToken(user);
        res.cookie("token", token, cookieOptions);

        return res.status(200).json({
            message: "Login successful",
            user: publicUser(user),
            token
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server error" });
    }
};

const adminLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "Email and password required" });
        }

        const admin = await UserModel.findOne({ email });

        if (!admin) {
            return res.status(400).json({ message: "Invalid Credentials" });
        }

        const match = await bcrypt.compare(password, admin.password);

        if (!match) {
            return res.status(400).json({ message: "Invalid Credentials" });
        }

        if (admin.role !== "admin") {
            return res.status(403).json({ message: "Access denied. Admin only" });
        }

        const token = makeToken(admin);
        res.cookie("token", token, cookieOptions);

        return res.status(200).json({
            message: "Admin login successful",
            admin: publicUser(admin),
            token
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server error" });
    }
};

const logout = (req, res) => {
    res.clearCookie("token", { httpOnly: true, sameSite: "lax", secure: process.env.NODE_ENV === "production" });
    return res.status(200).json({ message: "Logged out successfully" });
};

module.exports = { registerUser, registerPatient, registerDonor, login, adminLogin, logout };