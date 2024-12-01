import React from 'react';
import { Plane, Package, Clock, Shield, Globe, Truck } from 'lucide-react';

const services = [
  {
    icon: Plane,
    title: 'Air Freight',
    description: 'Express air cargo services to over 200 destinations worldwide with real-time tracking and guaranteed delivery times.'
  },
  {
    icon: Package,
    title: 'Specialized Cargo',
    description: 'Expert handling of perishables, dangerous goods, and valuable cargo with temperature-controlled storage.'
  },
  {
    icon: Clock,
    title: 'Express Services',
    description: '24/7 express delivery options for time-critical shipments with priority handling and customs clearance.'
  },
  {
    icon: Shield,
    title: 'Secure Transport',
    description: 'Enhanced security measures for high-value cargo with insurance coverage and dedicated handling.'
  },
  {
    icon: Globe,
    title: 'Global Network',
    description: 'Extensive network of partners and facilities ensuring seamless cargo movement across continents.'
  },
  {
    icon: Truck,
    title: 'Door-to-Door',
    description: 'Complete logistics solutions including pickup and last-mile delivery services.'
  }
];

export function Services() {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Air Cargo Services
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Comprehensive air freight solutions tailored to your needs
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-sky-500 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <div>
                    <span className="rounded-lg inline-flex p-3 bg-sky-50 text-sky-600 ring-4 ring-white">
                      <IconComponent className="h-6 w-6" />
                    </span>
                  </div>
                  <div className="mt-8">
                    <h3 className="text-lg font-medium">
                      <span className="absolute inset-0" aria-hidden="true" />
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-500">
                      {service.description}
                    </p>
                  </div>
                  <div className="mt-6">
                    <a href="#" className="text-sm font-medium text-sky-600 hover:text-sky-500">
                      Learn more →
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}