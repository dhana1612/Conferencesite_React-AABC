import { MapPin, Phone, Mail, Globe } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Contact() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (e.g., send data to an API or email service)
        console.log("Form Data:", formData);
        alert("Thank you for your message! We will get back to you soon.");
        setFormData({ firstName: "", lastName: "", email: "", message: "" }); // Reset form
    };

    return (
        <section className="bg-gray-100" id="contact">
            <div className="py-10 px-6 md:px-20 w-full xl:w-[70%] mx-auto">
                {/* Breadcrumb Navigation */}
                <nav className="text-green-600 mb-4">
                    <span className="cursor-pointer hover:underline" onClick={() => navigate("/")}>
                        Home
                    </span>{" "}
                    / <span className="text-gray-700">Feel Free to Contact Us</span>
                </nav>

                {/* Title */}
                <h2 className="text-3xl font-bold text-green-700 mb-6">Contact</h2>

                {/* Card Section */}
                <div className="grid md:grid-cols-2 gap-8 mt-8">
                    {/* Left Section */}
                    <div className="border-t-4 border-b-4 border-green-500 p-6 shadow-md rounded-md">
                        <div className="mb-4">
                            <h3 className="text-xl font-semibold text-green-700 flex items-center">
                                <Globe className="mr-2 text-green-500" /> About Arrow Thought
                            </h3>
                            <p className="text-gray-600">
                                The Hyatt Regency brand is a global collection of hotels and resorts found in more
                                than 200 locations across 40+ countries. A place where everyone is welcome and anything is possible.
                            </p>
                            <a href="#" className="text-green-500 font-semibold mt-2 inline-block">
                                Read More
                            </a>
                        </div>

                        <div className="mb-4">
                            <h3 className="text-lg font-semibold text-green-700 flex items-center">
                                <MapPin className="mr-2 text-green-500" /> Location
                            </h3>
                            <p className="text-gray-600">Hyatt Regency, 88 Donghai East Road, Qingdao, China, 266061</p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-green-700 flex items-center">
                                <Phone className="mr-2 text-green-500" /> Call
                            </h3>
                            <p className="text-gray-600">+86 53286121234</p>
                        </div>

                        {/* Google Map */}
                        <div className="mt-6">
                            <iframe
                                className="w-full h-48 rounded-md"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.488715259873!2d139.7635573152587!3d35.68123618019425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bfbd89f700b%3A0x277c49ba34ed38!2sTokyo%20International%20Forum!5e0!3m2!1sen!2sjp!4v1234567890123!5m2!1sen!2sjp"
                                loading="lazy"
                                title="Tokyo International Forum Map"
                            ></iframe>
                        </div>
                    </div>

                    {/* Right Section with Contact Form */}
                    <div className="border-t-4 border-b-4 border-green-500 p-6 shadow-md rounded-md">
                        <h3 className="text-xl font-semibold text-green-700 mb-4">Send Us a Message</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}