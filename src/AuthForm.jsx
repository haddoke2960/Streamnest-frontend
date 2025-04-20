import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "./firebase";

const auth = getAuth(app);

export default function AuthForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState("");

  const handleAuth = async (e) => {
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
    <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">
        {isLogin ? "Login" : "Register"}
      </h2>
      <form onSubmit={handleAuth} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full border px-4 py-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border px-4 py-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <p className="text-red-500">{error}</p>}
        <button className="w-full bg-blue-500 text-white py-2 rounded">
          {isLogin ? "Login" : "Register"}
        </button>
      </form>
      <p className="text-center mt-4">
        {isLogin ? "No account?" : "Already registered?"}{" "}
        <button onClick={() => setIsLogin(!isLogin)} className="text-blue-600 underline">
          {isLogin ? "Register" : "Login"}
        </button>
      </p>
    </div>
  );
}