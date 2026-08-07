const Driver = require("../Model/DriverModel");
const User = require("../Model/UserModel");
const bcrypt = require("bcryptjs");

const createDriver = async (req, res) => {
    try {
        const {
            name,
            email,
            password,
            phone,
            licenseNumber,
            licenseExpiry
        } = req.body;

        if (
            !name ||
            !email ||
            !password ||
            !phone ||
            !licenseNumber ||
            !licenseExpiry
        ) {
            return res.status(400).json({
                success: false,
                message: "All fields are required."
            });
        }

        // Email Check
        const existingEmail = await User.findOne({ email });

        if (existingEmail) {
            return res.status(409).json({
                success: false,
                message: "Email already exists."
            });
        }

        // Phone Check
        const existingPhone = await User.findOne({ phone });

        if (existingPhone) {
            return res.status(409).json({
                success: false,
                message: "Phone number already exists."
            });
        }

        // License Check
        const existingLicense = await Driver.findOne({ licenseNumber });

        if (existingLicense) {
            return res.status(409).json({
                success: false,
                message: "License number already exists."
            });
        }

        // Password Hash
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create User
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            phone,
            role: "driver"
        });

        // Create Driver Profile
        const driver = await Driver.create({
            user: user._id,
            licenseNumber,
            licenseExpiry
        });
        console.log(driver)

        return res.status(201).json({
            success: true,
            message: "Driver created successfully.",
            driver
        });

    } catch (error) {

        console.log(error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error."
        });
    }
};

const getDriver = async (req, res) => {
    try {

        const drivers = await Driver.find({ isDeleted: false }).populate("user", "name email phone").populate("assignedVehicle", "registrationNumber");
        return res.status(200).json({
            success: true,
            drivers
        });

    } catch (error) {
        console.log(error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error."
        });

    }
};

const getSingleDriver = async (req, res) => {
    try {

        const { id } = req.params;
        const driver = await Driver.findOne({
            _id: id,
            isDeleted: false
        })
            .populate("user", "name email phone")
            .populate("assignedVehicle", "registrationNumber");

        if (!driver) {
            return res.status(404).json({
                success: false,
                message: "Driver not found."
            });
        }
        return res.status(200).json({
            success: true,
            driver
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error."
        });

    }
};

const updateDriver = async (req, res) => {
    try {

        const { id } = req.params;

        const {
            name,
            email,
            phone,
            licenseNumber,
            licenseExpiry
        } = req.body;

        const driver = await Driver.findOne({
            _id: id,
            isDeleted: false
        });

        if (!driver) {
            return res.status(404).json({
                success: false,
                message: "Driver not found."
            });
        }


        const user = await User.findById(driver.user);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found."
            });
        }

        if (email && email !== user.email) {
            const existingEmail = await User.findOne({ email });

            if (existingEmail) {
                return res.status(409).json({
                    success: false,
                    message: "Email already exists."
                });
            }
        }

        if (phone && phone !== user.phone) {
            const existingPhone = await User.findOne({ phone });

            if (existingPhone) {
                return res.status(409).json({
                    success: false,
                    message: "Phone already exists."
                });
            }
        }

        if (licenseNumber && licenseNumber !== driver.licenseNumber) {
            const existingLicense = await Driver.findOne({
                licenseNumber
            });

            if (existingLicense) {
                return res.status(409).json({
                    success: false,
                    message: "License number already exists."
                });
            }
        }

        user.name = name || user.name;
        user.email = email || user.email;
        user.phone = phone || user.phone;

        await user.save();


        driver.licenseNumber = licenseNumber || driver.licenseNumber;
        driver.licenseExpiry = licenseExpiry || driver.licenseExpiry;

        await driver.save();

        const updatedDriver = await Driver.findById(driver._id)
            .populate("user", "name email phone")
            .populate("assignedVehicle", "registrationNumber");

        return res.status(200).json({
            success: true,
            message: "Driver updated successfully.",
            driver: updatedDriver
        });

    } catch (error) {

        console.log(error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error."
        });

    }
};

const updateAvailability = async (req, res) => {
    try {
        const { availability } = req.body;

        const driver = await Driver.findOne({
            user: req.user._id,
            isDeleted: false
        });

        if (!driver) {
            return res.status(404).json({
                success: false,
                message: "Driver not found."
            });
        }

        driver.availability = availability;

        await driver.save();

        return res.status(200).json({
            success: true,
            message: "Availability updated successfully.",
            driver
        });

    } catch (error) {
        console.log(error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error."
        });
    }
};

const deleteDriver = async (req, res) => {
    try {
        const { id } = req.params;

        const driver = await Driver.findById(id);

        if (!driver) {
            return res.status(404).json({
                success: false,
                message: "Driver not found."
            });
        }


        await User.findByIdAndDelete(driver.user);
        await Driver.findByIdAndDelete(id);

        return res.status(200).json({
            success: true,
            message: "Driver deleted successfully."
        });

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


const getProfile = async (req, res) => {
    try {
        console.log(req.user)
        const userId = req.user._id;
        console.log(userId);


        const driver = await Driver.findOne({
            user: userId,
            isDeleted: false,
        }).populate("assignedVehicle");

        if (!driver) {
            return res.status(404).json({
                success: false,
                message: "Driver profile not found.",
            });
        }

        const user = await User.findById(userId).select(
            "name email phone role"
        );

        return res.status(200).json({
            success: true,
            message: "Profile fetched successfully.",
            data: {
                _id: driver._id,
                name: user.name,
                email: user.email,
                phone: user.phone,
                role: user.role,
                licenseNumber: driver.licenseNumber,
                licenseExpiry: driver.licenseExpiry,
                availability: driver.availability,
                assignedVehicle: driver.assignedVehicle,
            },
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

const updateprofile = async (req, res) => {
    try {
        const userId = req.user._id;
        const { name, email, phone, licenseNumber, licenseExpiry } = req.body

        const user = await User.findById(userId);

        const driver = await Driver.findOne({ user: userId, isDeleted: false });

        if (!user || !driver) {
            return res.status(404).json({
                success: false,
                message: "Driver Profile Not Found"
            });
        }

        if (email && email !== user.email) {
            const existingEmail = await User.findOne({ email });

            if (existingEmail) {
                return res.status(400).json({
                    success: false,
                    message: "Email already exists.",
                });
            }
        }

        if (phone && phone !== user.phone) {
            const existingPhone = await User.findOne({ phone });

            if (existingPhone) {
                return res.status(400).json({
                    success: false,
                    message: "Phone already exists.",
                });
            }
        }

        if (licenseNumber && licenseNumber !== driver.licenseNumber) {
            const existingLicense = await Driver.findOne({
                licenseNumber,
            });

            if (existingLicense) {
                return res.status(400).json({
                    success: false,
                    message: "License number already exists.",
                });
            }
        }

        user.name = name || user.name;
        user.email = email || user.email;
        user.phone = phone || user.phone;

        driver.licenseNumber = licenseNumber || driver.licenseNumber;

        driver.licenseExpiry = licenseExpiry || driver.licenseExpiry;

        await user.save();
        await driver.save();

        return res.status(200).json({
            success: true,
            message: "Profile Upadte Successfully"
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }

}


module.exports = { createDriver, getDriver, getSingleDriver, updateDriver, deleteDriver, updateAvailability, getProfile, updateprofile };