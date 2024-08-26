import { Outlet } from "react-router-dom";
import styles from "./Layout.module.scss";
import { useAppSelector } from "../../redux/store";
import Header from "../header/Header";
import { useContext } from "react";
import { RegSelectContext } from "../../context/regSelectContext";

const Layout: React.FC = () => {
  const { isOptionsOpen, setIsOptionsOpen } = useContext(RegSelectContext);

  const isDark = useAppSelector((state) => state.theme.isDark);

  const handleClosePopups = () => {
    if (isOptionsOpen) {
      setIsOptionsOpen(false);
    }
  };

  return (
    <main
      className={styles.container}
      data-theme={isDark ? "dark" : "light"}
      onClick={handleClosePopups}
    >
      <Header />
      <Outlet />
    </main>
  );
};

export default Layout;
