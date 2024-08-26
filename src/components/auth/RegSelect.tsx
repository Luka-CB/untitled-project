import { useContext } from "react";
import styles from "./RegSelect.module.scss";
import { GoChevronDown } from "react-icons/go";
import { RegSelectContext } from "../../context/regSelectContext";
import { AnimatePresence, motion } from "framer-motion";

const RegSelect: React.FC = () => {
  const { isOptionsOpen, setIsOptionsOpen, setPickedOption, pickedOption } =
    useContext(RegSelectContext);

  const handlePickOption = (value: string) => {
    setPickedOption(value);
    setIsOptionsOpen(false);
  };

  console.log(pickedOption);

  return (
    <div className={styles.regTypeSelect}>
      <label>Register as:</label>
      <div
        className={styles.selectInput}
        onClick={() => setIsOptionsOpen(!isOptionsOpen)}
      >
        <span>{pickedOption}</span>
        <GoChevronDown className={styles.chevronDown} />
      </div>
      <AnimatePresence>
        {isOptionsOpen ? (
          <motion.div
            initial={{ top: "150%", opacity: 0, scale: 0.8 }}
            animate={{
              top: "100%",
              opacity: 1,
              scale: 1,
              transition: {
                duration: 0.5,
                type: "spring",
              },
            }}
            exit={{
              top: "150%",
              opacity: 0,
              scale: 0.8,
              transition: {
                duration: 0.5,
                type: "spring",
              },
            }}
            className={styles.options}
            onClick={(e) => e.stopPropagation()}
          >
            <span
              className={
                pickedOption === "customer"
                  ? styles.optionActive
                  : styles.option
              }
              onClick={() => handlePickOption("customer")}
            >
              Customer
            </span>
            <span
              className={
                pickedOption === "business"
                  ? styles.optionActive
                  : styles.option
              }
              onClick={() => handlePickOption("business")}
            >
              Business
            </span>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
};

export default RegSelect;
