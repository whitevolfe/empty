import React from 'react';
import { Link } from 'react-router-dom';
import { Plane, Menu, X } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Plane className="h-8 w-8 text-sky-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">FitsCargo Express</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/services" className="text-gray-600 hover:text-sky-600">Air Services</Link>
            <Link to="/tracking" className="text-gray-600 hover:text-sky-600">Flight Tracking</Link>
            <Link to="/schedule" className="text-gray-600 hover:text-sky-600">Flight Schedule</Link>
            <Link to="/calculator" className="text-gray-600 hover:text-sky-600">Cargo Calculator</Link>
            <Link to="/quote" className="bg-sky-600 text-white px-4 py-2 rounded-md hover:bg-sky-700">
              Book Shipment
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/services"
              className="block px-3 py-2 text-gray-600 hover:text-sky-600"
              onClick={() => setIsOpen(false)}
            >
              Air Services
            </Link>
            <Link
              to="/tracking"
              className="block px-3 py-2 text-gray-600 hover:text-sky-600"
              onClick={() => setIsOpen(false)}
            >
              Flight Tracking
            </Link>
            <Link
              to="/schedule"
              className="block px-3 py-2 text-gray-600 hover:text-sky-600"
              onClick={() => setIsOpen(false)}
            >
              Flight Schedule
            </Link>
            <Link
              to="/calculator"
              className="block px-3 py-2 text-gray-600 hover:text-sky-600"
              onClick={() => setIsOpen(false)}
            >
              Cargo Calculator
            </Link>
            <Link
              to="/quote"
              className="block px-3 py-2 bg-sky-600 text-white rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Book Shipment
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}