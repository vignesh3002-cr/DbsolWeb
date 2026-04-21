import { useState, useRef } from "react";
import emailjs from "emailjs-com";
import useScrollAndFocus from "../hooks/useScrollAndFocus";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";


export default function Consultation() {
  const inputRef = useRef();
  useScrollAndFocus(inputRef, "#form-selection");

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
        "service_k7lyq2g",
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
        setShowTime(false);
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
    <div
      id="form-selection"
      className=""
    >
      {/* Dark overlay */}
      <div className="absolute inset-0"></div>
      
      <form
        onSubmit={handleSubmit}
        className="relative z-10 p-6 md:p-8 rounded-3xl shadow-xl w-full max-w-md space-y-4 backdrop-blur-xl bg-white/20 border border-white/30 mr-6"
      >
        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-white flex items-center justify-center gap-2">
          <img src="/images/calendar.png" className="h-8" alt="calendar" />
          Schedule Consultation
        </h2>

        {/* Name */}
        <div className="bg-white/30 backdrop-blur-md rounded-lg px-3 text-white">
          <input
            ref={inputRef}
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 bg-transparent outline-none placeholder-white/90"
            required
          />
        </div>

        {/* Email */}
        <div className="bg-white/30 backdrop-blur-md rounded-lg px-3 text-white">
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 bg-transparent outline-none placeholder-white/90"
            required
          />
        </div>

        {/* Date */}
        <div className="bg-white/30 backdrop-blur-md rounded-lg px-3 py-2 text-white">
          <DatePicker
            selected={date}
            placeholderText="MM/DD/YYYY"
            onChange={(d) => setDate(d)}
            minDate={new Date()}
            className="w-full p-3 bg-transparent outline-none placeholder-white/90"
            required
            popperClassName="!z-[9999]"
            portalId="root"
          />
        </div>

        {/* Time */}
        <div className="bg-white/30 backdrop-blur-md rounded-lg px-3 text-white">
          <input
            type={showTime ? "time" : "text"}
            placeholder="00:00  Time"
            onFocus={() => setShowTime(true)}
            onBlur={() => !time && setShowTime(false)}
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full p-3 bg-transparent outline-none placeholder-white/90"
            required
          />
        </div>

        {/* Message */}
        <div className="relative bg-white/30 backdrop-blur-md rounded-lg px-3 text-white">
  <span
    className={`absolute left-3 top-3 text-gray-400 transition-opacity duration-300 pointer-events-none ${
      formData.message.trim() !== "" ? "opacity-0" : "opacity-50"
    }`}
  >
    💬
  </span>
  
          <textarea
            name="message"      
            value={formData.message}
            placeholder="   Message"
            onChange={handleChange}
            className="w-full p-3 bg-transparent outline-none placeholder-white/90 overflow-visible"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
}