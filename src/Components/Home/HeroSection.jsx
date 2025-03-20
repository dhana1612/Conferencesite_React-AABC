import React from 'react';

export default function HeroSection() {
  return (
    <section className="bg-green-700 px-5">
      <div className="max-w-7xl mx-auto flex flex-col items-center py-10">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-white text-4xl lg:text-5xl font-bold py-5">
              IEEE International Symposium on Integrated Circuits and Systems
            </h1>
            <p className="text-white text-lg lg:text-xl pb-5">
              October 24-26, 2025, Qingdao, China <br />
              Venue in the Heart of Qingdao (Hyatt Regency)
            </p>
            <button className="border border-white px-6 py-3 rounded-full text-white bg-green-300 hover:bg-green-700 transition text-lg md:text-xl">
              Welcome Message
            </button>
          </div>
          <div className="flex justify-center">
            <img
              src="https://2025.ieee-isicas.org/Hyatt-Regency.jpg"
              alt="Venue"
              className="rounded-lg w-full max-w-md lg:max-w-lg object-cover"
            />
          </div>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 pt-16">
          <img
            src="https://2025.ieee-isicas.org/Hyatt-Regency.jpg"
            alt="Hyatt Regency 1"
            className="w-full h-52 object-cover rounded-lg"
          />
          <img
            src="https://2025.ieee-isicas.org/Hyatt-Regency2.webp"
            alt="Hyatt Regency 2"
            className="w-full h-52 object-cover rounded-lg"
          />
          <img
            src="https://2025.ieee-isicas.org/Hyatt-Regency3.webp"
            alt="Hyatt Regency 3"
            className="w-full h-52 object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
