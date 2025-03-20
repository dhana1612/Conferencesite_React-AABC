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
    "Program": ["Program At a Glance", "Student design Competition","Predoctoral forum","WiCAs-yp Program"],
    "Authors": ["Call for Paper", "Paper Submission","Presentation", "Gudieliness"],
    "List of Committee": ["Organizing Committee"],
    "Contact": ["Conference Venue", "Accomadation", "Transportation"],
  };

  return (
    <nav className="bg-green-700 text-white px-6 py-5 flex justify-center items-center relative">
      <div className="flex justify-between items-center space-x-5 max-w-[900] gap-20 ">
        {/* Logo */}
        <div className="flex items-center gap-20">
          <img src="/logo.png" alt="ISICAS 2025" className="h-10" />
          <span className="text-3xl font-semibold">ISICAS</span>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Navigation Links */}
        <div
          className={`fixed top-0 left-0 h-full bg-green-800 text-white flex flex-col items-center justify-center transform transition-transform ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          } md:relative md:translate-x-0 md:flex md:flex-row md:bg-transparent md:h-auto md:p-0`}
        >
          <button
            className="absolute top-5 right-5 text-white md:hidden"
            onClick={() => setMenuOpen(false)}
          >
            <X className="w-8 h-8" />
          </button>
          <ul className="flex flex-col items-center space-y-6 md:flex-row md:space-y-0 md:space-x-6">
            {Object.keys(dropdownItems).map((menu, index) => (
              <li key={index} className="relative">
                <button
                  onClick={() => toggleDropdown(menu)}
                  className="flex items-center hover:text-gray-300 transition text-2xl md:text-base"
                >
                  {menu} <ChevronDown className="ml-1 w-4 h-4" />
                </button>
                {dropdownOpen === menu && (
                  <ul className="absolute left-0 mt-2 bg-white z-30 text-black shadow-md rounded-md py-2 w-60">
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

          {/* Registration Button (Visible on mobile and desktop) */}
          <a
            href="#"
            className="mt-6 md:mt-0 border mx-5 border-white-2 px-4 py-1 rounded-full hover:bg-white hover:text-green-700 transition text-2xl md:text-base"
          >
            Registration
          </a>
        </div>
      </div>
    </nav>
  );
}