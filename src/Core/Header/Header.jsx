import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDropdown = (menu) => {
    setDropdownOpen(dropdownOpen === menu ? null : menu);
  };

  const dropdownItems = {
    "About": ["Welcome Message", "New Release"],
    "Authors": ["Call for Paper", "Paper Submission", "Presentation", "Guidelines"],
    "List of Committee": ["Organizing Committee"],
    "Contact": ["Conference Venue", "Accommodation", "Transportation"],
  };

  return (
    <nav className="bg-green-700 text-white py-5 flex justify-center items-center relative">
      <div className="flex justify-between items-center max-w-[1300px] w-full mx-auto px-6">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <img src="/logo.png" alt="ISICAS 2025" className="h-10" />
          <span className="text-2xl font-semibold">ISICAS</span>
        </div>

        {/* Mobile Menu Button (Only visible on md and below) */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:space-x-8">
          {Object.keys(dropdownItems).map((menu, index) => (
            <div key={index} className="relative group">
              <button
                onClick={() => toggleDropdown(menu)}
                className="flex items-center hover:text-gray-300 transition text-lg"
              >
                {menu} <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {dropdownOpen === menu && (
                <ul className="absolute left-0 mt-2 bg-white text-black shadow-md rounded-md py-2 w-64 z-50">
                  {dropdownItems[menu].map((item, i) => (
                    <li key={i} className="px-4 py-2 hover:bg-gray-200">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
          <a
            href="#"
            className="border border-white px-6 py-2 rounded-full hover:bg-green-300 transition text-lg"
          >
            Registration
          </a>
        </div>

        {/* Mobile Sliding Menu */}
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-green-800 text-white flex flex-col items-center justify-center transition-transform transform ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          } md:hidden`}
        >
          {/* Close Button */}
          <button
            className="absolute top-5 right-5 text-white"
            onClick={() => setMenuOpen(false)}
          >
            <X className="w-8 h-8" />
          </button>

          <ul className="flex flex-col space-y-6 text-lg">
            {Object.keys(dropdownItems).map((menu, index) => (
              <li key={index} className="relative">
                <button
                  onClick={() => toggleDropdown(menu)}
                  className="flex items-center hover:text-gray-300 transition"
                >
                  {menu} <ChevronDown className="ml-1 w-4 h-4" />
                </button>
                {dropdownOpen === menu && (
                  <ul className="absolute left-0 mt-2 bg-white text-black shadow-md rounded-md py-2 w-64">
                    {dropdownItems[menu].map((item, i) => (
                      <li key={i} className="px-4 py-2 hover:bg-gray-200">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* Registration Button (Mobile) */}
          <a
            href="#"
            className="mt-6 border border-white px-6 py-2 rounded-full hover:bg-green-300 transition"
          >
            Registration
          </a>
        </div>
      </div>
    </nav>
  );
}
