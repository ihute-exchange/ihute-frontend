import { Navigate, useLocation } from "react-router-dom";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

const ProtectedRoute = ({ children }) => {
  const token = Cookies.get("usr");
  const location = useLocation();

  if (!token || token === null) {
    Cookies.remove("usr");
    return <Navigate to="/login" />;
  }

  try {
    const decoded = jwtDecode(token);
    const isExpired = decoded.exp * 1000 < Date.now();

    if (isExpired) {
      Cookies.remove("usr");
      return <Navigate to="/login" />;
    }

    return children;
  } catch (error) {
    Cookies.remove("usr");
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoute;
