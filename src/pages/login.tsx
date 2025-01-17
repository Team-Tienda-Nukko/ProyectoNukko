import React, { useState } from "react";


const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {

    event.preventDefault();
    setError(null);

    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    // Simula un inicio de sesión básico
    if (email === "admin@example.com" && password === "password123") {
      alert("Login successful!");
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded shadow-md">
        <h1 className="text-2xl font-bold text-center mb-4">Login</h1>
        {error && (
          <div className="mb-4 text-sm text-red-500 border border-red-500 rounded p-2">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full mt-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full mt-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Login
          </button>
        </form>
      </div>
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      alert(`Welcome ${user.displayName}!`);
      // Puedes redirigir al usuario aquí si es necesario
      // window.location.href = "/home";
    } catch (err) {
      setError("Failed to sign in with Google.");
    }
  };

  return (
    <div className="bg-gray-50 font-sans min-h-screen">
      <Head>
        <title>Login Page</title>
      </Head>
      <main className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md p-6 bg-white rounded shadow-md">
          <h1 className="text-2xl font-bold text-center mb-4">Log in</h1>
          {error && (
            <div className="mb-4 text-sm text-red-500 border border-red-500 rounded p-2">
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
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
              Check In
            </button>
          </form>
          <div className="mt-4 text-center">
            <button
              onClick={handleGoogleSignIn}
              className="w-full bg-red-500 text-white py-3 rounded hover:bg-red-600"
            >
              Sign in with Google
            </button>
          </div>
          <p className="mt-4 text-center text-sm">
            <a href="#" className="text-blue-500 hover:underline">
              Return to principal page
            </a>
          </p>
        </div>
      </main>
    </div>
  );
};

export default Login;
