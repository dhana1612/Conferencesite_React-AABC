import React from "react";

const speakers = [
  {
    name: "Dr. John Doe",
    title: "Professor, MIT",
    image: "public/comm8.jpg",
    bio: "Expert in AI and Integrated Circuits with 20+ years of experience.",
  },
  {
    name: "Dr. Jane Smith",
    title: "CTO, TechCorp",
    image: "public/comm8.jpg",
    bio: "Leading semiconductor researcher revolutionizing chip design.",
  },
  {
    name: "Prof. Alan Turing",
    title: "AI Researcher, Oxford",
    image: "public/comm8.jpg",
    bio: "Pioneer in cryptography and AI algorithms.",
  },
  {
    name: "Dr. Ada Lovelace",
    title: "Computer Scientist",
    image: "public/comm8.jpg",
    bio: "Early innovator in computing and mathematical logic.",
  },
];

export default function Speakers() {
  return (
    <section className="bg-gray-100 py-16 px-5">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900">Speakers</h2>
        <p className="text-lg text-gray-600 mt-3">
          Meet the world’s leading experts in AI and semiconductor technology.
        </p>

        {/* Speaker Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          {speakers.map((speaker, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 transition-transform hover:shadow-xl">
              <img
                src={speaker.image}
                alt={speaker.name}
                className="w-full h-64 object-cover rounded-lg"
              />
              <h3 className="text-xl font-semibold text-gray-900 mt-4">{speaker.name}</h3>
              <p className="text-green-700 font-medium">{speaker.title}</p>
              <p className="text-gray-600 mt-2 text-sm">{speaker.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}