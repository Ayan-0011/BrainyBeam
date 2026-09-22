import React, { useState } from "react";
import { User, Phone, Mail, MapPin, HeartPulse, Heart, AlertTriangle, Check, Camera, ChevronLeft, Loader2,} from "lucide-react";

const DEFAULT_DONOR = {
    id: "DN-204817",
    firstName: "Ayan",
    lastName: "Ansari",
    dob: "2005-03-12",
    gender: "Male",
    bloodType: "O+",

    phone: "+91 98765 43210",
    email: "abc@gmail.com",
    address: "123 Main St",
    city: "Ahmedabad",
    state: "Gujarat",
    pincode: "380001",

    lastDonationDate: "2026-06-15",
    donationType: "Whole Blood",
    donationFrequency: "Every 3 Months",
    preferredLocation: "Ahmedabad Blood Bank",
    availability: "Available",

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
        id: "donation",
        label: "Donation information",
        icon: Heart,
    },
    {
        id: "emergency",
        label: "Emergency contact",
        icon: HeartPulse,
    },
];

function Field({ label, required, error, children }) {
    return (
        <div className="dpep-field">
            <label className="dpep-field__label">
                {label}

                {required && (
                    <span className="dpep-field__required">*</span>
                )}
            </label>

            {children}

            {error && (
                <span className="dpep-field__error">
                    {error}
                </span>
            )}
        </div>
    );
}


export default function DonorProfileEditPage({
    donor = DEFAULT_DONOR,
    onBack,
    onSave,
}) {

    const initialData = {
        ...DEFAULT_DONOR,
        ...donor,
    };

    const [savedProfile, setSavedProfile] = useState(initialData);
    const [form, setForm] = useState(initialData);

    const [errors, setErrors] = useState({});
    const [activeSection, setActiveSection] =
        useState("personal");

    const [saving, setSaving] = useState(false);
    const [message, setMessage] = useState("");


    const isChanged =
        JSON.stringify(form) !== JSON.stringify(savedProfile);


    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));

        // Remove error completely
        if (errors[name]) {
            setErrors((prev) => {
                const updatedErrors = { ...prev };

                delete updatedErrors[name];

                return updatedErrors;
            });
        }

        setMessage("");
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];

        if (!file) {
            return;
        }

        // File type validation
        if (!file.type.startsWith("image/")) {
            setErrors((prev) => ({
                ...prev,
                profileImage:
                    "Please select an image file.",
            }));

            return;
        }

        // File size validation
        if (file.size > 2 * 1024 * 1024) {
            setErrors((prev) => ({
                ...prev,
                profileImage:
                    "Image size must be less than 2MB.",
            }));

            return;
        }

        const imageUrl = URL.createObjectURL(file);

        setForm((prev) => ({
            ...prev,
            profileImage: imageUrl,
        }));

        // Remove image error
        setErrors((prev) => {
            const updatedErrors = { ...prev };

            delete updatedErrors.profileImage;

            return updatedErrors;
        });

        setMessage("");
    };
    const validateForm = () => {
        const newErrors = {};
        if (!form.firstName.trim()) {
            newErrors.firstName =
                "First name is required.";
        }
        if (!form.lastName.trim()) {
            newErrors.lastName =
                "Last name is required.";
        }
        if (!form.email.trim()) {
            newErrors.email =
                "Email is required.";
        } else if (
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
                form.email
            )
        ) {
            newErrors.email =
                "Enter a valid email address.";
        }

        if (!form.phone.trim()) {
            newErrors.phone =
                "Phone number is required.";
        }
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
        } else if (
            newErrors.emergencyPhone
        ) {
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
                "Donor profile updated successfully."
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
    const hasErrors =
        Object.values(errors).some(
            (error) => error
        );

    return (
        <div className="dpep">

            <header className="dpep-header">
                <div className="dpep-header__inner">
                    <button
                        className="dpep-back"
                        onClick={onBack} >
                        <ChevronLeft size={16} />
                        Donors
                    </button>
                </div>
            </header>
            <div className="dpep-body">
                <aside className="dpep-aside">
                    <div className="dpep-identity-card">
                        <div className="dpep-avatar-wrap">
                            {form.profileImage ? (

                                <img src={form.profileImage}
                                    alt="Donor profile"
                                    className="dpep-avatar dpep-avatar-image"
                                />
                            ) : (

                                <div className="dpep-avatar">
                                    {savedProfile.firstName?.charAt(0)}
                                    {savedProfile.lastName?.charAt(0)}
                                </div>
                            )}
                            <label
                                className="dpep-avatar-edit"
                                title="Change profile photo" >
                                <Camera size={13} />
                                <input
                                    type="file"
                                    accept="image/*"
                                    hidden
                                    onChange={handleImageChange} />
                            </label>
                        </div>

                        {errors.profileImage && (
                            <span className="dpep-field__error">
                                {errors.profileImage}
                            </span>
                        )}

                        <h1 className="dpep-name">
                            {savedProfile.firstName}{" "}
                            {savedProfile.lastName}
                        </h1>
                        <p className="dpep-meta">
                            
                            {savedProfile.gender}
                            {" · "}
                            {savedProfile.bloodType}
                        </p>
                        <span className="dpep-donor-id">
                            ID: {savedProfile.id}
                        </span>
                    </div>
                    <nav className="dpep-nav">
                        {SECTIONS.map((section) => {
                            const Icon = section.icon;
                            return (
                                <button
                                    key={section.id}
                                    className={
                                        "dpep-nav-item " +
                                        (
                                            activeSection ===
                                            section.id
                                                ? "dpep-nav-item--active"
                                                : ""
                                        )
                                    }
                                    onClick={() =>
                                        setActiveSection(
                                            section.id
                                        )
                                    } >
                                    <Icon
                                        size={16}
                                        className="dpep-nav-icon"
                                    />
                                    {section.label}
                                </button>
                            );
                        })}
                    </nav>
                </aside>
                <main className="dpep-main">
                    {activeSection === "personal" && (
                        <section className="dpep-section">
                            <div className="dpep-section__header">
                                <h2 className="dpep-section__title">
                                    Personal info
                                </h2>
                                <p className="dpep-section__desc">
                                    The donor's basic personal information.
                                </p>
                            </div>
                            <div className="dpep-grid">
                                <Field
                                    label="First name"
                                    required
                                    error={errors.firstName}  >

                                    <input
                                        className={
                                            "dpep-input " +
                                            (
                                                errors.firstName
                                                    ? "dpep-input--error"
                                                    : ""
                                            )
                                        }
                                        name="firstName"
                                        value={form.firstName}
                                        onChange={handleChange}
                                        placeholder="Enter first name"  />
                                </Field>
                                <Field
                                    label="Last name"
                                    required
                                    error={errors.lastName} >
                                    <input
                                        className={
                                            "dpep-input " +
                                            (
                                                errors.lastName
                                                    ? "dpep-input--error"
                                                    : ""
                                            )
                                        }
                                        name="lastName"
                                        value={form.lastName}
                                        onChange={handleChange}
                                        placeholder="Enter last name"/>
                                </Field>
                                <Field label="Date of birth">
                                    <input
                                        type="date"
                                        className="dpep-input"
                                        name="dob"
                                        value={form.dob}
                                        onChange={handleChange} />
                                </Field>

                                <Field label="Gender">
                                    <select
                                        className="dpep-input dpep-select"
                                        name="gender"
                                        value={form.gender}
                                        onChange={handleChange} >
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
                                <Field
                                    label="Blood group"
                                    required >
                                    <select
                                        className="dpep-input dpep-select"
                                        name="bloodType"
                                        value={form.bloodType}
                                        onChange={handleChange}
                                    >

                                        <option value="O+">
                                            O+
                                        </option>

                                        <option value="O-">
                                            O-
                                        </option>

                                        <option value="A+">
                                            A+
                                        </option>

                                        <option value="A-">
                                            A-
                                        </option>

                                        <option value="B+">
                                            B+
                                        </option>

                                        <option value="B-">
                                            B-
                                        </option>

                                        <option value="AB+">
                                            AB+
                                        </option>

                                        <option value="AB-">
                                            AB-
                                        </option>

                                        <option value="Unknown">
                                            Unknown
                                        </option>
                                    </select>
                                </Field>
                            </div>
                        </section>
                    )}

                    {activeSection === "contact" && (
                        <section className="dpep-section">
                            <div className="dpep-section__header">
                                <h2 className="dpep-section__title">
                                    Contact details
                                </h2>
                                <p className="dpep-section__desc">
                                    How the donor can be contacted.
                                </p>
                            </div>
                            <div className="dpep-grid">
                                <Field
                                    label="Phone number"
                                    required
                                    error={errors.phone}  >
                                    <div className="dpep-input-icon-wrap">

                                        <Phone
                                            size={14}
                                            className="dpep-input-icon" />
                                        <input
                                            className={
                                                "dpep-input dpep-input--with-icon " +
                                                (
                                                    errors.phone
                                                        ? "dpep-input--error"
                                                        : ""
                                                )
                                            }
                                            name="phone"
                                            value={form.phone}
                                            onChange={handleChange}  />
                                    </div>
                                </Field>
                                <Field
                                    label="Email address"
                                    required
                                    error={errors.email} >
                                    <div className="dpep-input-icon-wrap">
                                        <Mail size={14}  className="dpep-input-icon" />
                                        <input
                                            type="email"
                                            className={
                                                "dpep-input dpep-input--with-icon " +
                                                (
                                                    errors.email
                                                        ? "dpep-input--error"
                                                        : ""
                                                )
                                            }
                                            name="email"
                                            value={form.email}
                                            onChange={handleChange}
                                            placeholder="Email address"
                                        />
                                    </div>
                                </Field>

                                <Field label="Street address">
                                    <div className="dpep-input-icon-wrap">

                                        <MapPin  size={14}
                                            className="dpep-input-icon" />
                                        <input
                                            className="dpep-input dpep-input--with-icon"
                                            name="address"
                                            value={form.address}
                                            onChange={handleChange}
                                            placeholder="Street address"/>
                                    </div>
                                </Field>

                                <Field label="City">
                                    <input className="dpep-input"
                                        name="city"
                                        value={form.city}
                                        onChange={handleChange}
                                        placeholder="City" />
                                </Field>

                                <Field label="State">
                                    <input className="dpep-input"
                                        name="state"
                                        value={form.state}
                                        onChange={handleChange}
                                        placeholder="State" />
                                </Field>

                                <Field label="ZIP / Pincode">

                                    <input
                                        className="dpep-input"
                                        name="pincode"
                                        value={form.pincode}
                                        onChange={handleChange}
                                        placeholder="ZIP / Pincode"
                                    />
                                </Field>
                            </div>
                        </section>
                    )}

                    {activeSection === "donation" && (
                        <section className="dpep-section">
                            <div className="dpep-section__header">
                                <h2 className="dpep-section__title">
                                    Donation information
                                </h2>
                                <p className="dpep-section__desc">
                                    Information related to the donor's blood donation activity.
                                </p>
                            </div>
                            <div className="dpep-grid">
                                <Field label="Last donation date">
                                    <input
                                        type="date"
                                        className="dpep-input"
                                        name="lastDonationDate"
                                        value={form.lastDonationDate}
                                        onChange={handleChange}  />
                                </Field>
                                <Field label="Donation type">
                                    <select
                                        className="dpep-input dpep-select"
                                        name="donationType"
                                        value={form.donationType}
                                        onChange={handleChange} >
                                        <option value="Whole Blood">
                                            Whole Blood
                                        </option>

                                        <option value="Platelets">
                                            Platelets
                                        </option>

                                        <option value="Plasma">
                                            Plasma
                                        </option>

                                        <option value="Double Red Cells">
                                            Double Red Cells
                                        </option>

                                    </select>

                                </Field>

                                <Field label="Donation frequency">
                                    <select
                                        className="dpep-input dpep-select"
                                        name="donationFrequency"
                                        value={form.donationFrequency}
                                        onChange={handleChange}  >

                                        <option value="Every 3 Months">
                                            Every 3 Months
                                        </option>

                                        <option value="Every 4 Months">
                                            Every 4 Months
                                        </option>

                                        <option value="Every 6 Months">
                                            Every 6 Months
                                        </option>

                                        <option value="Occasionally">
                                            Occasionally
                                        </option>

                                    </select>

                                </Field>

                                <Field label="Preferred location">
                                    <div className="dpep-input-icon-wrap">
                                        <MapPin   size={14}
                                            className="dpep-input-icon"  />

                                        <input
                                            className="dpep-input dpep-input--with-icon"
                                            name="preferredLocation"
                                            value={form.preferredLocation}
                                            onChange={handleChange}
                                            placeholder="Preferred donation location"  />
                                    </div>
                                </Field>

                                <Field label="Donor availability">

                                    <select
                                        className="dpep-input dpep-select"
                                        name="availability"
                                        value={form.availability}
                                        onChange={handleChange} >
                                        <option value="Available">
                                            Available
                                        </option>

                                        <option value="Unavailable">
                                            Unavailable
                                        </option>

                                        <option value="Temporarily unavailable">
                                            Temporarily unavailable
                                        </option>
                                    </select>
                                </Field>
                            </div>
                        </section>
                    )}
                    {activeSection === "emergency" && (
                        <section className="dpep-section">
                            <div className="dpep-section__header">
                                <h2 className="dpep-section__title">
                                    Emergency contact
                                </h2>
                                <p className="dpep-section__desc">
                                    Someone to contact in an emergency.
                                </p>
                            </div>

                            <div className="dpep-grid">
                                <Field label="Full name">
                                    <input
                                        className="dpep-input"
                                        name="emergencyName"
                                        value={form.emergencyName}
                                        onChange={handleChange}
                                        placeholder="Full name"  />
                                </Field>

                                <Field label="Relationship">
                                    <input
                                        className="dpep-input"
                                        name="emergencyRelation"
                                        value={form.emergencyRelation}
                                        onChange={handleChange}
                                        placeholder="e.g. Spouse"  />
                                </Field>
                                <Field
                                    label="Phone number"
                                    required
                                    error={errors.emergencyPhone} >

                                    <input
                                        className={
                                            "dpep-input " +
                                            (
                                                errors.emergencyPhone
                                                    ? "dpep-input--error"
                                                    : ""
                                            )
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

            <div className="dpep-savebar">
                <div className="dpep-savebar__inner">
                    <div className="dpep-savebar__status">
                        {message ? (
                            <span
                                className={
                                    message.includes(
                                        "successfully"
                                    )
                                        ? "dpep-status dpep-status--success"
                                        : "dpep-status dpep-status--error"
                                }
                            >
                                {message.includes(
                                    "successfully"
                                ) ? (
                                    <Check size={14} />
                                ) : (
                                    <AlertTriangle size={14} />
                                )}
                                {message}
                            </span>
                        ) : isChanged ? (
                            <span className="dpep-status">
                                You have unsaved changes
                            </span>
                        ) : (
                            <span className="dpep-status">
                                No changes to save
                            </span>
                        )}
                    </div>
                    <div className="dpep-savebar__actions">
                        <button
                            className="dpep-btn dpep-btn--ghost"
                            onClick={handleDiscard}
                            disabled={
                                !isChanged || saving
                            }>
                            Discard
                        </button>
                        <button
                            className="dpep-btn dpep-btn--primary"
                            onClick={handleSave}
                            disabled={
                                !isChanged ||
                                saving ||
                                hasErrors
                            } >
                            {saving ? (
                                <>
                                    <Loader2 size={14}  className="dpep-spin"/>
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

