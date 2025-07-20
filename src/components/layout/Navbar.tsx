import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart, Phone, Mail } from 'lucide-react';
import { useQuote } from '../../contexts/QuoteContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { getQuoteCount } = useQuote();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Bar - Hidden on mobile */}
      <div className="bg-gray-800 text-white py-2 hidden sm:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Phone className="h-4 w-4" />
                <span className="hidden lg:inline">+92-42-123-4567</span>
                <span className="lg:hidden">Call Us</span>
              </div>
              <div className="flex items-center space-x-1">
                <Mail className="h-4 w-4" />
                <span className="hidden lg:inline">info@thebrokencolumn.com</span>
                <span className="lg:hidden">Email</span>
              </div>
            </div>
            <div className="hidden lg:block">
              <span>Crafting Excellence in Textiles Since 1985</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link to="/" className="flex-shrink-0">
              <span className="text-xl sm:text-2xl font-bold text-gray-800">
                TheBrokenColumn
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'text-gray-700 border-b-2 border-gray-700'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Quote Cart */}
            <Link
              to="/request-quote"
              className="relative p-2 text-gray-700 hover:text-gray-800 transition-colors"
            >
              <ShoppingCart className="h-5 w-5 sm:h-6 sm:w-6" />
              {getQuoteCount() > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full text-xs h-4 w-4 sm:h-5 sm:w-5 flex items-center justify-center">
                  {getQuoteCount()}
                </span>
              )}
            </Link>
            
            {/* Request Quote Button - Hidden on small screens, shown on medium+ */}
            <Link
              to="/request-quote"
              className="hidden md:inline-block bg-gray-700 text-white px-3 py-2 lg:px-4 lg:py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
            >
              <span className="lg:hidden">Quote</span>
              <span className="hidden lg:inline">Request Quote</span>
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="px-4 pt-2 pb-3 space-y-1 bg-white border-t shadow-lg">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`block px-3 py-3 text-base font-medium transition-colors rounded-lg ${
                isActive(item.href)
                  ? 'text-gray-800 bg-gray-100 border-l-4 border-gray-700'
                  : 'text-gray-700 hover:text-gray-800 hover:bg-gray-50'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          
          {/* Mobile Request Quote Button */}
          <Link
            to="/request-quote"
            className="block px-3 py-3 mt-4 text-base font-medium bg-gray-700 text-white rounded-lg text-center hover:bg-gray-800 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Request Quote
          </Link>
          
          {/* Mobile Contact Info */}
          <div className="pt-4 mt-4 border-t border-gray-200">
            <div className="px-3 py-2 text-sm text-gray-600 space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+92-42-123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@thebrokencolumn.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;