import { FaYoutube, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 px-8 flex flex-col md:flex-row justify-between items-center">
      <div>
        <h2 className="text-lg font-bold">InternLoom</h2>
        <p className="text-sm text-gray-400">Connecting Students and Companies</p>
        <p className="text-sm text-gray-500 mt-1">© 2025 InternLoom. All rights reserved.</p>
      </div>

      <div className="text-center md:text-left mt-4 md:mt-0">
        <p className="text-sm font-semibold">Founded by Jeevan Reddy</p>
        <p className="text-sm text-gray-400">Contact us: +91 9347239080</p>
      </div>

      <div className="flex space-x-4 mt-4 md:mt-0">
        <FaYoutube className="text-white text-xl cursor-pointer hover:text-gray-400" />
        <FaLinkedin className="text-white text-xl cursor-pointer hover:text-gray-400" />
        <FaInstagram className="text-white text-xl cursor-pointer hover:text-gray-400" />
      </div>
    </footer>
  );
};

export default Footer;
