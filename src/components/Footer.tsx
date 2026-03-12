import { Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const Footer = () => {
    const handleBlogClick = () => {
    toast("Blog section coming soon!", {
        icon: "📢",
    });
  };
  return (
    <footer className="w-full bg-white mt-16">

      {/* Top Divider */}
      <div className="max-w-[1120px] mx-auto border-t border-blue-200 mb-16"></div>

      {/* Main Footer */}
      <div className="max-w-[1120px] mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-12 pb-16">

        {/* LEFT SIDE */}
        <div>

          <h2 className="font-dmsans font-bold text-[32px] md:text-[48px] leading-[100%]">
            Ready<span className="text-green-500">GO.</span>
          </h2>

          <p className="font-dmsans font-normal text-[12px] md:text-[18px] leading-[100%] text-gray-600 mt-3">
            Turning ideas into digital success.
          </p>

          <p className="font-dmsans font-normal text-[12px] md:text-[18px] leading-[100%] text-gray-600 mt-3">
            Follow Us On :
          </p>

          <div className="mt-4">
            <a
              href="https://instagram.com/readygo_solutions"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-white border rounded-full shadow-sm hover:bg-pink-500 hover:text-white transition"
            >
              <Instagram size={18} />
            </a>
          </div>

        </div>


        {/* RIGHT NAVIGATION */}
        <ul className="flex flex-col md:flex-row gap-24 font-dmsans font-medium text-[20px] leading-[100%] tracking-[0%] text-gray-700">

            <Link to="/">
                <li className="cursor-pointer hover:text-green-500 transition">
                    Home
                </li>
            </Link>

            <Link to="/about">
                <li className="cursor-pointer hover:text-green-500 transition">
                    About Us
                </li>
            </Link>

            <Link to="/services">
                <li className="cursor-pointer hover:text-green-500 transition">
                    Services
                </li>
            </Link>

          <li
          onClick={handleBlogClick} 
          className="cursor-pointer hover:text-green-500 transition">
            Blog
          </li>

        </ul>

      </div>


      {/* Bottom Bar */}
      <div className="bg-[#4E7BD9] text-white text-sm">

        <div className="max-w-[1120px] mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center">

          <p>
            © 2026 ReadyGo Solutions. All rights reserved.
          </p>

          <div className="flex gap-3 mt-2 md:mt-0">

            {/* <span className="cursor-pointer hover:underline">
              Privacy Policy
            </span>

            <span>|</span>

            <span className="cursor-pointer hover:underline">
              Website Terms
            </span> */}

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;