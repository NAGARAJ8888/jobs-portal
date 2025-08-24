"use client";

import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { UserContext } from "../context/UserContext";

export default function page() {
  const router = useRouter();
  const { setUser } = useContext(UserContext);
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
      credentials: "include",
    });

    const data = await res.json();

    if (res.ok) {
      setUser(data.user);
      router.push("/"); // redirect to home
    } else {
      setMessage(data.error || "Login failed");
    }
  } catch (err) {
    setMessage("Network error");
  }
};



  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-96 space-y-4"
      >
        <h2 className="text-2xl font-bold text-center">Login</h2>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
          required
        />

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 cursor-pointer"
        >
          Login
        </button>

        {message && <p className="text-center text-sm text-red-500">{message}</p>}
      </form>
    </div>
  );
}
