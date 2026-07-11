// src/app/contact/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get in <span className="text-rose-500">Touch</span>
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Have questions? We&apos;d love to hear from you.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Contact Info
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl"></span>
                  <div>
                    <p className="font-medium text-gray-900">Address</p>
                    <p className="text-sm text-gray-500">
                      Gulshan Avenue, Dhaka 1212
                    </p>
                    <p className="text-sm text-gray-500">Bangladesh</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-2xl">📧</span>
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <p className="text-sm text-gray-500">support@dwello.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-2xl">📞</span>
                  <div>
                    <p className="font-medium text-gray-900">Phone</p>
                    <p className="text-sm text-gray-500">+880 1700-000000</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Follow Us
              </h3>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-rose-100 transition"
                >
                  <svg
                    className="w-5 h-5 text-gray-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-rose-100 transition"
                >
                  <svg
                    className="w-5 h-5 text-gray-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-rose-100 transition"
                >
                  <svg
                    className="w-5 h-5 text-gray-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Send us a message
              </h3>

              {success && (
                <div className="bg-green-50 text-green-600 p-4 rounded-lg mb-6">
                  ✅ Message sent successfully! We&apos;ll get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-rose-500 text-sm"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-rose-500 text-sm"
                  />
                </div>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-rose-500 text-sm"
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Your Message"
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-rose-500 text-sm resize-none"
                />
                <button
                  type="submit"
                  className="bg-rose-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-rose-600 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
