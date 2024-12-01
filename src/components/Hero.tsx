import { ArrowRight, Plane, Globe, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Global Air Cargo</span>
                <span className="block text-sky-600">Swift & Secure</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Experience premium air cargo services with real-time flight tracking, AI-powered scheduling, and worldwide coverage. Your cargo's journey starts here.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link
                    to="/quote"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 md:py-4 md:text-lg md:px-10"
                  >
                    Book Shipment
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link
                    to="/tracking"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-sky-600 bg-sky-100 hover:bg-sky-200 md:py-4 md:text-lg md:px-10"
                  >
                    Track Flight
                  </Link>
                </div>
              </div>
            </div>
          </main>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3 lg:mt-16">
            <div className="flex items-center space-x-3">
              <Plane className="h-8 w-8 text-sky-600" />
              <div>
                <h3 className="text-lg font-medium">Global Network</h3>
                <p className="text-sm text-gray-500">200+ destinations</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Clock className="h-8 w-8 text-sky-600" />
              <div>
                <h3 className="text-lg font-medium">Express Delivery</h3>
                <p className="text-sm text-gray-500">24/7 operations</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Globe className="h-8 w-8 text-sky-600" />
              <div>
                <h3 className="text-lg font-medium">Live Tracking</h3>
                <p className="text-sm text-gray-500">Real-time updates</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://media.istockphoto.com/id/1027833750/photo/loading-cargo-picture-in-a-blue-toning.jpg?s=612x612&w=0&k=20&c=9YuMO7wDGHBxqKnq7IcvDDZulTCoU3SAEnsQdxO8avo="
          alt="Air cargo plane"
        />
      </div>
    </div>
  );
}