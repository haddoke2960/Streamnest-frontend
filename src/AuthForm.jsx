import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "./firebase";

const auth = getAuth(app);

export default function AuthForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(true);
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    let userCred;

    if (isRegistering) {
      userCred = await createUserWithEmailAndPassword(auth, email, password);
      console.log("User registered:", userCred.user);
    } else {
      userCred = await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in:", userCred.user);
    }
  } catch (error) {
    console.error("Auth error:", error);
  }
};

  return (
    <div>
      <h2>{isRegistering ? "Register" : "Login"}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <button type="submit">
          {isRegistering ? "Create Account" : "Login"}
        </button>
      </form>
      <p onClick={() => setIsRegistering(!isRegistering)} style={{ cursor: "pointer" }}>
        {isRegistering ? "Already have an account? Login here" : "Don't have an account? Register here"}
      </p>
    </div>
  );
}