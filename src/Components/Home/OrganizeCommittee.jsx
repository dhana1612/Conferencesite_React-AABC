import React from "react";
import { useNavigate } from "react-router-dom";

const committeeMembers = [
  {
    name: "Yongfu Li",
    role: "General Co-Chair",
    university: "Shanghai Jiao Tong University",
    country: "China",
    image: "img/comm8.jpg", // Replace with the correct image path
  },
  {
    name: "Weisheng Zhao",
    role: "General Co-Chair",
    university: "Beihang University",
    country: "China",
    image: "img/comm8.jpg", // Replace with the correct image path
  },
  {
    name: "Mohd Sawan",
    role: "General Co-Chair",
    university: "Westlake University",
    country: "China",
    image: "img/comm8.jpg", // Replace with the correct image path
  },
];

const OrganizingCommittee = () => {
  const navigate = useNavigate();

  return (
    <section className="py-10">
      <div className="w-full xl:w-[90%] 2xl:w-[65%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">
            ORGANIZING COMMITTEE
          </h2>
          <div className="border-t-2 border-green-700 w-16 mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {committeeMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-30 lg:h-30 rounded-full object-cover mb-4 sm:mb-0 sm:mr-4"
              />
              <div>
                <h3 className="text-lg font-semibold text-green-700">
                  {member.name}
                </h3>
                <p className="text-gray-600">{member.role}</p>
                <p className="text-gray-500">{member.university}</p>
                <p className="text-gray-500">{member.country}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          <button
            onClick={() => navigate("/full-committee")}
            className="text-green-600 hover:underline text-lg font-medium"
          >
            View the full list of Organizing Committee
          </button>
        </div>
      </div>
    </section>
  );
};

export default OrganizingCommittee;