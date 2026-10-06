import React, { useState } from "react";
import "./MultiStepRegistration.css";
import { HeartPulse } from 'lucide-react'

const MultiStepRegistration = () => {
    const [currentStep, setCurrentStep] = useState(1);

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        dob: "",
        address: "",
        city: "",
        state: "",
        pincode: "",
        bloodGroup: "",
        donorType: "",
        lastDonation: "",
        confirmDetails: false,
    });

    const [errors, setErrors] = useState({});

    const totalSteps = 4;

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setFormData({
            ...formData, [name]: type === "checkbox" ? checked : value,
        });

        setErrors({
            ...errors,
            [name]: "",
        });
    };

    const validateStep = () => {
        const newErrors = {};

        if (currentStep === 1) {
            if (!formData.fullName.trim()) {
                newErrors.fullName = "Full name is required";
            }

            if (!formData.email.trim()) {
                newErrors.email = "Email is required";
            }

            if (!formData.phone.trim()) {
                newErrors.phone = "Phone number is required";
            }

            if (!formData.dob) {
                newErrors.dob = "Date of birth is required";
            }
        }

        if (currentStep === 2) {
            if (!formData.address.trim()) {
                newErrors.address = "Address is required";
            }

            if (!formData.city.trim()) {
                newErrors.city = "City is required";
            }

            if (!formData.state.trim()) {
                newErrors.state = "State is required";
            }

            if (!formData.pincode.trim()) {
                newErrors.pincode = "Pincode is required";
            } else if (!/^[0-9]{6}$/.test(formData.pincode)) {
                newErrors.pincode = "Enter a valid 6-digit pincode";
            }
        }

        if (currentStep === 3) {
            if (!formData.bloodGroup) {
                newErrors.bloodGroup = "Select your blood group";
            }

            if (!formData.donorType) {
                newErrors.donorType = "Select donor type";
            }
        }
        if (currentStep === 4) {
            if (!formData.confirmDetails) {
                newErrors.confirmDetails =
                    "Please confirm that your information is correct";
            }
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleNext = () => {
        if (validateStep()) {
            setCurrentStep((prev) => prev + 1);
        }
    };

    const handlePrevious = () => {
        setErrors({});
        setCurrentStep((prev) => prev - 1);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateStep()) {
            return;
        }

        console.log("Registration Data:", formData);

        alert("Registration completed successfully!");

        setFormData({
            fullName: "",
            email: "",
            phone: "",
            dob: "",
            address: "",
            city: "",
            state: "",
            pincode: "",
            bloodGroup: "",
            donorType: "",
            lastDonation: "",
            confirmDetails: false,
        });

        setCurrentStep(1);
    };

    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return (
                    <div className="form-step">
                        <div className="step-heading">
                            <h2>Personal Information</h2>
                            <p>Tell us a little about yourself.</p>
                        </div>

                        <div className="form-grid">
                            <div className="form-group full-width">
                                <label>Full Name</label>
                                <input
                                    type="text"
                                    name="fullName"
                                    placeholder="Enter your full name"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                />
                                {errors.fullName && (
                                    <span className="error">{errors.fullName}</span>
                                )}
                            </div>

                            <div className="form-group">
                                <label>Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="example@email.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                {errors.email && (
                                    <span className="error">{errors.email}</span>
                                )}
                            </div>

                            <div className="form-group">
                                <label>Phone Number</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="10-digit phone number"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                                {errors.phone && (
                                    <span className="error">{errors.phone}</span>
                                )}
                            </div>

                            <div className="form-group">
                                <label>Date of Birth</label>
                                <input
                                    type="date"
                                    name="dob"
                                    value={formData.dob}
                                    onChange={handleChange}
                                />
                                {errors.dob && (
                                    <span className="error">{errors.dob}</span>
                                )}
                            </div>
                        </div>
                    </div>
                );

            case 2:
                return (
                    <div className="form-step">
                        <div className="step-heading">
                            <h2>Address Details</h2>
                            <p>Enter your current residential address.</p>
                        </div>

                        <div className="form-grid">
                            <div className="form-group full-width">
                                <label>Address</label>
                                <textarea
                                    name="address"
                                    placeholder="Enter your complete address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    rows="3"
                                ></textarea>

                                {errors.address && (
                                    <span className="error">{errors.address}</span>
                                )}
                            </div>

                            <div className="form-group">
                                <label>City</label>
                                <input
                                    type="text"
                                    name="city"
                                    placeholder="Enter your city"
                                    value={formData.city}
                                    onChange={handleChange}
                                />

                                {errors.city && (
                                    <span className="error">{errors.city}</span>
                                )}
                            </div>

                            <div className="form-group">
                                <label>State</label>
                                <input
                                    type="text"
                                    name="state"
                                    placeholder="Enter your state"
                                    value={formData.state}
                                    onChange={handleChange}
                                />

                                {errors.state && (
                                    <span className="error">{errors.state}</span>
                                )}
                            </div>

                            <div className="form-group">
                                <label>Pincode</label>
                                <input
                                    type="text"
                                    name="pincode"
                                    placeholder="6-digit pincode"
                                    value={formData.pincode}
                                    onChange={handleChange}
                                    maxLength="6"
                                />

                                {errors.pincode && (
                                    <span className="error">{errors.pincode}</span>
                                )}
                            </div>
                        </div>
                    </div>
                );

            case 3:
                return (
                    <div className="form-step">
                        <div className="step-heading">
                            <h2>Blood Information</h2>
                            <p>Help us understand your donation details.</p>
                        </div>

                        <div className="form-grid">
                            <div className="form-group">
                                <label>Blood Group</label>

                                <select
                                    name="bloodGroup"
                                    value={formData.bloodGroup}
                                    onChange={handleChange}
                                >
                                    <option value="">Select blood group</option>
                                    <option value="A+">A+</option>
                                    <option value="A-">A-</option>
                                    <option value="B+">B+</option>
                                    <option value="B-">B-</option>
                                    <option value="AB+">AB+</option>
                                    <option value="AB-">AB-</option>
                                    <option value="O+">O+</option>
                                    <option value="O-">O-</option>
                                </select>

                                {errors.bloodGroup && (
                                    <span className="error">{errors.bloodGroup}</span>
                                )}
                            </div>

                            <div className="form-group">
                                <label>Donor Type</label>

                                <select
                                    name="donorType"
                                    value={formData.donorType}
                                    onChange={handleChange}
                                >
                                    <option value="">Select donor type</option>
                                    <option value="First Time Donor">
                                        First Time Donor
                                    </option>
                                    <option value="Regular Donor">
                                        Regular Donor
                                    </option>
                                </select>

                                {errors.donorType && (
                                    <span className="error">{errors.donorType}</span>
                                )}
                            </div>

                            <div className="form-group full-width">
                                <label>Last Blood Donation</label>

                                <input
                                    type="date"
                                    name="lastDonation"
                                    value={formData.lastDonation}
                                    onChange={handleChange}
                                />

                                <small className="input-help">
                                    Leave blank if you have never donated blood.
                                </small>
                            </div>
                        </div>
                    </div>
                );

            case 4:
                return (
                    <div className="form-step">
                        <div className="step-heading">
                            <h2>Review Your Details</h2>
                            <p>Please check your information before registering.</p>
                        </div>

                        <div className="review-section">
                            <div className="review-group">
                                <h3>Personal Information</h3>

                                <div className="review-row">
                                    <span>Full Name</span>
                                    <strong>{formData.fullName}</strong>
                                </div>

                                <div className="review-row">
                                    <span>Email</span>
                                    <strong>{formData.email}</strong>
                                </div>

                                <div className="review-row">
                                    <span>Phone</span>
                                    <strong>{formData.phone}</strong>
                                </div>

                                <div className="review-row">
                                    <span>Date of Birth</span>
                                    <strong>{formData.dob}</strong>
                                </div>
                            </div>

                            <div className="review-group">
                                <h3>Address</h3>

                                <div className="review-row">
                                    <span>Address</span>
                                    <strong>{formData.address}</strong>
                                </div>

                                <div className="review-row">
                                    <span>City</span>
                                    <strong>{formData.city}</strong>
                                </div>

                                <div className="review-row">
                                    <span>State</span>
                                    <strong>{formData.state}</strong>
                                </div>

                                <div className="review-row">
                                    <span>Pincode</span>
                                    <strong>{formData.pincode}</strong>
                                </div>
                            </div>

                            <div className="review-group">
                                <h3>Blood Information</h3>

                                <div className="review-row">
                                    <span>Blood Group</span>
                                    <strong className="blood-badge">
                                        {formData.bloodGroup}
                                    </strong>
                                </div>

                                <div className="review-row">
                                    <span>Donor Type</span>
                                    <strong>{formData.donorType}</strong>
                                </div>

                                <div className="review-row">
                                    <span>Last Donation</span>
                                    <strong>
                                        {formData.lastDonation || "Not provided"}
                                    </strong>
                                </div>
                            </div>
                            <div className="confirmation-box">
                                <label>
                                    <input
                                        type="checkbox"
                                        name="confirmDetails"
                                        checked={formData.confirmDetails}
                                        onChange={handleChange}
                                    />

                                    <span className="msg">
                                        I confirm that the information provided above is correct.
                                    </span>
                                </label>

                                {errors.confirmDetails && (
                                    <span className="error">{errors.confirmDetails}</span>
                                )}
                            </div>
                        </div>
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <div className="registration-page">
            <div className="registration-card">

                {/* Header */}
                <div className="registration-header">
                    <div className="blood-logo"> <HeartPulse /> </div>

                    <div>
                        <h1>Become a Blood Donor</h1>
                        <p>Register with BloodLink and help save lives.</p>
                    </div>
                </div>

                {/* Progress */}
                <div className="progress-container">
                    <div className="progress-steps">

                        {[1, 2, 3, 4].map((step) => (
                            <div className={`progress-step ${currentStep >= step ? "active" : "" }`} key={step} >
                                <div className="step-number">
                                    {step}
                                </div>

                                <span>
                                    {step === 1 && "Personal"}
                                    {step === 2 && "Address"}
                                    {step === 3 && "Blood"}
                                    {step === 4 && "Review"}
                                </span>
                            </div>
                        ))}

                    </div>

                    <div className="progress-line">
                        <div className="progress-fill"
                            style={{  width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%`, }} ></div>
                    </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit}>
                    {renderStep()}

                    {/* Buttons */}
                    <div className="form-actions">
                        {currentStep > 1 && (
                            <button type="button" className="btn btn-secondary"
                                onClick={handlePrevious} >
                                ← Back
                            </button>
                        )}

                        <div className="action-right">
                            {currentStep === 4 ? (
                                <button type="button" className="btn btn-primary"
                                    onClick={handleSubmit} >
                                    Complete Registration
                                </button>
                            ) : (
                                <button type="button" className="btn btn-primary"
                                    onClick={handleNext} >
                                    Continue →
                                </button>
                            )}
                        </div>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default MultiStepRegistration;