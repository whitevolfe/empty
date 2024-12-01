import React, { useState } from 'react';
import { Search, Plane } from 'lucide-react';

// Define the FlightDetails interface
interface FlightDetails {
  airline: {
    name: string;
  };
  flight: {
    iataNumber: string;
  };
  departure: {
    iataCode: string;
    scheduledTime: string;
  };
  arrival: {
    iataCode: string;
    scheduledTime: string;
  };
}

export function TrackingTool() {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [flightDetails, setFlightDetails] = useState<FlightDetails | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!trackingNumber) {
      setError('Please enter a valid Air Waybill Number (AWB).');
      return;
    }

    try {
      setError(null); // Clear previous errors

      // Using Aviation Edge API with a sample key
      const response = await fetch(
        `https://aviation-edge.com/v2/public/flights?key=demo&flightIata=${trackingNumber}`
      );

      if (!response.ok) {
        throw new Error('Failed to fetch flight details.');
      }

      const data = await response.json();
      if (data.length > 0) {
        setFlightDetails(data[0]); // Assuming first result matches
      } else {
        setError('No flight details found.');
      }
    } catch (error) {
      console.error(error);
      setError('Unable to fetch flight details. Please try again.');
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <Plane className="h-6 w-6 text-sky-600 mr-2" />
        <h2 className="text-2xl font-bold text-gray-800">Flight Tracking</h2>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="tracking" className="block text-sm font-medium text-gray-700">
            Enter Air Waybill Number (AWB)
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <input
              type="text"
              id="tracking"
              className="focus:ring-sky-500 focus:border-sky-500 block w-full pl-4 pr-12 sm:text-sm border-gray-300 rounded-md"
              placeholder="123-45678901"
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
        >
          Track Shipment
        </button>
      </form>
      {error && <p className="mt-4 text-red-500">{error}</p>}
      {flightDetails && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Flight Details:</h3>
          <p className="text-gray-800">
            Airline: {flightDetails.airline.name}<br />
            Flight Number: {flightDetails.flight.iataNumber}<br />
            Departure: {flightDetails.departure.iataCode} ({flightDetails.departure.scheduledTime})<br />
            Arrival: {flightDetails.arrival.iataCode} ({flightDetails.arrival.scheduledTime})
          </p>
        </div>
      )}
    </div>
  );
}
