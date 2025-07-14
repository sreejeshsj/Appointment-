import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    
    if (email === "staff@clinic.com" && password === "123456") {
      toast.success("Login successful!")
      navigate("/calenderpanel");
      localStorage.setItem('token',"token123") 
    } else {
      toast.error("Invalid Credentials")
      navigate("/login");
    }
    setEmail("")
    setPassword("")
  };

  return (
    <div className="flex justify-center mt-10 px-4">
      <form
        onSubmit={handleLogin}
        className="flex flex-col items-center justify-center w-[90%] md:w-[40%] bg-gray-100 border rounded p-6"
      >
        <h3 className="text-gray-700 font-bold text-lg mb-4 text-center">
          Clinic Staff Login
        </h3>

        <div className="flex flex-col gap-4 w-full max-w-sm">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="p-2 border rounded"
            required
          />

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="p-2 border rounded"
            required
          />

          <button
            type="submit"
            className="bg-black text-white py-2 rounded hover:opacity-90"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;

