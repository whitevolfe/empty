import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrackingTool } from './components/TrackingTool';
import { Calculator } from './components/Calculator';
import { FlightSchedule } from './components/FlightSchedule';
import { BookingForm } from './components/BookingForm';
import { Services } from './components/Services';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="pt-16">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/tracking" element={
              <div className="max-w-2xl mx-auto px-4 py-8">
                <TrackingTool />
              </div>
            } />
            <Route path="/calculator" element={
              <div className="max-w-2xl mx-auto px-4 py-8">
                <Calculator />
              </div>
            } />
            <Route path="/schedule" element={
              <div className="max-w-7xl mx-auto px-4 py-8">
                <FlightSchedule />
              </div>
            } />
            <Route path="/quote" element={
              <div className="max-w-2xl mx-auto px-4 py-8">
                <BookingForm />
              </div>
            } />
            <Route path="/services" element={<Services />} />
          </Routes>
        </div>
        <footer className="bg-gray-800 text-white py-4">
          <div className="max-w-7xl mx-auto text-center">
            <p>&copy; {new Date().getFullYear()} FitsCargo. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;