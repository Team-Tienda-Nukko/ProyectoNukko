import React, { useState, useEffect } from "react";
import Link from "next/link";
import useWishlistState from "../hooks/useWishlistState";
import useSnipcartCount from "../hooks/useSnipcartCount";

const Layout = ({ children }) => {
  const { hasItems } = useWishlistState();
  const { cart } = useSnipcartCount();
  const cartHasItems = cart.items.count !== 0;
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    // Recuperar el username desde localStorage al cargar la página
    const storedUsername = localStorage.getItem("username");
    setUsername(storedUsername);

    // Función para actualizar el estado cuando cambie el localStorage
    const handleStorageChange = () => {
      setUsername(localStorage.getItem("username"));
    };

    // Escuchar cambios en localStorage (para detectar login/logout sin refrescar)
    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <>
      {/* Encabezado fijo superior */}
      <div className="top-0 left-0 w-full bg-grey-100 text-grey-900 text-sm md:text-base font-medium py-2 shadow z-50 text-center">
        Envíos <b>GRATIS</b> a partir de 40€
      </div>

      {/* Encabezado principal */}
      <header className="py-6 md:py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Navegación izquierda */}
            <div className="md:w-1/3">
              <nav className="flex items-center justify-start space-x-3 md:space-x-6">
                <Link href="/about">
                  <a className="text-gray-800 hover:text-blue-600 p-1 transition">
                    About
                  </a>
                </Link>
                <Link href="/terms-of-sale">
                  <a className="text-gray-800 hover:text-blue-600 p-1 transition">
                    Terms of Sale
                  </a>
                </Link>
              </nav>
            </div>

            {/* Logo */}
            <div className="flex-1 flex items-center justify-center">
              <Link href="/">
                <a className="flex items-center text-gray-900">
                  <div className="rounded-full w-12 h-12 flex items-center justify-center mr-4 overflow-hidden">
                    <img
                      src="/logo.jpg"
                      alt="Nukko Logo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-lg font-medium">
                    <b>Nukko</b>
                  </span>
                </a>
              </Link>
            </div>

            {/* Navegación derecha */}
            <div className="md:w-1/3 flex items-center justify-end space-x-3 -mr-2.5">
              {/* Botón de login */}
              <Link href="/login" aria-label="User login">
                <button
                  className="snipcart-customer-signin appearance-none px-2 text-gray-800 hover:text-blue-600 rounded-md cursor-pointer focus:outline-none focus:text-blue-600 transition"
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

              {/* Botón de wishlist */}
              <Link href="/wishlist">
                <a
                  className="px-2 text-gray-800 hover:text-blue-600 rounded-md cursor-pointer focus:outline-none focus:text-blue-600 relative transition"
                  aria-label="Wishlist"
                >
                  {hasItems && (
                    <span className="absolute bg-red-500 rounded-full w-2 h-2 top-0 right-0 -mt-1 -mr-1"></span>
                  )}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 fill-current"
                  >
                    <path fill="none" d="M0 0H24V24H0z" />
                    <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
                  </svg>
                </a>
              </Link>

              {/* Botón de carrito SOLO si el usuario está autenticado */}
              {username && (
                  <button
                    className="snipcart-checkout appearance-none px-2 text-gray-800 hover:text-blue-600 rounded-md cursor-pointer focus:outline-none focus:text-blue-600 transition relative"
                    aria-label="Cart"
                    onClick={() => window?.Snipcart?.api?.modal?.show()}
                  >
                    {cartHasItems && (
                      <span className="absolute bg-blue-600 rounded-full w-2 h-2 top-0 right-0 -mt-1 -mr-1"></span>
                    )}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="w-6 h-6 fill-current"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M4 16V4H2V2h3a1 1 0 0 1 1 1v12h12.438l2-8H8V5h13.72a1 1 0 0 1 .97 1.243l-2.5 10a1 1 0 0 1-.97.757H5a1 1 0 0 1-1-1zm2 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm12 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
                    </svg>
                  </button>
                )}

            </div>
          </div>
        </div>
      </header>

      <main className="pt-16">
        <div className="max-w-6xl mx-auto px-6">{children}</div>
      </main>
    </>
  );
};

export default Layout;