import React from "react";
import { useNavigate } from "react-router-dom";

const committeeMembers = [
  {
    name: "Yongfu Li",
    role: "General Co-Chair",
    university: "Shanghai JiaoTong University",
    country: "China",
    image: "img/comm8.jpg",
  },
  {
    name: "Weisheng Zhao",
    role: "General Co-Chair",
    university: "Beihang University",
    country: "China",
    image: "img/comm8.jpg",
  },
  {
    name: "Mohd Sawan",
    role: "General Co-Chair",
    university: "Westlake University",
    country: "China",
    image: "img/comm8.jpg",
  },
];

const committeeList = [
  {
    title: "General Co-Chairs",
    members: [
      "Rajesh Kumar, University of Oxford, UK",
      "Priya Sharma, Indian Institute of Science, India",
      "Mohammed Al-Farsi, King’s College London, UK",
    ],
  },
  {
    title: "Technical Program Co-Chairs",
    members: [
      "James Anderson, University of Cambridge, UK",
      "Ananya Verma, Indian Institute of Technology Delhi, India",
      "Ethan Carter, Harvard University, USA",
      "Lucas Bennett, University of Toronto, Canada",
      "Arjun Nair, Digital University Kerala, India",
      "Rohan Mehta, City University of London, UK",
      "Daniel Kim, Cornell Tech, USA",
    ],
  },
  {
    title: "Financial Co-Chairs",
    members: [
      "Sarah Lewis, University of Edinburgh, UK",
      "Aditya Patel, National University of Singapore, Singapore",
    ],
  },
  {
    title: "Publicity Co-Chairs",
    members: [
      "Emily White, Imperial College London, UK",
      "Thomas van Dijk, Delft University of Technology, Netherlands",
    ],
  },
  {
    title: "Local Arrangement Co-Chairs",
    members: [
      "David Brown, University of Manchester, UK",
      "Sophia Li, University of Birmingham, UK",
    ],
  },
  {
    title: "DEI Co-Chairs",
    members: [
      "Olivia Taylor, University of Glasgow, UK",
      "Aarav Singh, University of Delhi, India",
      "Hannah Chen, University College London, UK",
    ],
  },
  {
    title: "Sponsorship Co-Chairs",
    members: [
      "Nathan Scott, University of Bristol, UK",
      "Wei Zhang, National University of Singapore, Singapore",
    ],
  },
];

const FullCommittee = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="w-full xl:w-[65%] mx-auto px-4">
        {/* Breadcrumb Navigation */}
        <nav className="text-green-600 mb-4">
          <span className="cursor-pointer hover:underline" onClick={() => navigate("/")}>
            Home
          </span>{" "}
          / <span className="text-gray-700">Organizing Committee</span>
        </nav>

        {/* Title */}
        <h2 className="text-3xl font-bold text-green-700 mb-6">Organizing Committee</h2>

        {/* Committee Members Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {committeeMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 flex items-center transition-transform transform hover:scale-105">
              <img src={member.image} alt={member.name} className="w-30 h-30 rounded-full object-cover mr-4" />
              <div>
                <h3 className="text-lg font-semibold text-green-700">{member.name}</h3>
                <p className="">{member.role}</p>
                <p className="text-gray-500">{member.university}</p>
                <p className="text-gray-500">{member.country}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Committee List Section */}
        <div className="bg-white rounded-lg shadow-lg mt-10 p-6">
          {committeeList.map((section, index) => (
            <div key={index} className="mb-6 text-center">
              <h3 className="text-xl font-semibold text-green-700 mb-2">{section.title}</h3>
              <ul className="text-gray-600 text-lg">
                {section.members.map((member, idx) => (
                  <li key={idx} className="mb-1">{member}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Back Button */}
        <div className="text-center mt-8">
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 bg-green-700 text-white rounded-sm hover:bg-green-600 text-lg transition-transform transform hover:scale-105"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default FullCommittee;
