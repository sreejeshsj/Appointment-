import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Datacontext } from "../context/DataContext";

function EditForm() {
  const { patients, doctors, setAppointments } = useContext(Datacontext);
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    age: "",
    appointedDoctor: "",
    department: "",
    date: "",
    slot: "",
  });

  // Fetch appointment data by ID
  useEffect(() => {
    axios.get(`http://localhost:3001/appointments/${id}`)
      .then((res) => {
        const data = res.data;
        setForm({
          name: data.name,
          age: data.age,
          appointedDoctor: data.appointedDoctor,
          department: data.department,
          date: data.date.split("-").reverse().join("-"), // DD-MM-YYYY → YYYY-MM-DD
          slot: data.slot,
        });
      });
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updated = {
      ...form,
      id: Number(id),
      date: form.date.split("-").reverse().join("-"), // back to DD-MM-YYYY
      slot: Number(form.slot),
    };

    // Update in backend
    await axios.put(`http://localhost:3001/appointments/${id}`, updated);

    // Update in global context
    setAppointments((prev) =>
      prev.map((item) => (item.id === updated.id ? updated : item))
    );

    alert("Updated!");
    navigate("/calenderpanel");
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Edit Appointment</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        
        {/* 👤 Patient dropdown */}
        <select
          value={form.name}
          onChange={(e) => {
            const selectedName = e.target.value;
            const selectedPatient = patients.find((p) => p.name === selectedName);
            setForm((prev) => ({
              ...prev,
              name: selectedName,
              age: selectedPatient?.age || "",
            }));
          }}
          className="w-full p-2 border rounded"
          required
        >
          <option value="">Select Patient</option>
          {patients.map((p) => (
            <option key={p.id} value={p.name}>{p.name}</option>
          ))}
        </select>

        {/* 🩺 Doctor dropdown */}
        <select
          value={form.appointedDoctor}
          onChange={(e) => {
            const selectedDoctorName = e.target.value;
            const selectedDoctor = doctors.find((d) => d.name === selectedDoctorName);
            setForm((prev) => ({
              ...prev,
              appointedDoctor: selectedDoctorName,
              department: selectedDoctor?.department || "",
            }));
          }}
          className="w-full p-2 border rounded"
          required
        >
          <option value="">Select Doctor</option>
          {doctors.map((d) => (
            <option key={d.id} value={d.name}>{d.name}</option>
          ))}
        </select>

        {/* 📅 Date */}
        <input
          type="date"
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
          className="w-full p-2 border rounded"
          required
        />

        {/* 🕓 Slot */}
        <select
          value={form.slot}
          onChange={(e) => setForm({ ...form, slot: e.target.value })}
          className="w-full p-2 border rounded"
          required
        >
          <option value="">Select Slot</option>
          <option value="1">Slot 1</option>
          <option value="2">Slot 2</option>
          <option value="3">Slot 3</option>
          <option value="4">Slot 4</option>
        </select>

        <button type="submit" className="bg-black text-white px-4 py-2 rounded">
          Update
        </button>
      </form>
    </div>
  );
}

export default EditForm;
