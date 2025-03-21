import React from "react";

export default function KeyDates() {
  const keyDates = [
    { date: "June 15, 2025", event: "Paper Submission Deadline" },
    { date: "August 1, 2025", event: "Notification of Acceptance" },
    { date: "September 10, 2025", event: "Camera-Ready Submission" },
    { date: "October 1, 2025", event: "Early Registration Deadline" },
    { date: "October 24-26, 2025", event: "Conference Dates" },
  ];

  return (
    <section className="bg-gray-100 px-5 py-10 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
          Key Dates
        </h2>

        {/* Smooth Scrolling Container */}
        <div className="relative w-full overflow-hidden">
          <div className="flex space-x-10 animate-marquee">
            {[...keyDates, ...keyDates].map((item, index) => ( // Duplicating list for seamless looping
              <div
                key={index}
                className="flex-shrink-0 bg-white shadow-lg px-6 py-4 rounded-lg border border-gray-200 w-64 text-center"
              >
                <p className="text-green-700 font-semibold text-lg">{item.date}</p>
                <p className="text-gray-800 text-xl font-medium">{item.event}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tailwind CSS Animation for Continuous Scrolling */}
      <style>
        {`
          @keyframes marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); } /* Moves half because of duplication */
          }

          .animate-marquee {
            display: flex;
            animation: marquee 15s linear infinite;
            width: max-content;
          }
        `}
      </style>
    </section>
  );
}