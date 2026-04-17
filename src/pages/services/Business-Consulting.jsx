import React from "react";

export default function BPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Business Consulting with Microsoft Dynamics 365
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
            Empower your organization with modern business solutions using Microsoft Dynamics 365,
            React.js, and Tailwind CSS to drive growth, efficiency, and innovation.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-4">Our Consulting Approach</h2>
            <p className="text-gray-600 leading-relaxed">
              We provide strategic business consulting services tailored to organizations leveraging
              Microsoft Dynamics 365. Our approach combines deep domain expertise with modern
              front-end technologies like React.js and Tailwind CSS to build scalable, user-friendly
              applications that align with your business goals.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-2xl p-6">
            <ul className="space-y-4">
              <li>✔ Digital Transformation Strategy</li>
              <li>✔ Dynamics 365 Customization</li>
              <li>✔ UI/UX Development with React</li>
              <li>✔ Responsive Design using Tailwind CSS</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-10">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Dynamics 365 Implementation",
                desc: "Seamless deployment and integration of Microsoft Dynamics 365 tailored to your business workflows.",
              },
              {
                title: "Custom Web Development",
                desc: "Build modern web apps using React.js integrated with Dynamics 365 APIs.",
              },
              {
                title: "UI Modernization",
                desc: "Enhance user experience with clean, responsive interfaces powered by Tailwind CSS.",
              },
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-10">Why Choose Us?</h2>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            {[
              "Expert Dynamics 365 Consultants",
              "Modern Tech Stack",
              "Scalable Architecture",
              "Client-Centric Approach",
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow">
                <p className="font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-700 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
        <p className="mb-6 text-lg opacity-90">
          Let us help you unlock the full potential of Microsoft Dynamics 365 with cutting-edge web solutions.
        </p>
        <button className="bg-white text-indigo-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition">
          Get Started
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-6 text-center">
        <p>© 2026 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
}
