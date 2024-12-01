import React, { useState } from 'react';
import { Calendar, Plane, MapPin } from 'lucide-react';
import { format } from 'date-fns';

type Flight = {
  id: string;
  flightNumber: string;
  origin: string;
  destination: string;
  departureTime: string;
  arrivalTime: string;
  status: 'On Time' | 'Delayed' | 'Departed' | 'Arrived';
};

const SAMPLE_FLIGHTS: Flight[] = [
  {
    id: '1',
    flightNumber: 'AC1234',
    origin: 'New York (JFK)',
    destination: 'London (LHR)',
    departureTime: '2024-03-20T08:00:00',
    arrivalTime: '2024-03-20T20:00:00',
    status: 'On Time'
  },
  {
    id: '2',
    flightNumber: 'AC5678',
    origin: 'Dubai (DXB)',
    destination: 'Singapore (SIN)',
    departureTime: '2024-03-20T10:30:00',
    arrivalTime: '2024-03-20T22:30:00',
    status: 'Departed'
  }
];

export function FlightSchedule() {
  const [date] = useState(new Date());
  const [flights] = useState<Flight[]>(SAMPLE_FLIGHTS);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <Calendar className="h-6 w-6 text-sky-600 mr-2" />
          <h2 className="text-2xl font-bold text-gray-800">Flight Schedule</h2>
        </div>
        <div className="text-sm text-gray-500">
          {format(date, 'MMMM d, yyyy')}
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Flight
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Route
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Departure
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Arrival
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {flights.map((flight) => (
              <tr key={flight.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <Plane className="h-5 w-5 text-sky-600 mr-2" />
                    <span className="font-medium">{flight.flightNumber}</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 text-gray-400 mr-1" />
                    <span>{flight.origin}</span>
                    <span className="mx-2">→</span>
                    <MapPin className="h-4 w-4 text-gray-400 mr-1" />
                    <span>{flight.destination}</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {format(new Date(flight.departureTime), 'HH:mm')}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {format(new Date(flight.arrivalTime), 'HH:mm')}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                    ${flight.status === 'On Time' ? 'bg-green-100 text-green-800' : 
                      flight.status === 'Delayed' ? 'bg-red-100 text-red-800' : 
                      'bg-blue-100 text-blue-800'}`}>
                    {flight.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}