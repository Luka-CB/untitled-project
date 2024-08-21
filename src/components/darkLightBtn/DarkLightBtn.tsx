import { useEffect, useState } from "react";
import styles from "./DarkLightBtn.module.scss";
import { IoSunny, IoMoon } from "react-icons/io5";
import { useAnimation, motion } from "framer-motion";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { toggleTheme } from "../../redux/slices/themeSlice";

const DarkLightBtn: React.FC = () => {
  const isDark = useAppSelector((state) => state.theme.isDark);
  const dispatch = useAppDispatch();

  const [toggle, setToggle] = useState(isDark ? true : false);

  const containerControls = useAnimation();
  const sunControls = useAnimation();
  const moonControls = useAnimation();

  useEffect(() => {
    if (toggle) {
      containerControls.start({
        backgroundColor: "#2d2d2d",
        transition: {
          duration: 0.5,
          type: "spring",
        },
      });

      sunControls.start({
        translateY: "30px",
        transition: {
          duration: 0.5,
          type: "spring",
          stiffness: 300,
        },
      });

      moonControls.start({
        translateY: 0,
        transition: {
          duration: 0.5,
          type: "spring",
          stiffness: 300,
        },
      });
    } else {
      containerControls.start({
        backgroundColor: "#4ea8de",
        transition: {
          duration: 0.5,
          type: "spring",
        },
      });

      sunControls.start({
        translateY: "0",
        transition: {
          duration: 0.5,
          type: "spring",
          stiffness: 300,
        },
      });

      moonControls.start({
        translateY: "-30px",
        transition: {
          duration: 0.5,
          type: "spring",
          stiffness: 300,
        },
      });
    }
  }, [toggle]);

  const handleToggle = () => {
    setToggle(!toggle);
    dispatch(toggleTheme(!toggle));
  };

  return (
    <motion.div
      initial={{ backgroundColor: "#4ea8de" }}
      animate={containerControls}
      className={styles.container}
      onClick={handleToggle}
    >
      <motion.div
        initial={{ translateY: "-30px" }}
        animate={moonControls}
        className={styles.moonIcon}
      >
        <IoMoon />
      </motion.div>
      <motion.div
        initial={{ translateY: 0 }}
        animate={sunControls}
        className={styles.sunIcon}
      >
        <IoSunny />
      </motion.div>
    </motion.div>
  );
};

export default DarkLightBtn;
