
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import DataContextProvider from "./context/DataContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <DataContextProvider>
      <App />
    </DataContextProvider>
  </BrowserRouter>
);
