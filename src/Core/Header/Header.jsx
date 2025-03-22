import { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState(null);

  const toggleDropdown = (menu) => {
    setDropdownOpen(dropdownOpen === menu ? null : menu);
  };

  // Handle hover with a delay for closing the dropdown
  const handleMouseEnter = (menu) => {
    if (hoverTimeout) clearTimeout(hoverTimeout);
    setDropdownOpen(menu);
  };

  const handleMouseLeave = () => {
    // Add a delay before closing the dropdown
    const timeout = setTimeout(() => {
      setDropdownOpen(null);
    }, 200); // 200ms delay
    setHoverTimeout(timeout);
  };

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        isScrolled ? "bg-[#3A6A4A] shadow-md" : "bg-[#528F62]"
      } text-white py-5 flex justify-center items-center sticky top-0 z-50 transition-colors duration-300`}
    >
      <div className="flex justify-between items-center max-w-[1300px] w-full mx-auto px-6">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <Link to="/">
          <img src="img/logo.png" alt="ISICAS 2025" className="h-15" />
          </Link>
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

          {/* Home */}
          <Link
            to="/"
            className="hover:text-gray-300 transition text-lg"
          >
            Home
          </Link>

          {/* About Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => handleMouseEnter("About")}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() => toggleDropdown("About")}
              className="flex items-center hover:text-gray-300 transition text-lg"
            >
              About <ChevronDown className="ml-1 w-4 h-4" />
            </button>
            {dropdownOpen === "About" && (
              <ul
                className="absolute left-0 mt-2 bg-white text-black shadow-md rounded-md py-2 w-64 z-50"
                onMouseEnter={() => handleMouseEnter("About")} // Keep dropdown open when hovering over it
                onMouseLeave={handleMouseLeave}
              >
                <li className="px-4 py-2 hover:bg-gray-200">
                  <Link to="/welcome-message">Welcome Message</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-200">
                  <Link to="/full-committee">Organizing Committee</Link>
                </li>
                {/* <li className="px-4 py-2 hover:bg-gray-200">
                  <Link to="/speakers">Speakers</Link>
                </li> */}
              </ul>
            )}
          </div>

          {/* Authors Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => handleMouseEnter("Authors")}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() => toggleDropdown("Authors")}
              className="flex items-center hover:text-gray-300 transition text-lg"
            >
              Authors <ChevronDown className="ml-1 w-4 h-4" />
            </button>
            {dropdownOpen === "Authors" && (
              <ul
                className="absolute left-0 mt-2 bg-white text-black shadow-md rounded-md py-2 w-64 z-50"
                onMouseEnter={() => handleMouseEnter("Authors")}
                onMouseLeave={handleMouseLeave}
              >
                <li className="px-4 py-2 hover:bg-gray-200">
                  <Link to="/registration">Registration Details</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-200">
                  <Link to="/paper-submit">Paper Submission</Link>
                </li>
              </ul>
            )}
          </div>

          {/* Contact */}
          <Link
            to="/contact"
            className="hover:text-gray-300 transition text-lg"
          >
            Contact
          </Link>

          {/* Registration Button */}
          <Link
            to="/registration"
            className="border border-white px-6 py-2 rounded-full hover:bg-green-300 transition text-lg"
          >
            Registration
          </Link>
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
            {/* About Dropdown (Mobile) */}
            <li className="relative">
              <button
                onClick={() => toggleDropdown("About")}
                className="flex items-center hover:text-gray-300 transition"
              >
                About <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {dropdownOpen === "About" && (
                <ul className="absolute left-0 mt-2 bg-white text-black shadow-md rounded-md py-2 w-64">
                  <li className="px-4 py-2 hover:bg-gray-200">
                    <Link to="/welcome-message">Welcome Message</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200">
                    <Link to="/new-release">New Release</Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Authors Dropdown (Mobile) */}
            <li className="relative">
              <button
                onClick={() => toggleDropdown("Authors")}
                className="flex items-center hover:text-gray-300 transition"
              >
                Authors <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {dropdownOpen === "Authors" && (
                <ul className="absolute left-0 mt-2 bg-white text-black shadow-md rounded-md py-2 w-64">
                  <li className="px-4 py-2 hover:bg-gray-200">
                    <Link to="/call-for-paper">Call for Paper</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200">
                    <Link to="/paper-submission">Paper Submission</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200">
                    <Link to="/presentation">Presentation</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200">
                    <Link to="/guidelines">Guidelines</Link>
                  </li>
                </ul>
              )}
            </li>

            {/* List of Committee Dropdown (Mobile) */}
            <li className="relative">
              <button
                onClick={() => toggleDropdown("List of Committee")}
                className="flex items-center hover:text-gray-300 transition"
              >
                List of Committee <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {dropdownOpen === "List of Committee" && (
                <ul className="absolute left-0 mt-2 bg-white text-black shadow-md rounded-md py-2 w-64">
                  <li className="px-4 py-2 hover:bg-gray-200">
                    <Link to="/organizing-committee">Organizing Committee</Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Contact Dropdown (Mobile) */}
            <li className="relative">
              <button
                onClick={() => toggleDropdown("Contact")}
                className="flex items-center hover:text-gray-300 transition"
              >
                Contact <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {dropdownOpen === "Contact" && (
                <ul className="absolute left-0 mt-2 bg-white text-black shadow-md rounded-md py-2 w-64">
                  <li className="px-4 py-2 hover:bg-gray-200">
                    <Link to="/conference-venue">Conference Venue</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200">
                    <Link to="/accommodation">Accommodation</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200">
                    <Link to="/transportation">Transportation</Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>

          {/* Registration Button (Mobile) */}
          <Link
            to="/registration"
            className="mt-6 border border-white px-6 py-2 rounded-full hover:bg-green-300 transition"
          >
            Registration
          </Link>
        </div>
      </div>
    </nav>
  );
}