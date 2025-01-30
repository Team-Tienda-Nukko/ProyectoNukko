import { useEffect, useState } from "react";
import { auth } from "../utils/Firebase";
import { onAuthStateChanged, User } from "firebase/auth";

const useAuth = () => {
  const [user, setUser] = useState<User | null>(null); // Especificamos que el estado 'user' puede ser un objeto User o null

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user); // El usuario está autenticado
      } else {
        setUser(null); // El usuario no está autenticado
      }
    });

    // Limpiar el listener cuando el componente se desmonte
    return () => unsubscribe();
  }, []);

  return { user };
};

export default useAuth;
