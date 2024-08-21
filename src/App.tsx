import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes";
import { useAppSelector } from "./redux/store";
import { useEffect } from "react";

const App = () => {
  const isDark = useAppSelector((state) => state.theme.isDark);

  useEffect(() => {
    if (isDark) {
      document.body.style.background =
        "radial-gradient(circle at 10% 20%, rgb(0, 0, 0) 0%, rgb(1, 16, 25) 90.2%)";
    } else {
      document.body.style.background =
        "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)";
    }
  }, [isDark]);

  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default App;
