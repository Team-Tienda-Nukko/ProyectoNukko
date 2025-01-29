import React, { useState, useEffect } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/Firebase'; 

const Register: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [surname, setSurname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [username, setUsername] = useState<string | null>(
    typeof window !== "undefined" ? localStorage.getItem("username") : null
  );

  useEffect(() => {
    // Cargar el nombre de usuario desde localStorage al montar
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    if (!email || !password || !name || !surname) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Guardar el nombre de usuario en localStorage
      const username = `${name} ${surname}` || "User";
      localStorage.setItem("username", username);
      setUsername(username);

      alert(`Welcome, ${username}!`);
    } catch (err) {
      setError("Error creating account: " + err.message);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("username");
    setUsername(null);
    alert("You have logged out.");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow flex items-center justify-center">
        <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
          <h1 className="text-2xl font-semibold text-center mb-6">Create an account</h1>
          {error && <p className="text-red-500 text-center">{error}</p>}
          {username ? (
            <div className="text-center">
              <p className="text-lg mb-4">Welcome, {username}!</p>
              <button
                onClick={handleLogout}
                className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600"
              >
                Logout
              </button>
            </div>
          ) : (
            <form onSubmit={handleRegister}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 p-2 w-full border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="surname" className="block text-sm font-medium text-gray-700">Surname</label>
                <input
                  type="text"
                  id="surname"
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                  className="mt-1 p-2 w-full border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Enter your surname"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 p-2 w-full border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 p-2 w-full border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Enter your password"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition"
              >
                Create
              </button>
            </form>
          )}
          <div className="mt-4 text-center">
            <a href="#" className="text-sm text-blue-500 hover:underline">Return to principal page</a>
          </div>
        </div>
      </div>

      <footer className="pt-20 py-10">
        <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-6 text-center md:text-left">
          <div>
            <h2 className="font-bold mb-2">NUKKO®</h2>
            <p className="text-sm text-gray-600">
              Follow us on our social networks to stay up to date with all the news
            </p>
            <div className="flex justify-center md:justify-start gap-4 mt-4 text-lg">
              <a href="#">📷</a>
              <a href="#">📘</a>
              <a href="#">🎵</a>
              <a href="#">✖</a>
            </div>
          </div>
          <div>
            <h2 className="font-bold mb-2">POLICIES</h2>
            <ul className="text-sm text-gray-600 space-y-2">
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Shipping Policies</a></li>
              <li><a href="#" className="hover:underline">Legal Warning</a></li>
              <li><a href="#" className="hover:underline">Cookies Policy</a></li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold mb-2">AID</h2>
            <ul className="text-sm text-gray-600 space-y-2">
              <li><a href="#" className="hover:underline">Return</a></li>
              <li><a href="#" className="hover:underline">FAQ</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
              <li><a href="#" className="hover:underline">About Us</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Register;
