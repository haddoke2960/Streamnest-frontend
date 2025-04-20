import { db } from './firebase';
import { doc, setDoc } from 'firebase/firestore';
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "./firebase";

const auth = getAuth(app);

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">{isLogin ? "Login" : "Register"}</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md space-y-4 w-80">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">
          {isLogin ? "Login" : "Register"}
        </button>
      </form>
      <button
        onClick={() => setIsLogin(!isLogin)}
        className="mt-4 text-sm text-blue-600 underline"
      >
        {isLogin ? "Need an account? Register" : "Already have an account? Login"}
      </button>
    </div>
  );
}