import React from "react";
import { useNavigate } from "react-router-dom";

const committeeMembers = [
  {
    name: "Yongfu Li",
    role: "General Co-Chair",
    university: "Shanghai JiaoTong University",
    country: "China",
    image: "https://via.placeholder.com/100", // Replace with actual image URL
  },
  {
    name: "Weisheng Zhao",
    role: "General Co-Chair",
    university: "Beihang University",
    country: "China",
    image: "https://via.placeholder.com/100",
  },
  {
    name: "Mohd Sawan",
    role: "General Co-Chair",
    university: "Westlake University",
    country: "China",
    image: "https://via.placeholder.com/100",
  },
  {
    name: "John Doe",
    role: "Program Chair",
    university: "MIT",
    country: "USA",
    image: "https://via.placeholder.com/100",
  },
  {
    name: "Jane Smith",
    role: "Technical Chair",
    university: "Stanford University",
    country: "USA",
    image: "https://via.placeholder.com/100",
  },
  {
    name: "Ali Khan",
    role: "Advisory Board",
    university: "University of Tokyo",
    country: "Japan",
    image: "https://via.placeholder.com/100",
  },
];

const FullCommittee = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-6xl mx-auto px-4">
        {/* Breadcrumb Navigation */}
        <nav className="text-green-600 mb-4">
          <span className="cursor-pointer hover:underline" onClick={() => navigate("/")}>
            Home
          </span>{" "}
          / <span className="text-gray-700">Organizing Committee</span>
        </nav>

        {/* Title */}
        <h2 className="text-2xl font-bold text-green-700 mb-6">Organizing Committee</h2>

        {/* Committee Members Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {committeeMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 flex items-center">
              <img src={member.image} alt={member.name} className="w-20 h-20 rounded-full object-cover mr-4" />
              <div>
                <h3 className="text-lg font-semibold text-green-700">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
                <p className="text-gray-500">{member.university}</p>
                <p className="text-gray-500">{member.country}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Back Button */}
        <div className="text-center mt-8">
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default FullCommittee;
