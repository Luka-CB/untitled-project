import { Outlet } from "react-router-dom";
import styles from "./Layout.module.scss";
import { useAppSelector } from "../../redux/store";
import Header from "../header/Header";

const Layout: React.FC = () => {
  const isDark = useAppSelector((state) => state.theme.isDark);

  return (
    <main className={styles.container} data-theme={isDark ? "dark" : "light"}>
      <Header />
      <Outlet />
    </main>
  );
};

export default Layout;
