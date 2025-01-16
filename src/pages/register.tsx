import { useState } from "react";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data: ", form);
    // Aquí puedes agregar la lógica para enviar los datos a un backend
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4">Create an account</h1>
        <p className="text-center text-gray-600 mb-6">
          Already have an account? <a href="/login" className="text-blue-500">Sign in here</a>.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="surname" className="block text-sm font-medium text-gray-700">
              Surname
            </label>
            <input
              type="text"
              id="surname"
              name="surname"
              value={form.surname}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Create
          </button>
        </form>
        <button
          onClick={() => window.location.href = "/"}
          className="w-full mt-4 bg-gray-200 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-300 transition duration-200"
        >
          Return to principal page
        </button>
      </div>
      <footer className="bg-gray-100 py-10">
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
          <div>
            <h2 className="font-bold mb-2">News</h2>
            <p className="text-sm text-gray-600">
              Sign up to our Newsletter and get a 10% discount on your first order.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Register;