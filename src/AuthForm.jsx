import { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'; // or your auth service
import { auth } from '../firebase'; // adjust import path as needed

const AuthForm = ({ isSignUp }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      if (isSignUp) {
        // Sign up logic
        const userCred = await createUserWithEmailAndPassword(auth, email, password);
        console.log('User created:', userCred.user);
        // Redirect or update state as needed
      } else {
        // Sign in logic
        const userCred = await signInWithEmailAndPassword(auth, email, password);
        console.log('User signed in:', userCred.user);
        // Redirect or update state as needed
      }
    } catch (err) {
      setError(err.message);
      console.error('Authentication error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <button type="submit" disabled={loading}>
        {loading ? 'Processing...' : isSignUp ? 'Sign Up' : 'Sign In'}
      </button>
      {error && <p className="error">{error}</p>}
    </form>
  );
};

export default AuthForm;