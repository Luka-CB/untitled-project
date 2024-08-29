import { useEffect, useRef, useState } from "react";
import styles from "./InfoPopup.module.scss";
import { motion } from "framer-motion";

interface propsIFace {
  info: string;
}

const InfoPopup: React.FC<propsIFace> = ({ info }) => {
  const [popupPositionX, setPopupPositionX] = useState("right");
  const [popupPositionY, setPopupPositionY] = useState("top");
  const infoRef = useRef<HTMLDivElement>(null);

  const updatePosition = () => {
    if (infoRef.current) {
      const infoRect = infoRef.current.getBoundingClientRect();
      const popupWidth = 200;
      const popupHeight = 250;

      const spaceRight = window.innerWidth - infoRect.right;
      const spaceLeft = infoRect.left;
      const spaceTop = infoRect.top;
      const spaceBottom = window.innerHeight - infoRect.bottom;

      let newPositionX = "right";

      if (spaceRight < popupWidth && spaceLeft >= popupWidth) {
        newPositionX = "left";
      } else if (spaceRight < popupWidth && spaceLeft < popupWidth) {
        newPositionX = "left";
      }

      let newPositionY = "top";

      if (spaceTop < popupHeight && spaceBottom >= popupHeight) {
        newPositionY = "bottom";
      } else if (spaceBottom < popupHeight && spaceTop >= popupHeight) {
        newPositionY = "top";
      }

      setPopupPositionX(newPositionX);
      setPopupPositionY(newPositionY);
    }
  };

  useEffect(() => {
    updatePosition();
    window.addEventListener("resize", updatePosition);
    return () => window.removeEventListener("resize", updatePosition);
  }, []);

  return (
    <motion.div
      ref={infoRef}
      initial={{ opacity: 0, scale: 0.3 }}
      animate={{
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.5,
          type: "spring",
        },
      }}
      exit={{
        opacity: 0,
        scale: 0.3,
        transition: {
          duration: 0.5,
          type: "spring",
        },
      }}
      className={
        popupPositionX === "right" && popupPositionY === "top"
          ? styles.containerPositionTopRight
          : popupPositionX === "left" && popupPositionY === "top"
          ? styles.containerPositionTopLeft
          : popupPositionX === "right" && popupPositionY === "bottom"
          ? styles.containerPositionBottomRight
          : popupPositionX === "left" && popupPositionY === "bottom"
          ? styles.containerPositionBottomLeft
          : styles.container
      }
    >
      <p>{info}</p>
    </motion.div>
  );
};

export default InfoPopup;
