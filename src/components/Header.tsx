import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/ReadyGO.-removebg-preview.png";
import { Link, useLocation } from "react-router-dom";
import toast from "react-hot-toast";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const handleBlogClick = () => {
    toast("Blog section coming soon!", {
        icon: "📢",
    });
  };

  const isActive = (path: string) =>
    location.pathname === path ? "text-green-500" : "hover:text-green-500";

  return (
    <header className="w-full absolute top-0 left-0 z-50 bg-transparent backdrop-blur-sm">

      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-24 flex items-center justify-between relative">

        <Link to="/">
          <img
            src={logo}
            alt="ReadyGO Logo"
            className="w-[140px] md:w-[180px] lg:w-[220px] xl:w-[260px] h-auto object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10 text-gray-700 font-medium">

          <Link to="/">
            <li className={`${isActive("/")} cursor-pointer`}>
              Home
            </li>
          </Link>

            <Link to="/about">
                <li className={`${isActive("/about")} cursor-pointer`}>
                About Us
                </li>
            </Link>

            <Link to="/services">
                <li className="hover:text-green-500 cursor-pointer">
                    Services
                </li>
            </Link>

            <li 
                onClick={handleBlogClick}
                className="hover:text-green-500 cursor-pointer">
                Blog
            </li>

        </ul>

        {/* Desktop Button */}
        <Link to="/contact">
          <button className="hidden md:block bg-black text-white px-5 py-2 rounded-lg">
            Contact Us
          </button>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden backdrop-blur-md bg-white/30 border-t border-gray-200 shadow-lg">

          <ul className="flex flex-col px-6 py-5 gap-5 text-gray-700 font-medium">

            <Link to="/">
              <li className={`${isActive("/")}`}>
                Home
              </li>
            </Link>

            <Link to="/about">
              <li className={`${isActive("/about")}`}>
                About Us
              </li>
            </Link>

            <Link to="/services">
                <li>Services</li>
            </Link>
            <li onClick={handleBlogClick}>Blog</li>

            <Link to="/contact">
              <button className="bg-black text-white py-2 rounded-lg">
                Contact Us
              </button>
            </Link>

          </ul>

        </div>
      )}
    </header>
  );
};

export default Header;