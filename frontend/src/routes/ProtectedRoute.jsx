import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const isAuthenticated = true; // Mock authentication

  return isAuthenticated ? children : <Navigate to="/" />;
}

export default ProtectedRoute;