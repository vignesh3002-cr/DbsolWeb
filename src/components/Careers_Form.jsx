import React, { useState } from "react";
import Hero from "./Navbar";
import Footer from "./Footer";
import Swal from "sweetalert2";

export default function CareerForm() {
  const [fileName, setFileName] = useState("");

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

  // Handle inputs
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // File upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setFileName(file.name);
      setFormData({
        ...formData,
        resume: file,
      });
    }
  };

  const removeFile = () => {
    setFileName("");
    setFormData({
      ...formData,
      resume: null,
    });
  };

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    // ✅ SweetAlert popup
    Swal.fire({
      title: "Success!",
      text: "Application submitted!",
      icon: "success",
      confirmButtonText: "Go Home",
      confirmButtonColor: "#2563eb",
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "/"; // redirect home
      }
    });

    // ✅ Clear form
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      position: "",
      experience: "",
      skills: "",
      coverLetter: "",
      resume: null,
    });

    setFileName("");
  };

  return (
    <div>
      <Hero />

      <div className="min-h-screen bg-gray-100 dark:bg-slate-800 flex items-center justify-center p-6">
        <div className="bg-white dark:bg-gray-700 shadow-lg rounded-2xl w-full max-w-3xl mt-16 p-8">

          {/* TITLE */}
          <h2 className="text-3xl font-bold mb-6 text-center text-blue-400 dark:text-blue-500">
            Employee Career Registration
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">

            {/* Full Name */}
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              required
              value={formData.fullName}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />

            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />

            {/* Phone */}
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />

            {/* Position */}
            <input
              type="text"
              name="position"
              placeholder="Position Applied For"
              required
              value={formData.position}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />

            {/* Experience */}
            <select
              name="experience"
              required
              value={formData.experience}
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
              value={formData.skills}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />

            {/* File Upload */}
            <div className="w-full">
              <label className="flex items-center justify-between w-full p-3 border border-gray-400 rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-100">

                <span className="text-gray-600 dark:text-gray-800 truncate">
                  {fileName || "Choose Resume"}
                </span>

                <span className="px-3 py-1 text-white bg-blue-600 rounded-md">
                  Browse
                </span>

                <input
                  type="file"
                  name="resume"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>
            </div>

            {/* Remove File */}
            {fileName && (
              <button
                type="button"
                onClick={removeFile}
                className="text-sm text-red-500 hover:underline"
              >
                Remove File
              </button>
            )}

            {/* Cover Letter */}
            <textarea
              name="coverLetter"
              placeholder="Cover Letter"
              rows="4"
              value={formData.coverLetter}
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

      <Footer />
    </div>
  );
}