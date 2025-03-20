import { FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full bg-green-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-16 flex justify-between items-center flex-col gap-8 lg:flex-row">
          <a href="/" className="flex justify-center text-white">
            {/* Add your logo or brand name here */}AABC
          </a>
          <ul className="text-lg text-center sm:flex items-center justify-center gap-14 lg:gap-10 xl:gap-14 transition-all duration-500">
            <li><a href="/pagedone" className="text-white hover:text-gray-300">Pagedone</a></li>
            <li className="sm:my-0 my-2"><a href="/products" className="text-white hover:text-gray-300">Products</a></li>
            <li><a href="/resources" className="text-white hover:text-gray-300">Resources</a></li>
            <li className="sm:my-0 my-2"><a href="/blog" className="text-white hover:text-gray-300">Blog</a></li>
            <li><a href="/support" className="text-white hover:text-gray-300">Support</a></li>
          </ul>
          <div className="flex space-x-4 sm:justify-center">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-green-900 flex justify-center items-center hover:bg-green-700">
              <FaTwitter className="w-5 h-5 text-white" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-green-900 flex justify-center items-center hover:bg-green-700">
              <FaInstagram className="w-5 h-5 text-white" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-green-900 flex justify-center items-center hover:bg-green-700">
              <FaLinkedin className="w-5 h-5 text-white" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-green-900 flex justify-center items-center hover:bg-green-700">
              <FaYoutube className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>
        <div className="py-7 border-t border-green-700">
          <div className="flex items-center justify-center">
            <span className="text-white">
              © <a href="" className="hover:text-green-300">pagedone</a> 2024, All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;