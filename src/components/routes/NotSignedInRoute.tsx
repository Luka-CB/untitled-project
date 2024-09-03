import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../redux/store";

const NotSignedInRoute = ({ children }: any) => {
  const { user } = useAppSelector((state) => state.sessionUser);

  if (user && user?._id) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default NotSignedInRoute;
