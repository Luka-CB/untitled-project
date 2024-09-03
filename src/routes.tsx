import { Route, Routes } from "react-router-dom";
import { Layout, NotSignedInRoute } from "./components";
import { Home, Redirect, Signin, Signup } from "./views";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/signin"
          element={
            <NotSignedInRoute>
              <Signin />
            </NotSignedInRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <NotSignedInRoute>
              <Signup />
            </NotSignedInRoute>
          }
        />
        <Route path="/redirect" element={<Redirect />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
