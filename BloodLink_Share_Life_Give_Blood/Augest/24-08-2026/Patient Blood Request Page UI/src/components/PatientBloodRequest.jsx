import { useState } from 'react'
import './PatientBloodRequest.css'

const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']
const urgencyLevels = ['Normal', 'Urgent', 'Critical']

function PatientBloodRequest() {
  const [formData, setFormData] = useState({
    patientName: '',
    bloodGroup: '',
    units: '',
    urgency: '',
    hospital: '',
    contact: '',
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const validate = () => {
    const newErrors = {}
    if (!formData.patientName.trim()) newErrors.patientName = 'Patient name is required'
    if (!formData.bloodGroup) newErrors.bloodGroup = 'Select blood group'
    if (!formData.units || Number(formData.units) <= 0)
      newErrors.units = 'Enter valid number of units'
    if (!formData.urgency) newErrors.urgency = 'Select urgency level'
    if (!formData.hospital.trim()) newErrors.hospital = 'Hospital name is required'
    if (!formData.contact.trim() || !/^\d{10}$/.test(formData.contact))
      newErrors.contact = 'Enter valid 10-digit number'
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
    console.log('Blood request submitted:', formData)
    setFormData({
      patientName: '',
      bloodGroup: '',
      units: '',
      urgency: '',
      hospital: '',
      contact: '',
    })
  }

  return (
    <div className="blood-request-container">
      <h2>Request Blood</h2>
      <p className="subtitle">Fill in the details below to raise a blood request</p>

      <form className="blood-request-form" onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label htmlFor="patientName">Patient Name</label>
          <input  type="text"  id="patientName" name="patientName"  value={formData.patientName}  onChange={handleChange}  placeholder="Enter patient's full name" />
          {errors.patientName && <span className="error-text">{errors.patientName}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="bloodGroup">Blood Group Required</label>
          <select id="bloodGroup" name="bloodGroup"
            value={formData.bloodGroup}
            onChange={handleChange} >
            <option value="">Select blood group</option>
            {bloodGroups.map((bg) => (
              <option key={bg} value={bg}>{bg}</option>
            ))}
          </select>
          {errors.bloodGroup && <span className="error-text">{errors.bloodGroup}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="units">Units Needed</label>
          <input  type="number"  id="units" name="units" min="1" value={formData.units} onChange={handleChange} placeholder="e.g. 2" />
          {errors.units && <span className="error-text">{errors.units}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="urgency">Urgency Level</label>
          <select  id="urgency"  name="urgency" value={formData.urgency} onChange={handleChange} >
            <option value="">Select urgency</option>
            {urgencyLevels.map((level) => (
              <option key={level} value={level}>{level}</option>
            ))}
          </select>
          {errors.urgency && <span className="error-text">{errors.urgency}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="hospital">Hospital Name</label>
          <input  type="text"   id="hospital" name="hospital"  value={formData.hospital}  onChange={handleChange} placeholder="Enter hospital name" />
          {errors.hospital && <span className="error-text">{errors.hospital}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="contact">Contact Number</label>
          <input type="tel"  id="contact" name="contact" value={formData.contact} onChange={handleChange} placeholder="10-digit mobile number" />
          {errors.contact && <span className="error-text">{errors.contact}</span>}
        </div>

        <button type="submit" className="submit-btn">Submit Request</button>
      </form>
    </div>
  )
}

export default PatientBloodRequest