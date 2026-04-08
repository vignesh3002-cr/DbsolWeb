import { useState } from "react";
import emailjs from "emailjs-com";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";

export default function Consultation() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [showTime, setShowTime] = useState(false);
  const [date, setDate] = useState(null);
  const [time, setTime] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      date: date?.toLocaleDateString(),
      time: time,
    };

    emailjs
      .send(
        "service_vnls5bv",
        "template_wvng59j",
        templateParams,
        "5ctbJ-D6EXYlXfvpX"
      )
      .then(() => {
        Swal.fire({
          title: "Success!",
          text: "Consultation booked!",
          icon: "success",
          confirmButtonColor: "#2563eb",
        });

        setFormData({ name: "", email: "", message: "" });
        setDate(null);
        setTime("");
      })
      .catch(() => {
        Swal.fire({
          title: "Error!",
          text: "Something went wrong!",
          icon: "error",
        });
      });
  };

  return (
    // ✅ MOVE ID HERE (VERY IMPORTANT)
    <select>
    <div
      id="form-selection"
      className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900"
    >
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg w-96"
      >
        <h2 className="text-2xl font-bold mb-4 text-center text-black dark:text-white">
          Schedule Consultation
        </h2>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded"
          required
        />

        <DatePicker
          selected={date}
          onChange={(d) => setDate(d)}
          placeholderText="Select Date"
          className="w-full mb-3 p-2 border rounded"
          required
        />

        <input
          type={showTime ? "time" : "text"}
          placeholder="Select Time"
          onFocus={() => setShowTime(true)}
          onBlur={() => !time && setShowTime(false)}
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="w-full mb-3 p-2 border rounded"
        />

        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
    </select>
  );
}