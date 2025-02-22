import React from "react";
import Link from "next/link";
import useWishlistState from "../hooks/useWishlistState";
import useSnipcartCount from "../hooks/useSnipcartCount";
import { useAuth } from "../context/AuthContext"; // ✅ Importar el AuthContext

const Layout = ({ children }) => {
  const { hasItems } = useWishlistState();
  const { cart } = useSnipcartCount();
  const { username } = useAuth(); // ✅ Obtener el usuario desde el contexto
  const cartHasItems = cart.items.count !== 0;

  return (
    <>
      {/* 🔹 Barra fija de información sobre envíos */}
      <div className="fixed top-0 left-0 w-full h-10 bg-gray-100 text-gray-900 text-sm md:text-base font-medium shadow z-50 flex items-center justify-center">
        Envíos <b> GRATIS </b> a partir de 40€
      </div>

      {/* 🔹 Contenedor principal con padding suficiente para evitar solapamiento */}
      <div className="pt-10">
        {/* Encabezado principal */}
        <header className="py-4 md:py-6">
          <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
            
            {/* Navegación izquierda */}
            <nav className="flex items-center space-x-3 md:space-x-6">
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

            {/* Logo */}
            <Link href="/">
              <a className="flex items-center text-gray-900">
                <div className="rounded-full w-12 h-12 flex items-center justify-center mr-4 overflow-hidden">
                  <img src="/logo.jpg" alt="Nukko Logo" className="w-full h-full object-cover" />
                </div>
                <span className="text-lg font-medium">
                  <b>Nukko</b>
                </span>
              </a>
            </Link>

            {/* Navegación derecha */}
            <div className="md:w-1/3 flex items-center justify-end space-x-3 -mr-2.5">
              {username ? (
                <>
                  <Link href="/login">
                    <a className="text-gray-800 font-medium hover:text-blue-600 transition">{username}</a>
                  </Link>
                  
                  {/* Botón de wishlist */}
                  <Link href="/wishlist">
                    <a className="relative text-gray-800 hover:text-blue-600 transition">
                      {hasItems && (
                        <span className="absolute bg-red-500 rounded-full w-2 h-2 top-0 right-0"></span>
                      )}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="w-6 h-6 fill-current"
                      >
                        <path fill="none" d="M0 0H24V24H0z" />
                        <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228z" />
                      </svg>
                    </a>
                  </Link>

                  {/* Botón de carrito */}
                  <button
                    className="snipcart-checkout px-2 text-gray-800 hover:text-blue-600 rounded-md cursor-pointer focus:outline-none focus:text-blue-600 transition relative"
                    aria-label="Cart"
                    onClick={() => window?.Snipcart?.api?.modal?.show()}
                  >
                    {cartHasItems && (
                      <span className="absolute bg-blue-600 rounded-full w-2 h-2 top-0 right-0"></span>
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
                </>
              ) : (
                <>
                  <Link href="/login">
                    <a className="text-gray-800 hover:text-blue-600 transition">Login</a>
                  </Link>

                  {/* Botón de wishlist */}
                  <Link href="/wishlist">
                    <a className="px-2 text-gray-800 hover:text-blue-600 rounded-md cursor-pointer focus:outline-none focus:text-blue-600 relative transition">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="w-6 h-6 fill-current"
                      >
                        <path fill="none" d="M0 0H24V24H0z" />
                        <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228z" />
                      </svg>
                    </a>
                  </Link>
                </>
              )}
            </div>
          </div>
        </header>
        

        {/* 🔹 Contenido de la página */}
        <main className="pt-6">
          <div className="max-w-6xl mx-auto px-6">{children}</div>
        </main>

         {/* 🔹 Footer */}
 <footer className="bg-gray-100 mt-10 py-6 text-gray-700 text-sm">
 <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
   <p>&copy; {new Date().getFullYear()} Nukko. Todos los derechos reservados.</p>
 
 </div>
</footer>
      </div>
    </>
  );
};


export default Layout;
