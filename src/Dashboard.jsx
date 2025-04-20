import { useAuth } from "./AuthContext";
import { getAuth, signOut } from "firebase/auth";
import { app } from "./firebase";

const auth = getAuth(app);

export default function Dashboard() {
  const { user } = useAuth();

  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <h2 className="text-2xl font-bold mb-2">Dashboard</h2>
      {user ? (
        <>
          <p className="mb-4 text-lg">Welcome, <strong>{user.email}</strong></p>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Logout
          </button>
        </>
      ) : (
        <p className="text-red-500">User not found</p>
      )}
    </div>
  );
}