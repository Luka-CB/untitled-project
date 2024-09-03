import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../redux/store";

const ProtectedRoute = ({ children }: any) => {
  const { user } = useAppSelector((state) => state.sessionUser);

  if (!user?._id) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
