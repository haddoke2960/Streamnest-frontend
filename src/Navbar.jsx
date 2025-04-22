// Navbar.jsx
import { Link } from 'react-router-dom'; // <– Add this
import { useAuth } from './AuthContext';

const Navbar = () => {
  const { currentUser, isAuthenticated } = useAuth();

  return (
    <nav>
      <Link to="/">Home</Link> {/* Use Link for navigation */}
      {isAuthenticated ? (
        <span>Welcome, {currentUser?.email}</span>
      ) : (
        <Link to="/login">Sign In</Link> // Replace <a> with <Link>
      )}
    </nav>
  );
};

export default Navbar;