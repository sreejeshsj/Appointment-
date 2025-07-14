import React, { useContext, useState } from 'react'
import assets from '../assets/assets'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { Datacontext } from '../context/DataContext'

function About() {
  const [selectedDate, setSelectedDate] = useState(null)
  const {navigate}=useContext(Datacontext)
  return (
    <div className='flex flex-col items-center justify-center w-full gap-4 bg-gray-100 py-6'>
      
      {/* Top Image Section */}
      <div className='w-full bg-gray-300'>
        <img className='w-full' src={assets.about} alt="About Section" />
      </div>

      {/* Cards Grid */}
      <div className='grid w-[90%] grid-rows-4 gap-4 sm:grid-cols-4'>

        {/* Working Time Card */}
        <div className='bg-blue-800 text-white border border-blue-300 rounded-lg flex flex-col gap-3 justify-center items-center h-[220px] p-4'>
          <p className='text-lg font-semibold'>Pick Slots</p>
          
          

          <div onClick={()=>navigate('appointment')}  className='flex gap-2 flex-wrap justify-center'>
            <button className='bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded'>10-11</button>
            <button className='bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded'>11-12</button>
            <button className='bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded'>2-3</button>
            <button className='bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded'>3-4</button>
          </div>
        </div>

        {/* Contact Card */}
        <div className='bg-white text-gray-800 border border-gray-300 rounded-lg p-4 shadow-sm'>
          <p className='text-lg font-semibold'>Contact</p>
          <p className='text-sm mt-2'>📞 +91 9876543210</p>
          <p className='text-sm'>✉️ contact@example.com</p>
        </div>

        {/* Emergency Case Card */}
        <div className='bg-red-100 text-red-800 border border-red-300 rounded-lg p-4 shadow-sm'>
          <p className='text-lg font-semibold'>Emergency Case</p>
          <p className='text-sm mt-2'>Call 24/7: 108 or 112</p>
        </div>

        {/* Achievement Card */}
        <div className='bg-green-100 text-green-900 border border-green-300 rounded-lg p-4 shadow-sm'>
          <p className='text-lg font-semibold'>Achievements</p>
          <ul className='list-disc list-inside text-sm mt-2'>
            <li>1000+ Surgeries</li>
            <li>Top 10 Hospital 2024</li>
            <li>ISO Certified</li>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default About
