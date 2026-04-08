import React, { useState } from "react";
import Hero from './Navbar';
import Footer from "./Footer"
export default function CareerForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    skills: "",
    coverLetter: "",
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Application submitted successfully!");
  };

  return (
    <div>
        <Hero/>
    <div className="min-h-screen bg-gray-100 flex items-center justify-center  p-6">
      <div className="bg-white shadow-lg rounded-2xl w-full max-w-3xl mt-16 p-8">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-400">
          Employee Career Registration
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Full Name */}
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            required
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />

          {/* Phone */}
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />

          {/* Position */}
          <input
            type="text"
            name="position"
            placeholder="Position Applied For"
            required
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />

          {/* Experience */}
          <select
            name="experience"
            required
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Experience</option>
            <option>Fresher</option>
            <option>1-2 Years</option>
            <option>3-5 Years</option>
            <option>5+ Years</option>
          </select>

          {/* Skills */}
          <input
            type="text"
            name="skills"
            placeholder="Skills (e.g. React, Node.js)"
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />

          {/* Resume Upload */}
          <input
            type="file"
            name="resume"
            accept=".pdf,.doc,.docx"
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
          />

          {/* Cover Letter */}
          <textarea
            name="coverLetter"
            placeholder="Cover Letter"
            rows="4"
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
          ></textarea>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Submit Application
          </button>

        </form>
      </div>
    </div>
    <Footer/>
    </div>
  );
}