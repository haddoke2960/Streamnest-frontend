import { useAuth } from "./AuthContext";
import AuthForm from "./AuthForm";
import { getAuth, signOut } from "firebase/auth";
import { app } from "./firebase";

const auth = getAuth(app);

export default function App() {
  const { user } = useAuth();

  const handleLogout = () => {
    signOut(auth).then(() => {
      alert("Logged out");
    });
  };

  return (
    <div className="h-screen w-full flex items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white">
      {!user ? (
        <AuthForm />
      ) : (
        <div className="flex flex-col items-center space-y-4">
          <h1 className="text-xl font-bold">Welcome, {user.email}</h1>
          <button
            className="bg-red-600 px-4 py-2 rounded font-semibold hover:bg-red-700"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}