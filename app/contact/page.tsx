"use client";
import { Header } from "@/components/common/Header";
import React, { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.phone || !formData.message) {
      alert("Please fill all required fields");
      return;
    }

    console.log("Form submitted:", formData);
    alert("Thank you for contacting us! We will get back to you soon.");
    setFormData({
      name: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#280116" }}>
      <Header />
      {/* Header */}
      <div className="py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="courgette-regular text-4xl lg:text-5xl text-orange-500 text-center mb-2">
            Contact Us
          </h1>
          <p className="font-amaranth text-amber-200 text-center text-lg">
            Get in touch with us for consultations and inquiries
          </p>
        </div>
      </div>

      {/* Main Contact Section */}
      <section className="max-w-5xl mx-auto px-6 pb-10">
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* LEFT: Contact Options */}
          <div
            className="space-y-5 bg-white p-6 rounded-xl shadow-lg border-2"
            style={{ borderColor: "#e5e7eb" }}
          >
            <h3
              className="font-amaranth text-2xl font-bold"
              style={{ color: "#280116" }}
            >
              Get in Touch
            </h3>
            <p className="text-gray-700 font-amaranth">
              For consultation, course enquiries, or any guidance – connect with
              us:
            </p>

            {/* Call Button */}
            <a
              href="tel:+919748588862"
              className="block w-full text-white py-3 rounded-lg font-bold font-amaranth text-center hover:opacity-90 transition shadow-md"
              style={{ backgroundColor: "#016993" }}
            >
              📞 Call Now
            </a>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/919748588862"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-green-600 text-white py-3 rounded-lg font-bold font-amaranth text-center hover:bg-green-700 transition shadow-md"
            >
              💬 Chat on WhatsApp
            </a>

            {/* Email Button */}
            <a
              href="mailto:suvendupaul@astrology.com"
              className="block w-full text-white py-3 rounded-lg font-bold font-amaranth text-center hover:opacity-90 transition shadow-md"
              style={{ backgroundColor: "#cb2d73" }}
            >
              ✉️ Send Email
            </a>

            {/* Office Address */}
            <div className="mt-6 pt-6 border-t-2 border-gray-200">
              <h4
                className="font-amaranth font-bold text-xl mb-3"
                style={{ color: "#280116" }}
              >
                Office Address
              </h4>
              <div className="flex items-start gap-3">
                <span className="text-2xl">📍</span>
                <p className="text-gray-700 font-amaranth leading-relaxed">
                  Astrologer Suvendu Paul
                  <br />
                  Krishnamurti Paddhati
                  <br />
                  2nd Floor, 85 NSC Bose Road
                  <br />
                  Malancha Tollygunge
                  <br />
                  Above Tollygunge UCO Bank
                  <br />
                  Kolkata 700040
                  <br />
                  West Bengal, India
                </p>
              </div>
            </div>

            {/* Office Hours */}
            <div
              className="mt-4 p-4 rounded-lg"
              style={{ backgroundColor: "#f3f4f6" }}
            >
              <h4
                className="font-amaranth font-bold text-lg mb-2"
                style={{ color: "#280116" }}
              >
                ⏰ Office Hours
              </h4>
              <div className="space-y-1 text-gray-700 font-amaranth text-sm">
                <p>Monday - Saturday: 9:00 AM - 6:00 PM</p>
                <p>Sunday: By Appointment Only</p>
              </div>
            </div>
          </div>

          {/* RIGHT: Contact Form */}
          <div
            className="bg-white p-6 rounded-xl shadow-lg border-2"
            style={{ borderColor: "#e5e7eb" }}
          >
            <h3
              className="font-amaranth text-2xl font-bold mb-4"
              style={{ color: "#280116" }}
            >
              Send Us a Message
            </h3>

            <div className="space-y-4">
              {/* Name */}
              <div>
                <label
                  className="font-amaranth font-semibold block mb-2"
                  style={{ color: "#280116" }}
                >
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full border-2 border-gray-300 px-4 py-3 rounded-lg focus:border-orange-500 focus:outline-none transition"
                  style={{ color: "#280116" }}
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  className="font-amaranth font-semibold block mb-2"
                  style={{ color: "#280116" }}
                >
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your number"
                  className="w-full border-2 border-gray-300 px-4 py-3 rounded-lg focus:border-orange-500 focus:outline-none transition"
                  style={{ color: "#280116" }}
                />
              </div>

              {/* Message */}
              <div>
                <label
                  className="font-amaranth font-semibold block mb-2"
                  style={{ color: "#280116" }}
                >
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Write your message..."
                  className="w-full border-2 border-gray-300 px-4 py-3 rounded-lg focus:border-orange-500 focus:outline-none transition resize-none"
                  style={{ color: "#280116" }}
                />
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                className="w-full text-white py-3 rounded-lg font-bold font-amaranth text-lg hover:opacity-90 transition shadow-md"
                style={{ backgroundColor: "#280116" }}
              >
                Submit
              </button>
            </div>

            {/* Quick Info */}
            <div className="mt-6 pt-6 border-t-2 border-gray-200">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div
                  className="p-3 rounded-lg"
                  style={{ backgroundColor: "#f3f4f6" }}
                >
                  <div className="text-2xl mb-1">⚡</div>
                  <div className="text-xs text-gray-600 font-amaranth">
                    Quick Response
                  </div>
                  <div
                    className="text-sm font-bold font-amaranth"
                    style={{ color: "#280116" }}
                  >
                    24 Hours
                  </div>
                </div>
                <div
                  className="p-3 rounded-lg"
                  style={{ backgroundColor: "#f3f4f6" }}
                >
                  <div className="text-2xl mb-1">🎯</div>
                  <div className="text-xs text-gray-600 font-amaranth">
                    Consultation
                  </div>
                  <div
                    className="text-sm font-bold font-amaranth"
                    style={{ color: "#280116" }}
                  >
                    Available
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div
          className="w-full mt-10 bg-white rounded-xl shadow-lg p-6 border-2"
          style={{ borderColor: "#e5e7eb" }}
        >
          <h2
            className="font-amaranth text-3xl font-bold mb-6 text-center"
            style={{ color: "#280116" }}
          >
            📍 Find Us Here
          </h2>
          <div className="w-full h-64 md:h-96 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14734.20807823825!2d88.3513403!3d22.4862212!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDI5JzEwLjQiTiA4OMKwMjEnMDQuOCJF!5e0!3m2!1sen!2sin!4v1735660000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Address Bar Below Map */}
          <div
            className="mt-4 p-4 rounded-lg text-center"
            style={{ backgroundColor: "#f3f4f6" }}
          >
            <p className="font-amaranth text-gray-700">
              <strong style={{ color: "#280116" }}>Address:</strong> 2nd Floor,
              85 NSC Bose Road, Malancha Tollygunge, Above Tollygunge UCO Bank,
              Kolkata 700040
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
