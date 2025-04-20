import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

export default function ProtectedRoute({ children }) {
  const { user } = useAuth();

  // If no user is logged in, redirect to /auth
  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  // Otherwise, show the requested page
  return children;
}