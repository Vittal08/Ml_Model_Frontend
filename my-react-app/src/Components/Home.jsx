import React, { useState } from "react";
import "../css/Home.css";


const initialFormState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  dob: '',
  gender: '',
  country: '',
  education: '',
  experience: '',
  occupation: '',
  company: '',
  skills: '',
  hobbies: '',
  linkedin: '',
  github: '',
  portfolio: '',
  notes: ''
};

const Home = () => {
  const [formData, setFormData] = useState(initialFormState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Form submitted! Check console.");
  };

  return (
    <div className="body">
      <div className="form-container">
        <h1>Submit Your Details</h1>
        <form onSubmit={handleSubmit}>
          <Input label="First Name" name="firstName" value={formData.firstName} onChange={handleChange} />
          <Input label="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} />
          <Input label="Email" name="email" value={formData.email} onChange={handleChange} type="email" />
          <Input label="Phone" name="phone" value={formData.phone} onChange={handleChange} type="tel" />
          <Input label="Date of Birth" name="dob" value={formData.dob} onChange={handleChange} type="date" />

          <div className="form-group">
            <label className="form-label">Experience:</label>
            <div className="radio-group">
              {["Fresher", "1-3 years", "3-5 years", "5+ years"].map((option, idx) => (
                <label key={idx}>
                  <input
                    type="radio"
                    name="experience"
                    value={option}
                    checked={formData.experience === option}
                    onChange={handleChange}
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>

<div className="dropdown">
          <Select
            label="Gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            options={["Male", "Female", "Other"]}
          />

          <Select
            label="Country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            options={["India", "USA", "UK", "Other"]}
          />

          <Select
            label="Education"
            name="education"
            value={formData.education}
            onChange={handleChange}
            options={["High School", "Bachelor's", "Master's", "PhD"]}
          />

</div>

          <Input label="Occupation" name="occupation" value={formData.occupation} onChange={handleChange} />
          <Input label="Company" name="company" value={formData.company} onChange={handleChange} />
          <Input label="Skills" name="skills" value={formData.skills} onChange={handleChange} />
          <Input label="Hobbies" name="hobbies" value={formData.hobbies} onChange={handleChange} />
          <Input label="LinkedIn" name="linkedin" value={formData.linkedin} onChange={handleChange} />
          <Input label="GitHub" name="github" value={formData.github} onChange={handleChange} />
          <Input label="Portfolio" name="portfolio" value={formData.portfolio} onChange={handleChange} />

          <div className="form-group">
            <label className="form-label">Notes</label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              className="form-textarea"
              rows="4"
            />
          </div>

          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

// 🔁 Reusable Input Component
const Input = ({ label, name, value, onChange, type = "text" }) => (
  <div className="form-group">
    <label className="form-label">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className="form-input"
      required
    />
  </div>
);

// 🔁 Reusable Select Component
const Select = ({ label, name, value, onChange, options }) => (
  <div className="form-group">
    <label className="form-label">{label}</label>
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="form-select"
      required
    >
      <option value="">Select {label}</option>
      {options.map((opt, idx) => (
        <option key={idx} value={opt}>{opt}</option>
      ))}
    </select>
  </div>
);

export default Home;

