
import React, { useState } from "react";
import { User, Phone, Mail, MapPin, HeartPulse, AlertTriangle, Check, Camera, ChevronLeft, Loader2,} from "lucide-react";


const DEFAULT_PATIENT = {
    id: "PT-204817",
    firstName: "Ayan",
    lastName: "Ansari",
    dob: "2005-03-12",
    gender: "Male",
    bloodType: "O+",
    phone: "+91 98765 43210",
    email: "abc@gamil.com",
    address: "123 Main St",
    city: "Portland",
    state: "gujrat",
    pincode: "38001",
    emergencyName: "John Doe",
    emergencyRelation: "Friend",
    emergencyPhone: "+91 98765 43210",
    profileImage: "",
};

const SECTIONS = [
    {
        id: "personal",
        label: "Personal info",
        icon: User,
    },
    {
        id: "contact",
        label: "Contact details",
        icon: Phone,
    },
    {
        id: "emergency",
        label: "Emergency contact",
        icon: HeartPulse,
    },
];

function Field({ label, required, error, children }) {
    return (
        <div className="ppep-field">
            <label className="ppep-field__label">
                {label}

                {required && (
                    <span className="ppep-field__required">*</span>
                )}
            </label>

            {children}

            {error && (
                <span className="ppep-field__error">
                    {error}
                </span>
            )}
        </div>
    );
}

export default function PatientProfileEditPage({
    patient = DEFAULT_PATIENT,
    onBack,
    onSave,
}) {
   

    const initialData = {
        ...DEFAULT_PATIENT,
        ...patient,
    };

    const [savedProfile, setSavedProfile] = useState(initialData);

    const [form, setForm] = useState(initialData);

    const [errors, setErrors] = useState({});

    const [activeSection, setActiveSection] =
        useState("personal");

    const [saving, setSaving] = useState(false);

    const [message, setMessage] = useState("");


    const isChanged = JSON.stringify(form) !== JSON.stringify(savedProfile);



    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm({  ...form,  [name]: value, });

        if (errors[name]) { setErrors({  ...errors,  [name]: "", }); }
        setMessage("");
    };


    const handleImageChange = (e) => {
        const file = e.target.files[0];

        if (!file) {
            return;
        }

        if (!file.type.startsWith("image/")) {
            setErrors({  ...errors, profileImage: "Please select an image file.", });
            return;
        }


        if (file.size > 2 * 1024 * 1024) {
            setErrors({  ...errors,  profileImage: "Image size must be less than 2MB.", });
            return;
        }

        const imageUrl = URL.createObjectURL(file);

        setForm({ ...form, profileImage: imageUrl, });

        const updatedErrors = { ...errors };
        delete updatedErrors.profileImage;
        setErrors(updatedErrors);
        setMessage("");
    };


    const validateForm = () => {
        const newErrors = {};

        // First name
        if (!form.firstName.trim()) {
            newErrors.firstName = "First name is required.";
        }

        // Last name
        if (!form.lastName.trim()) {
            newErrors.lastName = "Last name is required.";
        }

        // Email
        if (!form.email.trim()) {
            newErrors.email = "Email is required.";
        } else if (
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
        ) {
            newErrors.email = "Enter a valid email address.";
        }

        // Phone
        if (!form.phone.trim()) {
            newErrors.phone = "Phone number is required.";
        }

        // Emergency phone
        if (!form.emergencyPhone.trim()) {
            newErrors.emergencyPhone =
                "Emergency phone number is required.";
        }

        setErrors(newErrors);

        if (
            newErrors.firstName ||
            newErrors.lastName
        ) {
            setActiveSection("personal");
        } else if (
            newErrors.email ||
            newErrors.phone
        ) {
            setActiveSection("contact");
        } else if (newErrors.emergencyPhone) {
            setActiveSection("emergency");
        }

        return Object.keys(newErrors).length === 0;
    };


    const handleSave = async () => {
        const isValid = validateForm();

        if (!isValid) {
            return;
        }

        setSaving(true);
        setMessage("");

        try {
            if (onSave) {
                await onSave(form);
            } else {

                await new Promise((resolve) =>
                    setTimeout(resolve, 800)
                );
            }
            setSavedProfile(form);
            setSaving(false);
            setMessage(
                "Profile updated successfully."
            );
        } catch (error) {
            setSaving(false);
            setMessage(
                "Failed to save profile. Please try again."
            );
        }
    };



    const handleDiscard = () => {
        setForm(savedProfile);
        setErrors({});
        setMessage("");
    };


    const hasErrors = Object.keys(errors).length > 0;


    return (
        <div className="ppep">

            <header className="ppep-header">
                <div className="ppep-header__inner">
                    <button className="ppep-back"
                        onClick={onBack}  >
                        <ChevronLeft size={16} />
                        Patients
                    </button>
                </div>
            </header>



            <div className="ppep-body">
                {/* SIDEBAR */}
                <aside className="ppep-aside">
                    {/* Profile Card */}
                    <div className="ppep-identity-card">
                        <div className="ppep-avatar-wrap">

                            {form.profileImage ? (
                                <img src={form.profileImage} alt="Profile"
                                    className="ppep-avatar ppep-avatar-image" />
                            ) : (
                                <div className="ppep-avatar">
                                    {savedProfile.firstName?.charAt(0)}
                                    {savedProfile.lastName?.charAt(0)}
                                </div>
                            )}

                            <label
                                className="ppep-avatar-edit"
                                title="Change profile photo" >
                                <Camera size={13} />

                                <input type="file" accept="image/*"  hidden onChange={handleImageChange}  />
                            </label>

                        </div>

                        {errors.profileImage && (
                            <span className="ppep-field__error">
                                {errors.profileImage}
                            </span>
                        )}

                        {/* Saved profile name */}
                        <h1 className="ppep-name">
                            {savedProfile.firstName}{" "}
                            {savedProfile.lastName}

                        </h1>
                        <p className="ppep-meta">
                            {savedProfile.dob || "DOB not added"}
                            {" · "}
                            {savedProfile.gender}
                            {" · "}
                            {savedProfile.bloodType}
                        </p>

                    </div>

                    <nav className="ppep-nav">
                        {SECTIONS.map((section) => {
                            const Icon = section.icon;

                            return (
                                <button key={section.id}
                                    className={
                                        "ppep-nav-item " +
                                        (activeSection === section.id
                                            ? "ppep-nav-item--active"
                                            : "")
                                    }
                                    onClick={() =>
                                        setActiveSection(section.id)
                                    }
                                >
                                    <Icon size={16} className="ppep-nav-icon" />
                                    {section.label}
                                </button>
                            );

                        })}

                    </nav>

                </aside>

                <main className="ppep-main">


                    {activeSection === "personal" && (
                        <section className="ppep-section">
                            <div className="ppep-section__header">
                                <h2 className="ppep-section__title">
                                    Personal info
                                </h2>

                                <p className="ppep-section__desc">
                                    The patient's basic information.
                                </p>

                            </div>

                            <div className="ppep-grid">

                                <Field
                                    label="First name"
                                    required
                                    error={errors.firstName}
                                >

                                    <input
                                        className={
                                            "ppep-input " +
                                            (errors.firstName
                                                ? "ppep-input--error"
                                                : "")
                                        }
                                        name="firstName"
                                        value={form.firstName}
                                        onChange={handleChange}
                                        placeholder="Enter first name"
                                    />

                                </Field>

                                <Field
                                    label="Last name"
                                    required
                                    error={errors.lastName}
                                >

                                    <input
                                        className={
                                            "ppep-input " +
                                            (errors.lastName
                                                ? "ppep-input--error"
                                                : "")
                                        }
                                        name="lastName"
                                        value={form.lastName}
                                        onChange={handleChange}
                                        placeholder="Enter last name"
                                    />

                                </Field>


                                {/* DOB */}

                                <Field label="Date of birth">

                                    <input
                                        type="date"
                                        className="ppep-input"
                                        name="dob"
                                        value={form.dob}
                                        onChange={handleChange}
                                    />

                                </Field>


                                {/* Gender */}

                                <Field label="Gender">

                                    <select
                                        className="ppep-input ppep-select"
                                        name="gender"
                                        value={form.gender}
                                        onChange={handleChange}
                                    >

                                        <option value="Female">
                                            Female
                                        </option>

                                        <option value="Male">
                                            Male
                                        </option>

                                        <option value="Other">
                                            Other
                                        </option>

                                        <option value="Prefer not to say">
                                            Prefer not to say
                                        </option>

                                    </select>

                                </Field>


                                {/* Blood group */}

                                <Field label="Blood type">

                                    <select
                                        className="ppep-input ppep-select"
                                        name="bloodType"
                                        value={form.bloodType}
                                        onChange={handleChange}
                                    >

                                        <option value="O+">O+</option>
                                        <option value="O-">O-</option>

                                        <option value="A+">A+</option>
                                        <option value="A-">A-</option>

                                        <option value="B+">B+</option>
                                        <option value="B-">B-</option>

                                        <option value="AB+">AB+</option>
                                        <option value="AB-">AB-</option>

                                        <option value="Unknown">
                                            Unknown
                                        </option>

                                    </select>

                                </Field>

                            </div>

                        </section>

                    )}


                    {/* ================= CONTACT ================= */}

                    {activeSection === "contact" && (

                        <section className="ppep-section">

                            <div className="ppep-section__header">

                                <h2 className="ppep-section__title">
                                    Contact details
                                </h2>

                                <p className="ppep-section__desc">
                                    How the patient can be contacted.
                                </p>

                            </div>


                            <div className="ppep-grid">

                                {/* Phone */}

                                <Field
                                    label="Phone number"
                                    required
                                    error={errors.phone}
                                >

                                    <div className="ppep-input-icon-wrap">

                                        <Phone
                                            size={14}
                                            className="ppep-input-icon"
                                        />

                                        <input
                                            className={
                                                "ppep-input ppep-input--with-icon " +
                                                (errors.phone
                                                    ? "ppep-input--error"
                                                    : "")
                                            }
                                            name="phone"
                                            value={form.phone}
                                            onChange={handleChange}
                                            placeholder="Phone number"
                                        />

                                    </div>

                                </Field>


                                {/* Email */}

                                <Field
                                    label="Email address"
                                    required
                                    error={errors.email}
                                >

                                    <div className="ppep-input-icon-wrap">

                                        <Mail
                                            size={14}
                                            className="ppep-input-icon"
                                        />

                                        <input
                                            type="email"
                                            className={
                                                "ppep-input ppep-input--with-icon " +
                                                (errors.email
                                                    ? "ppep-input--error"
                                                    : "")
                                            }
                                            name="email"
                                            value={form.email}
                                            onChange={handleChange}
                                            placeholder="Email address"
                                        />

                                    </div>

                                </Field>


                                {/* Address */}

                                <Field label="Street address">

                                    <div className="ppep-input-icon-wrap">

                                        <MapPin
                                            size={14}
                                            className="ppep-input-icon"
                                        />

                                        <input
                                            className="ppep-input ppep-input--with-icon"
                                            name="address"
                                            value={form.address}
                                            onChange={handleChange}
                                            placeholder="Street address"
                                        />

                                    </div>

                                </Field>


                                {/* City */}

                                <Field label="City">

                                    <input
                                        className="ppep-input"
                                        name="city"
                                        value={form.city}
                                        onChange={handleChange}
                                    />

                                </Field>


                                {/* State */}

                                <Field label="State">

                                    <input
                                        className="ppep-input"
                                        name="state"
                                        value={form.state}
                                        onChange={handleChange}
                                    />

                                </Field>


                                {/* ZIP */}

                                <Field label="ZIP code">

                                    <input
                                        className="ppep-input"
                                        name="pincode"
                                        value={form.pincode}
                                        onChange={handleChange}
                                    />

                                </Field>

                            </div>

                        </section>

                    )}


                    {/* ================= EMERGENCY ================= */}

                    {activeSection === "emergency" && (

                        <section className="ppep-section">

                            <div className="ppep-section__header">

                                <h2 className="ppep-section__title">
                                    Emergency contact
                                </h2>

                                <p className="ppep-section__desc">
                                    Someone to contact in an emergency.
                                </p>

                            </div>


                            <div className="ppep-grid">

                                {/* Name */}

                                <Field label="Full name">

                                    <input
                                        className="ppep-input"
                                        name="emergencyName"
                                        value={form.emergencyName}
                                        onChange={handleChange}
                                        placeholder="Full name"
                                    />

                                </Field>


                                {/* Relationship */}

                                <Field label="Relationship">

                                    <input
                                        className="ppep-input"
                                        name="emergencyRelation"
                                        value={form.emergencyRelation}
                                        onChange={handleChange}
                                        placeholder="e.g. Spouse"
                                    />

                                </Field>


                                {/* Emergency phone */}

                                <Field
                                    label="Phone number"
                                    required
                                    error={errors.emergencyPhone}
                                >

                                    <input
                                        className={
                                            "ppep-input " +
                                            (errors.emergencyPhone
                                                ? "ppep-input--error"
                                                : "")
                                        }
                                        name="emergencyPhone"
                                        value={form.emergencyPhone}
                                        onChange={handleChange}
                                        placeholder="Emergency phone number"
                                    />

                                </Field>

                            </div>

                        </section>

                    )}

                </main>

            </div>


            {/* ================= SAVE BAR ================= */}

            <div className="ppep-savebar">

                <div className="ppep-savebar__inner">

                    {/* Status */}

                    <div className="ppep-savebar__status">

                        {message ? (

                            <span
                                className={
                                    message.includes("successfully")
                                        ? "ppep-status ppep-status--success"
                                        : "ppep-status ppep-status--error"
                                }
                            >

                                {message.includes("successfully") ? (
                                    <Check size={14} />
                                ) : (
                                    <AlertTriangle size={14} />
                                )}

                                {message}

                            </span>

                        ) : isChanged ? (

                            <span className="ppep-status">
                                You have unsaved changes
                            </span>

                        ) : (

                            <span className="ppep-status">
                                No changes to save
                            </span>

                        )}

                    </div>


                    {/* Buttons */}

                    <div className="ppep-savebar__actions">

                        <button
                            className="ppep-btn ppep-btn--ghost"
                            onClick={handleDiscard}
                            disabled={
                                !isChanged || saving
                            }
                        >
                            Discard
                        </button>


                        <button
                            className="ppep-btn ppep-btn--primary"
                            onClick={handleSave}
                            disabled={
                                !isChanged ||
                                saving ||
                                hasErrors
                            }
                        >

                            {saving ? (

                                <>
                                    <Loader2
                                        size={14}
                                        className="ppep-spin"
                                    />

                                    Saving...
                                </>

                            ) : (

                                "Save changes"

                            )}

                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
}
