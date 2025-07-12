import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

export const Datacontext = createContext();

const DataContextProvider = (props) => {
  const [patients, setPatients] = useState([]);
  const [currentDate, setCurrentDate] = useState("");
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3001/patients");

      setPatients(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const datePicker = (date) => {
    const new_date = new Date(date);
    const formatted = new_date.toLocaleDateString("en-GB").replaceAll("/", "-");
    setCurrentDate(formatted);
  };

  useEffect(() => {
    fetchData();
    datePicker();
  }, []);

  const value = {
    patients,
    datePicker,
    currentDate,
  };

  return (
    <Datacontext.Provider value={value}>{props.children}</Datacontext.Provider>
  );
};

export default DataContextProvider;
