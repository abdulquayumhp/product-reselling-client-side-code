import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { UserContext } from "../../AuthContext/AuthContext";
import Loding from "../../SharebleInfo/Lodin/Loding";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useContext(UserContext);

  const location = useLocation();
  if (loading) {
    return <Loding />;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/signIn" state={{ from: location }} />;
};

export default ProtectedRoute;
