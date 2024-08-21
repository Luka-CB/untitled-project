import DarkLightBtn from "../darkLightBtn/DarkLightBtn";
import styles from "./Hearder.module.scss";
import Search from "./Search";
import { CiHome, CiSquareInfo } from "react-icons/ci";
import { GrContactInfo } from "react-icons/gr";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.col1}>
        <div className={styles.logo}>logo</div>
        <nav>
          <div className={styles.link} data-title="Home">
            <CiHome className={styles.icon} />
          </div>
          <div className={styles.link} data-title="About">
            <CiSquareInfo className={styles.icon} />
          </div>
          <div className={styles.link} data-title="Contact">
            <GrContactInfo className={styles.icon} />
          </div>
        </nav>
      </div>
      <div className={styles.col2}>
        <div className={styles.searchWrapper}>
          <Search />
        </div>
        <div className={styles.divider}></div>
        <div className={styles.toggleBtns}>
          <DarkLightBtn />
        </div>
        <div className={styles.divider}></div>
        <div className={styles.auth}>
          <div className={styles.loggedOut}>
            <span>Sign In</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
