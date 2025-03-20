import React from "react";
import { useNavigate } from "react-router-dom";

const WelcomeMessage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-5xl mx-auto px-4">
        {/* Breadcrumb Navigation */}
        <nav className="text-green-600 mb-4">
          <span className="cursor-pointer hover:underline" onClick={() => navigate("/")}>
            Home
          </span>{" "}
          / <span className="text-gray-700">Welcome Message from General Chairs</span>
        </nav>

        {/* Title */}
        <h2 className="text-2xl font-bold text-green-700 mb-6">
          Welcome Message from General Chairs
        </h2>

        {/* Message Box */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <p className="text-gray-700 leading-7 mb-4">
            Dear Colleagues and Friends,
          </p>
          <p className="text-gray-700 leading-7 mb-4">
            We are delighted to extend a cordial invitation to you for the 2025 IEEE International Symposium on Integrated Circuits and Systems (ISICAS 2025). This prestigious event will be held from <strong>October 24th to 26th, 2025</strong>, at the Hyatt Regency Hotel in the vibrant coastal city of Qingdao, China.
          </p>
          <p className="text-gray-700 leading-7 mb-4">
            Qingdao, a city with a population of approximately 10 million, is not only a highlight of Shandong Province but also a significant hub for the IC and electronics industry, home to more than 3600 companies including Haier, Hisense, and GoerTek. We are honored to have received support from many of these leading companies for ISICAS 2025.
          </p>
          <p className="text-gray-700 leading-7 mb-4">
            Shandong Province, with a population of over 100 million, is a cradle of Chinese civilization and a center of economic growth, contributing significantly to China's development with a GDP of CNY 92068.7 billion in 2023, showing a robust 6% growth. Qingdao, as the economic powerhouse of the province, boasts a GDP of CNY 7978.67 billion in the first half of 2024, reflecting a strong 5.8% growth.
          </p>
          <p className="text-gray-700 leading-7 mb-4">
            The city is renowned for its Tsingtao Beer and the International Beer Festival, which adds to its vibrant cultural scene. Its coastal scenery, beautiful parks, and historic German architecture make it a popular destination for travelers and a delightful setting for our symposium.
          </p>
          <p className="text-gray-700 leading-7 mb-4">
            The theme for ISICAS 2025 will focus on the latest advancements in integrated circuits and systems, with the theme <strong>"Advances in Integrated Circuits and Systems: Bridging the Gap between Design and Implementation"</strong>. We encourage submissions that provide experimental results and insights into current trends and challenges in the field.
          </p>
          <p className="text-gray-700 leading-7 mb-4">
            Researchers, engineers, and students from academia, industry, and government agencies are invited to share their latest work and engage in fruitful discussions on integrated circuits and systems implementations. We anticipate a gathering of professionals and scholars from around the world, ensuring a meaningful and enriching experience for all attendees.
          </p>
          <p className="text-gray-700 leading-7 mb-4">
            Authors will need to submit their articles and being accepted in the special issues/sections of TCAS-I, TCAS-II, TBioCAS, and OJCAS. It is the first time that we are in the process of inviting the IEEE Transactions on Very Large-Scale Integration (TVLSI) and the new IEEE Transactions on Circuits and Systems for Artificial Intelligence (TCASAI) to participate in this event. We also welcome extended versions of recent conference papers that contain significant additional material.
          </p>
          <p className="text-gray-700 leading-7 mb-4">
            Your participation is invaluable, and we are confident that ISICAS 2025 will be a memorable and productive event. We would like to express our sincere gratitude to the members of the ISICAS 2025 Organizing Committee for their dedication and hard work in making this symposium a success.
          </p>
          <p className="text-gray-700 leading-7 mb-4">
            We look forward to seeing you in Qingdao, where we will enjoy not only excellent weather but also a symposium filled with intellectual and cultural experiences.
          </p>

          {/* Signature */}
          <p className="font-semibold text-gray-900 mt-6">
            Yongfu Li, Weisheng Zhao, and Mohamad Sawan
          </p>
          <p className="font-semibold text-gray-700">General Co-Chairs, ISICAS 2025</p>
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

export default WelcomeMessage;
