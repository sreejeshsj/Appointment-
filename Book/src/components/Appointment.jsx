import React, { useContext } from "react";
import { Datacontext } from "../context/DataContext";

function Appointment() {
  const { doctors, patients } = useContext(Datacontext);
  return (
    <div className="flex items-center w-[100%] justify-center h-screen">
      <form className="flex items-center  mt-100 justify-center w-[90%] md:w-[50%] h-[50%]   bg-neutral-400 border rounded ">
        <div className="flex flex-col gap-4 items-center w-[400px]">
            <h3 className="text-gray-600 font-bold">Appointment</h3>
          <div className="flex flex-col sm:flex-row gap-2 w-full sm:gap-8">
            
            <p className='mb-2'>PatientName</p>

            <select className="w-full p-2 border rounded">
              {patients.map((item, index) => (
                <option key={index} value={item.name}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 w-full sm:gap-8">
            <p className='mb-2'>DoctorName</p>
            <select className="w-full p-2 border rounded">
              {doctors.map((item, index) => (
                <option value={item.name}>{item.name}</option>
              ))}
            </select>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Appointment;
