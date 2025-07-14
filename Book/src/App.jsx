import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import { ToastContainer } from 'react-toastify';
import Navbar from './components/Navbar';
import Home from './components/Home';
import CalenderPanel from './components/CalenderPanel';
import Appointment from './components/Appointment';
import EditForm from './components/EditForm';
import Footer from './components/Footer';
import About from './components/About';

function App() {
  return (
    // Wrap the entire layout in a full-height flex column
    <div className="min-h-screen flex flex-col">
      <ToastContainer />
      <Navbar />

      {/* Main content takes all available space */}
      <main className="flex-grow px-4 sm:px-[5vw] md:px-[17vw] lg:px-[9vw]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calenderpanel" element={<CalenderPanel />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/login" element={<Login />} />
          <Route path="/edit-form/:id" element={<EditForm />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
