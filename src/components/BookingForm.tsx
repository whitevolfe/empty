import React, { useState } from 'react';
import { Package, Calendar, MapPin, Info } from 'lucide-react';

type CargoType = 'General' | 'Perishable' | 'Dangerous' | 'Valuable';

export function BookingForm() {
  const [formData, setFormData] = useState({
    shipmentDate: '',
    origin: '',
    destination: '',
    cargoType: '' as CargoType,
    description: '',
    specialInstructions: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement booking logic here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-6">
        <Package className="h-6 w-6 text-sky-600 mr-2" />
        <h2 className="text-2xl font-bold text-gray-800">Book Shipment</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              <div className="flex items-center mb-1">
                <Calendar className="h-4 w-4 mr-1" />
                Shipment Date
              </div>
            </label>
            <input
              type="date"
              name="shipmentDate"
              value={formData.shipmentDate}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              <div className="flex items-center mb-1">
                <MapPin className="h-4 w-4 mr-1" />
                Origin
              </div>
            </label>
            <input
              type="text"
              name="origin"
              value={formData.origin}
              onChange={handleChange}
              placeholder="City, Country"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              <div className="flex items-center mb-1">
                <MapPin className="h-4 w-4 mr-1" />
                Destination
              </div>
            </label>
            <input
              type="text"
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              placeholder="City, Country"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              <div className="flex items-center mb-1">
                <Package className="h-4 w-4 mr-1" />
                Cargo Type
              </div>
            </label>
            <select
              name="cargoType"
              value={formData.cargoType}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500"
            >
              <option value="">Select cargo type</option>
              <option value="General">General Cargo</option>
              <option value="Perishable">Perishable Goods</option>
              <option value="Dangerous">Dangerous Goods</option>
              <option value="Valuable">Valuable Cargo</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            <div className="flex items-center mb-1">
              <Info className="h-4 w-4 mr-1" />
              Cargo Description
            </div>
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={3}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500"
            placeholder="Please provide details about your cargo"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Special Instructions
          </label>
          <textarea
            name="specialInstructions"
            value={formData.specialInstructions}
            onChange={handleChange}
            rows={2}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500"
            placeholder="Any special handling requirements?"
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
          >
            Submit Booking
          </button>
        </div>
      </form>
    </div>
  );
}