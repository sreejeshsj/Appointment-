import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-10">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
        
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold">📍 HealthyCare Clinic</h2>
          <p className="text-sm">123 Wellness St, Palakkad, Kerala</p>
          <p className="text-sm">Phone: +91 98765 43210</p>
          <p className="text-sm">Email: care@healthyclinic.com</p>
        </div>

        
        <div className="mt-4 md:mt-0 text-center md:text-right">
          <p className="text-sm mb-1">Quick Links:</p>
          <div className="flex gap-4 justify-center md:justify-end">
            <a href="/" className="hover:underline text-sm">Home</a>
            <a href="/appointments" className="hover:underline text-sm">Appointments</a>
            <a href="/about" className="hover:underline text-sm">About</a>
            <a href="/contact" className="hover:underline text-sm">Contact</a>
          </div>
        </div>
      </div>

      
      <div className="bg-gray-900 text-center py-2 text-sm">
        © {new Date().getFullYear()} HealthyCare Clinic. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
