import { useState } from "react"


const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']
const timeSlots = ['09:00 AM - 11:00 AM', '11:00 AM - 01:00 PM', '02:00 PM - 04:00 PM', '04:00 PM - 06:00 PM']

function DonorScheduling() {
  const [formData, setFormData] = useState({
    name: '',
    bloodGroup: '',
    date: '',
    timeSlot: '',
    contact: '',
    location: '',
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const validate = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.bloodGroup) newErrors.bloodGroup = 'Select blood group'
    if (!formData.date) newErrors.date = 'Select a date'
    if (!formData.timeSlot) newErrors.timeSlot = 'Select a time slot'
    if (!formData.contact.trim() || !/^\d{10}$/.test(formData.contact))
      newErrors.contact = 'Enter valid 10-digit number'
    if (!formData.location.trim()) newErrors.location = 'Location is required'
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate()

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)

      return
    }

    setErrors({})
    // TODO: replace with actual API call
    console.log('Donor schedule submitted:', formData)

  }

  return (
    <div className="donor-scheduling-container">
      <h2>Schedule Blood Donation</h2>
      <form className="donor-form" onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label htmlFor="name">Donor Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
          />
          {errors.name && <span className="error-text">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="bloodGroup">Blood Group</label>
          <select
            id="bloodGroup"
            name="bloodGroup"
            value={formData.bloodGroup}
            onChange={handleChange}
          >
            <option value="">Select blood group</option>
            {bloodGroups.map((bg) => (
              <option key={bg} value={bg}>{bg}</option>
            ))}
          </select>
          {errors.bloodGroup && <span className="error-text">{errors.bloodGroup}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="date">Preferred Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            min={new Date().toISOString().split('T')[0]}
          />
          {errors.date && <span className="error-text">{errors.date}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="timeSlot">Time Slot</label>
          <select
            id="timeSlot"
            name="timeSlot"
            value={formData.timeSlot}
            onChange={handleChange}
          >
            <option value="">Select time slot</option>
            {timeSlots.map((slot) => (
              <option key={slot} value={slot}>{slot}</option>
            ))}
          </select>
          {errors.timeSlot && <span className="error-text">{errors.timeSlot}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="contact">Contact Number</label>
          <input
            type="tel"
            id="contact"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            placeholder="10-digit mobile number"
          />
          {errors.contact && <span className="error-text">{errors.contact}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="location">Preferred Center / Location</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Enter hospital or donation center"
          />
          {errors.location && <span className="error-text">{errors.location}</span>}
        </div>

        <button type="submit" className="submit-btn">Schedule Donation</button>
      </form>
    </div>
  )
}

export default DonorScheduling