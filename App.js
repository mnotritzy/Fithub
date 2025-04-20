import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Home() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Anywhere Gym 🏋️‍♂️</h1>
      <Link to="/gyms" className="text-blue-500 underline">Browse Gyms</Link>
    </div>
  );
}

function Gyms() {
  return (
    <div className="p-8">
      <h2 className="text-xl font-semibold">Available Gyms Near You</h2>
      <div className="mt-4">📍 FitZone | ₹200/day <button className="ml-2 text-white bg-blue-500 px-2 py-1 rounded">Book Now</button></div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gyms" element={<Gyms />} />
      </Routes>
    </Router>
  );
}

export default App;
