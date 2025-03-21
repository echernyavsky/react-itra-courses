import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiFilm, FiUser, FiLogIn } from "react-icons/fi";
import routes from "../shared/constants/routes.ts";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [{ name: "Home", path: routes.HOME }];

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 px-6 transition-all duration-300 md:px-10 ${
        scrolled ? "bg-white py-3 shadow-md" : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Logo */}
        <Link
          to={routes.HOME}
          className="flex items-center gap-2 transition-opacity duration-300 hover:opacity-80"
        >
          <FiFilm className="h-6 w-6 text-green-600" />
          <span className="text-xl font-semibold text-gray-900">Cinematic</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden space-x-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`relative py-2 transition-colors duration-300 ${
                location.pathname === item.path
                  ? "font-semibold text-green-600"
                  : "text-gray-700 hover:text-green-600"
              }`}
            >
              {item.name}
              {location.pathname === item.path && (
                <span className="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-green-600" />
              )}
            </Link>
          ))}
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-3">
          {/* Authentication Buttons */}
          <div className="hidden items-center gap-2 md:flex">
            <Link
              to={routes.LOGIN}
              className="flex items-center gap-1.5 px-4 py-2 text-gray-700 hover:text-green-600"
            >
              <FiLogIn className="h-4 w-4" />
              Log in
            </Link>
            <Link
              to={routes.SIGN_UP}
              className="flex items-center gap-1.5 rounded-md bg-green-600 px-4 py-2 text-white transition hover:bg-green-700"
            >
              <FiUser className="h-4 w-4" />
              Sign up
            </Link>
          </div>

          {/* Mobile Menu (Optional) */}
          <div className="md:hidden">
            {/* You can add a dropdown menu here if needed */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
