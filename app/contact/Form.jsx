"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";

export const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleForm = (e) => {
    e.preventDefault();
    toast.success("Message Sent!");

    // reset form fields
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    });
  };

  return (
    <div>
      <div className="bg-[#eaf4f2] rounded-2xl max-w-md mx-auto p-4 md:p-8 border">
        <h2 className="text-2xl font-bold text-center">Contact Info</h2>
        <p className="text-center text-gray-600 mt-1">
          Get in touch with us for any questions, support, or partnership
          opportunities.
        </p>

        <form onSubmit={handleForm} className="mt-6 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm font-semibold mb-1">
                First Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                required
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-semibold mb-1">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Your last name"
                required
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Your E-mail address"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Message</label>
            <textarea
              rows="4"
              placeholder="Your message..."
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded-md transition cursor-pointer"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};
