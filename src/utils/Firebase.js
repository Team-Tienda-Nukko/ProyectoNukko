// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD76Gs5vN1oSrp0apfpUngdTyReBBX2WYc",
  authDomain: "nukko-tienda-9efa0.firebaseapp.com",
  projectId: "nukko-tienda-9efa0",
  storageBucket: "nukko-tienda-9efa0.firebasestorage.app",
  messagingSenderId: "391269379838",
  appId: "1:391269379838:web:59456763ae0a24ec943faf",
};

// Inicializar Firebase solo si no está inicializado
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// Exportar la instancia de autenticación
export const auth = getAuth(app);