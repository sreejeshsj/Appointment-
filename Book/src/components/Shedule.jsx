import React, { useContext, useEffect, useState } from "react";
import { Datacontext } from "../context/DataContext";

function Shedule() {
  const { patients, currentDate } = useContext(Datacontext);
  const [data, setData] = useState([]);
  // const [checkDay,setCheckDay]=useState(()=>{
  //   let today=new Date()
  //   return today.toISOString().split("T")[0]
  // })

  const filterPatients = () => {
    const fb = patients.filter((item) => item.date === currentDate);
    setData(fb);
  };
  useEffect(() => {
    filterPatients();
  }, [patients, currentDate]);

  return (
    <div className="p-4">
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="border px-4 py-2 text-left">Name</th>
              <th className="border px-4 py-2 text-left">Age</th>
              <th className="border px-4 py-2 text-left">Appointed Doctor</th>
              <th className="border px-4 py-2 text-left">Department</th>
              <th className="border px-4 py-2 text-left">Slot</th>
              <th className="border px-4 py-2 text-left">Edit</th>
              <th className="border px-4 py-2 text-left">Cancel</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="border px-4 py-2">{item.name}</td>
                <td className="border px-4 py-2">{item.age}</td>
                <td className="border px-4 py-2">{item.appointedDoctor}</td>
                <td className="border px-4 py-2">{item.department}</td>
                <td className="border px-4 py-2">{item.slot}</td>
                <td className="border px-4 py-2">
                  <button className="border px-3 py-1 rounded bg-blue-500 text-white hover:bg-blue-600">
                    Edit
                  </button>
                </td>
                <td className="border px-4 py-2 text-red-600 cursor-pointer">
                  X
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="md:hidden flex flex-col gap-4">
        {data.map((item, index) => (
          <div key={index} className="border rounded-xl shadow p-4">
            <p>
              <span className="font-semibold">Name:</span> {item.name}
            </p>
            <p>
              <span className="font-semibold">Age:</span> {item.age}
            </p>
            <p>
              <span className="font-semibold">Doctor:</span>{" "}
              {item.appointedDoctor}
            </p>
            <p>
              <span className="font-semibold">Department:</span>{" "}
              {item.department}
            </p>
            <p>
              <span className="font-semibold">Slot:</span> {item.slot}
            </p>
            <div className="flex gap-4 mt-3">
              <button className="border px-3 py-1 rounded bg-blue-500 text-white hover:bg-blue-600">
                Edit
              </button>
              <button className="text-red-600 hover:underline">Cancel</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shedule;
