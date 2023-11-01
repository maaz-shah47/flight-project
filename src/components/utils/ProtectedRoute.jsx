import { Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  const user = localStorage.getItem("user");
  const token = localStorage.getItem("token");
  let location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      const expiryDate = new Date(
        JSON.parse(atob(token.split(".")[1])).exp * 1000
      );
      const currentTime = new Date();

      if (expiryDate <= currentTime) {
        navigate("/login");
      }
    }
  }, []);

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  } else if (user && user.userId) {
    return <Navigate to="/dashboard" state={{ from: location }} replace />;
  } else {
    return <>{children}</>;
  }
};
