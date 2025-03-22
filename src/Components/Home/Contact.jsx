import { MapPin, Phone, Mail, Globe } from "lucide-react";

export default function Contact() {
  return (
    <section className="bg-gray-100" id="contact">
    <div className=" py-12 px-6 md:px-20 w-full lg:w-[70%] mx-auto">
      {/* Heading with Underline */}
      <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">
            CONTACT
          </h2>
          <div className="border-t-2 border-green-700 w-16 mx-auto mb-8"></div> 
        </div>

      {/* Card Section */}
      <div className="grid md:grid-cols-2 gap-8 mt-8">
        {/* Left Section */}
        <div className="border-t-4 border-b-4 border-green-500 p-6 shadow-md rounded-md">
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-green-700 flex items-center">
              <Globe className="mr-2 text-green-500" /> About Arrow Thought
            </h3>
            <p className="text-gray-600 text-lg">
              The Hyatt Regency brand is a global collection of hotels and resorts found in more
              than 200 locations across 40+ countries. A place where everyone is welcome and anything is possible.
            </p>
            <a href="#" className="text-green-500 font-semibold mt-2 inline-block">Read More</a>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold text-green-700 flex items-center">
              <MapPin className="mr-2 text-green-500" /> Location
            </h3>
            <p className="text-gray-600 text-lg">Hyatt Regency, 88 Donghai East Road, Qingdao, China, 266061</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-green-700 flex items-center">
              <Phone className="mr-2 text-green-500" /> Call
            </h3>
            <p className="text-gray-600 text-lg">+86 53286121234</p>
          </div>

          {/* Google Map */}
          <div className="mt-6">
            <iframe
              className="w-full h-48 rounded-md"
              src="https://www.google.com/maps?q=Hyatt+Regency+Qingdao&output=embed"
              loading="lazy"
              title="Hyatt Regency Map"
            ></iframe>
          </div>
        </div>

        {/* Right Section */}
        <div className="border-t-4 border-b-4 border-green-500 p-6 shadow-md rounded-md">
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-green-700 flex items-center">
              <Globe className="mr-2 text-green-500" /> Visa Requirement
            </h3>
            <p className="text-gray-600 text-lg">
              Multiple policies help foreigners enter China. If your country is in the 
              <a href="#" className="text-green-500 font-semibold"> list of agreements</a> for visa exemption, 
              you don't need a visa. Otherwise, check <a href="#" className="text-green-500 font-semibold">this link</a>.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold text-green-700 flex items-center">
              <Globe className="mr-2 text-green-500" /> Transportation
            </h3>
            <p className="text-gray-600 text-lg">
              Qingdao has an efficient public transport system. Learn more via
              <a href="#" className="text-green-500 font-semibold"> this link</a>.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-green-700 flex items-center">
              <Mail className="mr-2 text-green-500" /> Inquiry Email
            </h3>
            <p className="text-gray-600 text-lg">isicas2025@outlook.com</p>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}