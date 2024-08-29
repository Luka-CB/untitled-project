import { Outlet } from "react-router-dom";
import styles from "./Layout.module.scss";
import { useAppSelector } from "../../redux/store";
import Header from "../header/Header";
import { useContext } from "react";
import { RegSelectContext } from "../../context/regSelectContext";
import { SelectTypeContext } from "../../context/selectTypeContext";

const Layout: React.FC = () => {
  const { isOptionsOpen, setIsOptionsOpen } = useContext(RegSelectContext);
  const { toggleDropdown, setToggleDropdown } = useContext(SelectTypeContext);

  const isDark = useAppSelector((state) => state.theme.isDark);

  const handleClosePopups = () => {
    if (isOptionsOpen || toggleDropdown) {
      setIsOptionsOpen(false);
      setToggleDropdown(false);
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
