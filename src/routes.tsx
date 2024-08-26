import { Route, Routes } from "react-router-dom";
import { Layout } from "./components";
import { Home, Signin, Signup } from "./views";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
