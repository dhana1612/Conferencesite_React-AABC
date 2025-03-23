import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RegistrationDetails() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    institution: "",
    category: "",
    paymentMethod: "",
  });
  const [errors, setErrors] = useState({});

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Validate form fields
  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = "Full name is required.";
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }
    if (!formData.institution) newErrors.institution = "Institution is required.";
    if (!formData.category) newErrors.category = "Category is required.";
    if (!formData.paymentMethod) newErrors.paymentMethod = "Payment method is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
      setIsModalOpen(false); // Close modal after submission
    }
  };

  return (
    <section className="bg-gray-100 px-6 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb Navigation */}
        <nav className="text-green-600 mb-4">
          <span className="cursor-pointer hover:underline" onClick={() => navigate("/")}>
            Home
          </span>{" "}
          / <span className="text-gray-700">Registration Details</span>
        </nav>

        {/* Title */}
        <h2 className="text-3xl font-bold text-green-700 mb-6">Registration Details</h2>

        {/* Registration Fees Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Registration Fees</h3>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b">
                  <th className="py-2">Category</th>
                  <th className="py-2">Early Bird (Before Dec 1, 2025)</th>
                  <th className="py-2">Regular (After Dec 1, 2025)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2">Students</td>
                  <td className="py-2">$100</td>
                  <td className="py-2">$150</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">Faculty</td>
                  <td className="py-2">$200</td>
                  <td className="py-2">$250</td>
                </tr>
                <tr>
                  <td className="py-2">Industry Professionals</td>
                  <td className="py-2">$300</td>
                  <td className="py-2">$350</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Payment Methods Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Payment Methods</h3>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <ul className="list-disc pl-6 text-gray-700">
              <li>Credit Card (Visa, MasterCard, American Express)</li>
              <li>Bank Transfer (Details provided upon registration)</li>
              <li>PayPal (Available for international participants)</li>
            </ul>
          </div>
        </div>

        {/* Register Now Button */}
        <div className="text-center">
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-md hover:bg-green-800 transition-transform transform hover:scale-105"
          >
            Register Now
          </button>
        </div>

        {/* Registration Form Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 backdrop-blur-sm flex justify-center items-start p-4 pt-16">
            <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-lg relative overflow-y-auto max-h-[80vh] mt-16">
              <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
                Registration Form
              </h2>
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-gray-700 font-semibold">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg p-3"
                    required
                  />
                  {errors.fullName && (
                    <p className="text-red-600 text-sm mt-1">{errors.fullName}</p>
                  )}
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg p-3"
                    required
                  />
                  {errors.email && (
                    <p className="text-red-600 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold">
                    Institution *
                  </label>
                  <input
                    type="text"
                    name="institution"
                    value={formData.institution}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg p-3"
                    required
                  />
                  {errors.institution && (
                    <p className="text-red-600 text-sm mt-1">{errors.institution}</p>
                  )}
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold">
                    Category *
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg p-3"
                    required
                  >
                    <option value="">-- Select Category --</option>
                    <option value="Student">Student</option>
                    <option value="Faculty">Faculty</option>
                    <option value="Industry">Industry</option>
                  </select>
                  {errors.category && (
                    <p className="text-red-600 text-sm mt-1">{errors.category}</p>
                  )}
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold">
                    Payment Method *
                  </label>
                  <select
                    name="paymentMethod"
                    value={formData.paymentMethod}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg p-3"
                    required
                  >
                    <option value="">-- Select Payment Method --</option>
                    <option value="Credit Card">Credit Card</option>
                    <option value="Bank Transfer">Bank Transfer</option>
                    <option value="PayPal">PayPal</option>
                  </select>
                  {errors.paymentMethod && (
                    <p className="text-red-600 text-sm mt-1">{errors.paymentMethod}</p>
                  )}
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-3 mt-6">
                  <button
                    type="submit"
                    className="w-full md:w-auto bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
                  >
                    Submit Registration
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="w-full md:w-auto text-red-600 font-semibold px-8 py-3 border border-red-600 rounded-lg hover:bg-red-600 hover:text-white transition"
                  >
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}