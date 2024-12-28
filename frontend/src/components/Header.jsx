import { Search, Bell, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link to={"."} className="text-xl font-bold text-indigo-600">
              TanStack Tutorial
            </Link>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex space-x-8">
            <Link
              to="add-user"
              className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium"
            >
              Add User
            </Link>
            <a
              href="#pagination"
              className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium"
            >
              Pagination
            </a>
            <a
              href="#infinite"
              className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium"
            >
              Infinite Scroll
            </a>
            <Link
              to="users"
              className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium"
            >
              All User
            </Link>
          </nav>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>

            {/* Notification Bell */}
            <button className="p-2 text-gray-600 hover:text-indigo-600 rounded-lg">
              <Bell className="h-6 w-6" />
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-gray-600 hover:text-indigo-600 rounded-lg"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-2">
              <Link
                to="add-user"
                className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Add User
              </Link>
              <a
                href="#pagination"
                className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Pagination
              </a>
              <a
                href="#infinite"
                className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Infinite Scroll
              </a>
              <Link
                to="users"
                className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                All users
              </Link>
              <div className="pt-2">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
