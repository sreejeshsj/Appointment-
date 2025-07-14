import React, { useContext, useEffect, useState } from "react";
import { Datacontext } from "../context/DataContext";
import axios from "axios";
import { toast } from "react-toastify";

function Appointment() {
  const { doctors, patients, appointment,navigate,token } = useContext(Datacontext);
  const [selectPatient, setSelectPatient] = useState("");
  const [selectUserAge, setSelectUserAge] = useState(0);
  const [selectDepartment, setSelectDepartment] = useState("");
  const [selectDoctor, setSelectDoctor] = useState("");
  const [selectDate, setSelectDate] = useState("");
  const [selectSlot, setSelectSlot] = useState(0);

  const [BookedSlots, setBookedSlots] = useState([]);

  const allSlots = [1, 2, 3, 4];
  const today = new Date().toISOString().split("T")[0];
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newId =
        appointment.length > 0
          ? Number(appointment[appointment.length - 1].id) + 1
          : 1;
      const response = await axios.post("http://localhost:3001/appointments", {
        id: newId,
        name: selectPatient,
        age: selectUserAge,
        appointedDoctor: selectDoctor,
        department: selectDepartment,
        slot: Number(selectSlot),
        date: selectDate.split("-").reverse().join("-"),
      });

      toast.success("Slot Booked Successfully")
      navigate('/calenderpanel')
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const fd = appointment.filter(
      (item) =>
        item.date === selectDate.split("-").reverse().join("-") &&
        item.appointedDoctor === selectDoctor
    );
    console.log(fd);
    fd.map((item) => setBookedSlots((prev) => [...prev, item.slot]));
  }, [selectDate, selectDoctor]);

  const availableSlots = allSlots.filter((slot) => !BookedSlots.includes(slot));
  console.log(availableSlots);
  return (
    <div className="flex justify-center mt-10 px-4">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center  w-[90%] md:w-[50%] bg-neutral-400 border rounded p-6"
      >
        <div className="flex flex-col gap-6 w-full max-w-md mx-auto">
          <h3 className="text-gray-600 font-bold text-lg text-center">
            Appointment
          </h3>

          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 w-full">
            <label htmlFor="patient" className="sm:w-[120px] font-medium">
              Patient
            </label>
            <select
              onChange={(e) => {
                setSelectPatient(e.target.value);
                const selected = patients.find(
                  (p) => p.name === e.target.value
                );
                if (selected) setSelectUserAge(selected.age);
              }}
              className="w-full p-2 border rounded"
              required
            >
              <option value="">Select Patient</option>
              {patients.map((item, index) => (
                <option key={index} value={item.name}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 w-full">
            <label htmlFor="doctor" className="sm:w-[120px] font-medium">
              Doctor
            </label>
            <select
              onChange={(e) => {
                setSelectDoctor(e.target.value);
                const selected = doctors.find((d) => d.name === e.target.value);
                if (selected) setSelectDepartment(selected.department);
              }}
              className="w-full p-2 border rounded"
              required
            >
              <option value="">Select Doctor</option>
              {doctors.map((item, index) => (
                <option key={index} value={item.name}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 w-full">
            <label
              htmlFor="appointmentDate"
              className="sm:w-[120px] font-medium"
            >
              Date
            </label>
            <input
              min={today}
              onChange={(e) => setSelectDate(e.target.value)}
              type="date"
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 w-full">
            <label htmlFor="slot" className="sm:w-[120px] font-medium">
              Slot
            </label>
            <select
              onChange={(e) => setSelectSlot(e.target.value)}
              className="w-full p-2 border rounded"
              required
            >
              <option value="">Select Slot</option>
              {availableSlots.map((slot, index) => (
                <option key={index} value={slot}>
                  Slot {slot}
                </option>
              ))}
            </select>
          </div>
        </div>
        <button type="submit" className="text-white bg-black w-28 py-3 mt-4 ">
          Submit
        </button>
      </form>
    </div>
  );
  

}

export default Appointment;
