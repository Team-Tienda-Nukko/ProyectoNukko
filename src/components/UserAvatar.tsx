'use client';
import useAuth from "../hooks/useAuth";

export default function UserAvatar() {
  const { user } = useAuth();

  if (!user) return null; // Si no hay usuario logueado, no mostramos nada

  return (
    <div className="fixed top-4 right-4 flex items-center bg-white shadow-lg p-2 rounded-full border border-gray-300">
      <img
        src={user.photoURL || "/default-avatar.png"}
        alt={user.displayName || "Usuario"}
        className="w-10 h-10 rounded-full mr-2"
      />
      <span className="font-medium text-gray-700">{user.displayName}</span>
    </div>
  );
}
