import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

const ProtectedAuthRoute = ({ children }) => {
  const token = Cookies.get("usr");

  if (!token) {
    return children; // Allow access to auth pages if there's no token
  }

  try {
    const decoded = jwtDecode(token);
    const isExpired = decoded.exp * 1000 < Date.now();

    if (!isExpired) {
      return <Navigate to="/" replace />;
    }
  } catch (error) {
    Cookies.remove("usr"); // Remove invalid token
    return children; // Allow access since token is invalid
  }

  return children;
};

export default ProtectedAuthRoute;
