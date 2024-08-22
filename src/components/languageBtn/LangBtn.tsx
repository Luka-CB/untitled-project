import styles from "./LangBtn.module.scss";
import geoFlagIcon from "../../assets/imgs/geo.png";
import gbrFlagIcon from "../../assets/imgs/gbr.png";
import { useContext, useEffect, useState } from "react";
import { useAnimation, motion } from "framer-motion";
import { LanguageContext } from "../../context/languageContext";

const LangBtn: React.FC = () => {
  const { currentLanguage, toggleLanguage } = useContext(LanguageContext);

  const [toggle, setToggle] = useState(currentLanguage === "ka" ? false : true);
  const geoControls = useAnimation();
  const gbrControls = useAnimation();

  useEffect(() => {
    if (toggle) {
      geoControls.start({
        width: 15,
        height: 15,
        left: "90%",
        bottom: "70%",
        transition: {
          duration: 0.5,
          type: "spring",
        },
      });

      gbrControls.start({
        width: 30,
        height: 30,
        left: 0,
        bottom: 0,
        transition: {
          duration: 0.5,
          type: "spring",
        },
      });
    } else {
      geoControls.start({
        width: "100%",
        height: "100%",
        left: 0,
        bottom: 0,
        transition: {
          duration: 0.5,
          type: "spring",
        },
      });

      gbrControls.start({
        width: 15,
        height: 15,
        left: "90%",
        bottom: "70%",
        transition: {
          duration: 0.5,
          type: "spring",
        },
      });
    }
  }, [toggle]);

  const handleToggle = () => {
    setToggle(!toggle);
    toggleLanguage();
  };

  return (
    <div className={styles.container} onClick={handleToggle}>
      <motion.div
        initial={{ width: "100%", height: "100%" }}
        animate={geoControls}
        className={styles.geoFlag}
      >
        <img src={geoFlagIcon} alt="geo flag" />
      </motion.div>
      <motion.div
        initial={{ width: 15, height: 15, left: "90%", bottom: "70%" }}
        animate={gbrControls}
        className={styles.gbrFlag}
      >
        <img src={gbrFlagIcon} alt="gbr flag" />
      </motion.div>
    </div>
  );
};

export default LangBtn;
