import React from "react";

const Register = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow flex items-center justify-center">
        <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
          <h1 className="text-2xl font-semibold text-center mb-6">Create an account</h1>
          <p className="text-center text-sm text-gray-600 mb-4">
            Already have an account?{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Sign up here.
            </a>
          </p>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 p-2 w-full border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter your name"
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
                className="mt-1 p-2 w-full border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter your surname"
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
                className="mt-1 p-2 w-full border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter your email"
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
          <div className="mt-4 text-center">
            <a href="" className="text-sm text-blue-500 hover:underline">
              Return to principal page
            </a>
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
