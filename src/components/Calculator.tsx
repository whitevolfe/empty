import React, { useState } from 'react';
import { Calculator as CalcIcon } from 'lucide-react';

export const Calculator = () => {
  const [dimensions, setDimensions] = useState({
    length: '',
    width: '',
    height: '',
    weight: ''
  });
  const [rate, setRate] = useState<number | null>(null); // State to hold the calculated rate
  const [error, setError] = useState<string | null>(null); // State to hold any error messages

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate input
    if (!dimensions.length || !dimensions.width || !dimensions.height || !dimensions.weight) {
      setError('Please fill in all fields.');
      return;
    }

    // Calculate rate based on dimensions (example logic)
    const calculatedRate = calculateRate(dimensions); // Add your rate calculation logic here
    setRate(calculatedRate);
    setError(null); // Clear any previous errors
  };

  // Example function to calculate rate (replace with your actual logic)
  const calculateRate = (dimensions: { length: string; width: string; height: string; weight: string }) => {
    // Example calculation logic (replace with your actual formula)
    const length = parseFloat(dimensions.length);
    const width = parseFloat(dimensions.width);
    const height = parseFloat(dimensions.height);
    const weight = parseFloat(dimensions.weight);
    
    // Simple example: rate could be based on volume and weight
    return (length * width * height * weight) / 1000; // Adjust the formula as needed
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <CalcIcon className="h-6 w-6 text-sky-600 mr-2" />
        <h2 className="text-2xl font-bold text-gray-800">Cargo Calculator</h2>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="length" className="block text-sm font-medium text-gray-700">
              Length (cm)
            </label>
            <input
              type="number"
              id="length"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              value={dimensions.length}
              onChange={(e) => setDimensions({ ...dimensions, length: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="width" className="block text-sm font-medium text-gray-700">
              Width (cm)
            </label>
            <input
              type="number"
              id="width"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              value={dimensions.width}
              onChange={(e) => setDimensions({ ...dimensions, width: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="height" className="block text-sm font-medium text-gray-700">
              Height (cm)
            </label>
            <input
              type="number"
              id="height"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              value={dimensions.height}
              onChange={(e) => setDimensions({ ...dimensions, height: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="weight" className="block text-sm font-medium text-gray-700">
              Weight (kg)
            </label>
            <input
              type="number"
              id="weight"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              value={dimensions.weight}
              onChange={(e) => setDimensions({ ...dimensions, weight: e.target.value })}
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
        >
          Calculate Rate
        </button>
      </form>
      {error && <p className="mt-4 text-red-500">{error}</p>}
      {rate !== null && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Calculated Rate:</h3>
          <p className="text-xl text-gray-800">{rate}</p>
        </div>
      )}
    </div>
  );
};