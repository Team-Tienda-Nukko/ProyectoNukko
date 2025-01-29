import React, { useState, useEffect } from "react";
import { GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/Firebase";

const provider = new GoogleAuthProvider();

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [username, setUsername] = useState<string | null>(
    typeof window !== "undefined" ? localStorage.getItem("username") : null
  );

  useEffect(() => {
    // Load the username from localStorage on mount
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Save username to localStorage
      const username = user.email || "User";
      localStorage.setItem("username", username);
      setUsername(username);

      alert(`Welcome, ${username}!`);
    } catch (err) {
      setError("Invalid email or password.");
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Save username to localStorage
      const username = user.displayName || "User";
      localStorage.setItem("username", username);
      setUsername(username);

      alert(`Welcome, ${username}!`);
    } catch (err) {
      setError("Failed to sign in with Google.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("username");
    setUsername(null);
    alert("You have logged out.");
  };

  return (
    <div className="w-full h-full bg-white p-8 flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold text-center mb-8">Log in</h1>
      {username ? (
        <div className="text-center">
          <p className="text-lg mb-4">Welcome, {username}!</p>
          <button
            onClick={handleLogout}
            className="w-full max-w-md bg-red-500 text-white py-3 rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      ) : (
        <>
          {error && (
            <div className="mb-4 text-sm text-red-500 border border-red-500 rounded p-2">
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
            <input
              type="email"
              placeholder="Email"
              required
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              required
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="text-right">
              <a href="#" className="text-sm text-blue-500 hover:underline">
                Forgot your password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded hover:bg-gray-800"
            >
              Log In
            </button>
          </form>
          <div className="mt-6 w-full max-w-md">
            <button
              onClick={handleGoogleSignIn}
              className="w-full bg-red-500 text-white py-3 rounded hover:bg-red-600"
            >
              Sign in with Google
            </button>
          </div>
        </>
      )}
      <p className="mt-6 text-center text-sm">
        <a href="#" className="text-blue-500 hover:underline">
          Return to principal page
        </a>
      </p>
    </div>
  );
};

export default Login;
