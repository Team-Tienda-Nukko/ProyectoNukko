// src/components/Layout.tsx
import { useRouter } from "next/router";
import useAuth from "../hooks/useAuth";
import Link from 'next/link'; 

const Layout = ({ children }) => {
  const { user } = useAuth(); // Obtiene el usuario desde el hook
  const router = useRouter();

  const handleCheckout = () => {
    if (!user) {
      // Si el usuario no está autenticado, redirige al login
      router.push("/login");
    } else {
      // Si el usuario está autenticado, procede con el checkout
      // Aquí puedes manejar la lógica del carrito o checkout
    }
  };

  return (
    <>
      <header className="py-6 md:py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="md:w-1/3">
              <nav className="flex items-center justify-start space-x-3 md:space-x-6">
                <a className="text-gray-800 hover:text-blue-600 p-1 transition" href="/about">
                  About
                </a>
                <a className="text-gray-800 hover:text-blue-600 p-1 transition" href="/terms-of-sale">
                  Terms of Sale
                </a>
              </nav>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <a className="flex items-center text-gray-900" href="/">
                <div className="rounded-full w-12 h-12 flex items-center justify-center mr-4">
                  {/* Logo aquí */}
                </div>
                <span className="text-lg font-medium">Nukko</span>
              </a>
            </div>

            <div className="md:w-1/3 flex items-center justify-end space-x-3 -mr-2.5">
              <Link href="/login">
                <button
                  className="snipcart-customer-signin appearance-none px-2 text-gray-800 hover:text-blue-600 rounded-md cursor-pointer focus:outline-none focus:text-blue-600 transition relative"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 fill-current"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M4 22a8 8 0 1 1 16 0h-2a6 6 0 1 0-12 0H4zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" />
                  </svg>
                </button>
              </Link>
              <a
                href="/wishlist"
                className="px-2 text-gray-800 hover:text-blue-600 rounded-md cursor-pointer focus:outline-none focus:text-blue-600 relative transition"
                aria-label="Wishlist"
              >
                {/* Wishlist icon */}
              </a>
              <button
                onClick={handleCheckout} // Llamar a la función de checkout
                className="snipcart-checkout appearance-none px-2 text-gray-800 hover:text-blue-600 rounded-md cursor-pointer focus:outline-none focus:text-blue-600 transition relative"
                aria-label="Cart"
              >
                {/* Cart icon */}
              </button>
            </div>
          </div>
        </div>
      </header>
      <main className="py-6 md:py-12">
        <div className="max-w-6xl mx-auto px-6">{children}</div>
      </main>
      <footer className="max-w-6xl mx-auto px-6">
        <div className="py-6 border-t border-gray-100 text-center flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-600 text-sm">
            Powered by{" "}
            <a
              href="https://headlessdropshipping.com"
              title="Learn more about how this site was made"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-0.5 text-gray-800 hover:text-blue-600"
            >
              Headless Dropshipping Starter
            </a>
            , Built by{" "}
            <a
              href="https://twitter.com/notrab"
              title="Follow the creator on Twitter"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-0.5 text-gray-800 hover:text-blue-600"
            >
              @notrab
            </a>
          </p>
          <nav className="flex items-center justify-end space-x-3 md:space-x-6">
            <a className="text-gray-800 hover:text-blue-600 p-1 transition text-sm" href="/about">
              FAQS
            </a>
            <a className="text-gray-800 hover:text-blue-600 p-1 transition text-sm" href="/terms-of-sale">
              Terms of Sale
            </a>
          </nav>
        </div>
      </footer>
    </>
  );
};

export default Layout;
