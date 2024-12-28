import { Github, Twitter, Youtube, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          {/* Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-indigo-600">
                TanStack Tutorial
              </h3>
              <p className="text-sm text-gray-600">
                Learn TanStack Query with practical examples and best practices.
                Master CRUD operations, caching, pagination, and more.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://github.com"
                  className="text-gray-500 hover:text-indigo-600"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://twitter.com"
                  className="text-gray-500 hover:text-indigo-600"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="https://youtube.com"
                  className="text-gray-500 hover:text-indigo-600"
                >
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-4">
                Quick Links
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#crud"
                    className="text-sm text-gray-600 hover:text-indigo-600"
                  >
                    CRUD Examples
                  </a>
                </li>
                <li>
                  <a
                    href="#pagination"
                    className="text-sm text-gray-600 hover:text-indigo-600"
                  >
                    Pagination
                  </a>
                </li>
                <li>
                  <a
                    href="#infinite"
                    className="text-sm text-gray-600 hover:text-indigo-600"
                  >
                    Infinite Scroll
                  </a>
                </li>
                <li>
                  <a
                    href="#cache"
                    className="text-sm text-gray-600 hover:text-indigo-600"
                  >
                    Cache Management
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-4">
                Resources
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#docs"
                    className="text-sm text-gray-600 hover:text-indigo-600"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="#guides"
                    className="text-sm text-gray-600 hover:text-indigo-600"
                  >
                    API Reference
                  </a>
                </li>
                <li>
                  <a
                    href="#examples"
                    className="text-sm text-gray-600 hover:text-indigo-600"
                  >
                    Example Code
                  </a>
                </li>
                <li>
                  <a
                    href="#blog"
                    className="text-sm text-gray-600 hover:text-indigo-600"
                  >
                    Blog Posts
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-4">
                Stay Updated
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Subscribe to our newsletter for the latest updates and
                tutorials.
              </p>
              <div className="space-y-3">
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                  <button className="px-4 py-2 bg-indigo-600 text-white rounded-r-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    <Mail className="h-5 w-5" />
                  </button>
                </div>
                <p className="text-xs text-gray-500">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-gray-500">
                © {new Date().getFullYear()} TanStack Tutorial. All rights
                reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a
                  href="#privacy"
                  className="text-sm text-gray-500 hover:text-indigo-600"
                >
                  Privacy Policy
                </a>
                <a
                  href="#terms"
                  className="text-sm text-gray-500 hover:text-indigo-600"
                >
                  Terms of Service
                </a>
                <a
                  href="#contact"
                  className="text-sm text-gray-500 hover:text-indigo-600"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
