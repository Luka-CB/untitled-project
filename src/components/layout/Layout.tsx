import { Outlet, useLocation } from "react-router-dom";
import styles from "./Layout.module.scss";
import { useAppSelector } from "../../redux/store";
import Header from "../header/Header";
import { useContext } from "react";
import { RegSelectContext } from "../../context/regSelectContext";
import { SelectTypeContext } from "../../context/selectTypeContext";
import ErrorMsg from "../flashMsgs/ErrorMsg";
import { FlashMsgContext } from "../../context/flashMsgContext";
import { AnimatePresence } from "framer-motion";
import { UserOptionsContext } from "../../context/userOptionsContext";

const routesToExcludeHeader = ["/redirect"];

const Layout: React.FC = () => {
  const { isOptionsOpen, setIsOptionsOpen } = useContext(RegSelectContext);
  const { toggleDropdown, setToggleDropdown } = useContext(SelectTypeContext);
  const { isUserOptionsOpen, toggleUserOptions } =
    useContext(UserOptionsContext);
  const { errorMsg } = useContext(FlashMsgContext);

  const isDark = useAppSelector((state) => state.theme.isDark);

  const { pathname } = useLocation();

  const handleClosePopups = () => {
    if (isOptionsOpen || toggleDropdown || isUserOptionsOpen) {
      setIsOptionsOpen(false);
      setToggleDropdown(false);
      toggleUserOptions(false);
    }
  };

  return (
    <main
      className={styles.container}
      data-theme={isDark ? "dark" : "light"}
      onClick={handleClosePopups}
    >
      {errorMsg ? (
        <AnimatePresence>
          <ErrorMsg />
        </AnimatePresence>
      ) : null}

      {!routesToExcludeHeader.includes(pathname) ? <Header /> : null}
      <Outlet />
    </main>
  );
};

export default Layout;
