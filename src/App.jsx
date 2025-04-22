import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthForm from './AuthForm';
import Dashboard from './Dashboard';
import PrivateRoute from './PrivateRoute';
import Home from './Home'; // Add this if you have a home page
import Navbar from './Navbar'; // Import Navbar component

function App() {
  return (
    <Router>
      <Navbar /> {/* Add Navbar at the top level */}
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<AuthForm isSignUp={false} />} />
        <Route path="/signup" element={<AuthForm isSignUp={true} />} />

        {/* Protected Routes */}
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

        {/* Optional: 404 Page */}
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;