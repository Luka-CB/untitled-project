import { useContext } from "react";
import styles from "./FlashMsgs.module.scss";
import { motion } from "framer-motion";
import { FlashMsgContext } from "../../context/flashMsgContext";

const ErrorMsg: React.FC = () => {
  const { errorMsg } = useContext(FlashMsgContext);

  return (
    <motion.div
      initial={{ opacity: 0, bottom: 0 }}
      animate={{
        opacity: 1,
        bottom: "3%",
        transition: { duration: 0.5, type: "spring" },
      }}
      exit={{
        opacity: 0,
        bottom: 0,
        transition: { duration: 0.5, type: "spring" },
      }}
      className={styles.error}
    >
      {errorMsg ? <span>{errorMsg}</span> : null}
    </motion.div>
  );
};

export default ErrorMsg;
