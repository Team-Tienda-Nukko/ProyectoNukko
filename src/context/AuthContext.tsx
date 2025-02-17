import { createContext, useContext, useEffect, useState } from "react";

interface AuthContextProps {
  username: string | null;
  setUsername: (username: string | null) => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }) => {
  const [username, setUsernameState] = useState<string | null>(null);

  useEffect(() => {
    // Recuperar el usuario almacenado en localStorage
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsernameState(storedUsername);
    }

    // Escuchar cambios en localStorage
    const handleStorageChange = () => {
      setUsernameState(localStorage.getItem("username"));
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const setUsername = (newUsername: string | null) => {
    setUsernameState(newUsername);
    if (newUsername) {
      localStorage.setItem("username", newUsername);
    } else {
      localStorage.removeItem("username");
    }
    window.dispatchEvent(new Event("storage")); // ✅ Disparar evento para actualizar en otros componentes
  };

  return (
    <AuthContext.Provider value={{ username, setUsername }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe estar dentro de un AuthProvider");
  }
  return context;
};
