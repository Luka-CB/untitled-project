import { Route, Routes } from "react-router-dom";
import { Layout } from "./components";
import { Home } from "./views";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
