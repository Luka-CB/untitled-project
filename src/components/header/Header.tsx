import { useTranslation } from "react-i18next";
import DarkLightBtn from "../darkLightBtn/DarkLightBtn";
import LangBtn from "../languageBtn/LangBtn";
import styles from "./Hearder.module.scss";
import Search from "./Search";
import { CiHome, CiSquareInfo } from "react-icons/ci";
import { GrContactInfo } from "react-icons/gr";
import { Link, useLocation } from "react-router-dom";

const routesToExcludeAuth = ["/signin", "/signup"];

const Header: React.FC = () => {
  const { t } = useTranslation();

  const { pathname } = useLocation();

  return (
    <header className={styles.header}>
      <div className={styles.col1}>
        <div className={styles.logo}>logo</div>
        <nav>
          <div className={styles.link} data-title={t("header.navItems.0")}>
            <CiHome className={styles.icon} />
          </div>
          <div className={styles.link} data-title={t("header.navItems.1")}>
            <CiSquareInfo className={styles.icon} />
          </div>
          <div className={styles.link} data-title={t("header.navItems.2")}>
            <GrContactInfo className={styles.icon} />
          </div>
        </nav>
      </div>
      <div className={styles.col2}>
        <Search />
        <div className={styles.divider}></div>
        <div className={styles.toggleBtns}>
          <DarkLightBtn />
          <LangBtn />
        </div>
        {!routesToExcludeAuth.includes(pathname) ? (
          <>
            <div className={styles.divider}></div>
            <div className={styles.auth}>
              <div className={styles.loggedOut}>
                <Link to={{ pathname: "/signin" }}>
                  {t("header.auth.loggedOut")}
                </Link>
              </div>
            </div>
          </>
        ) : null}
      </div>
    </header>
  );
};

export default Header;
