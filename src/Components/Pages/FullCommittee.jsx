import React from "react";
import { useNavigate } from "react-router-dom";

const committeeMembers = [
  {
    name: "Yongfu Li",
    role: "General Co-Chair",
    university: "Shanghai JiaoTong University",
    country: "China",
    image: "/comm8.jpg",
  },
  {
    name: "Weisheng Zhao",
    role: "General Co-Chair",
    university: "Beihang University",
    country: "China",
    image: "/comm8.jpg",
  },
  {
    name: "Mohd Sawan",
    role: "General Co-Chair",
    university: "Westlake University",
    country: "China",
    image: "/comm8.jpg",
  },
];

const committeeList = [
  {
    title: "General Co-Chairs",
    members: [
      "Yongfu Li, Shanghai Jiao Tong University, China",
      "Weisheng Zhao, Beihang University, China",
      "Mohd Sawan, Westlake University, China",
    ],
  },
  {
    title: "Technical Program Co-Chairs",
    members: [
      "Chao Wang, Huazhong University of Science and Technology, China",
      "Xinfei Guo, Shanghai Jiao Tong University, China",
      "Xinmiao Zhang, Ohio State University, USA",
      "Antonio Liscidini, University of Toronto, Canada",
      "Alex James, Digital University Kerala, India",
      "Arindam Basu, City University of Hong Kong, Hong Kong",
      "Jae-Sun Seo, Cornell Tech, USA",
    ],
  },
  {
    title: "Financial Co-Chairs",
    members: [
      "Wei Mao, Xidian University, China",
      "Kian Ann Ng, Singapore Institute of Technology, Singapore",
    ],
  },
  {
    title: "Publicity Co-Chairs",
    members: [
      "Liang Qi, Shanghai Jiao Tong University, China",
      "Sijun Du, Delft University of Technology, Netherlands",
    ],
  },
  {
    title: "Local Arrangement Co-Chairs",
    members: [
      "Deming Zhang, Beihang University, China",
      "Yueting Li, Beihang University, China",
    ],
  },
  {
    title: "DEI Co-Chairs",
    members: [
      "Yanan Sun, Shanghai Jiao Tong University, China",
      "Yuhang Zhang, East China Normal University, China",
      "Yu Wu, University College London, China",
    ],
  },
  {
    title: "Sponsorship Co-Chairs",
    members: [
      "Xinsheng Wang, Harbin Institute of Technology, China",
      "Wenning Jiang, Fudan University, China",
    ],
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
        <h2 className="text-3xl font-bold text-green-700 mb-6">Organizing Committee</h2>

        {/* Committee Members Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {committeeMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 flex items-center">
              <img src={member.image} alt={member.name} className="w-30 h-30 rounded-full object-cover mr-4" />
              <div>
                <h3 className="text-lg font-semibold text-green-700">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
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
              <h3 className="text-lg font-bold text-green-700 mb-2">{section.title}</h3>
              <ul className="text-gray-600">
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
