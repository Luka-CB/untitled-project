import { useContext } from "react";
import styles from "./RegSelect.module.scss";
import { GoChevronDown } from "react-icons/go";
import { RegSelectContext } from "../../context/regSelectContext";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { LanguageContext } from "../../context/languageContext";

interface propsIFace {
  type: string;
}

const RegSelect: React.FC<propsIFace> = ({ type }) => {
  const { t } = useTranslation();

  const { currentLanguage } = useContext(LanguageContext);
  const { isOptionsOpen, setIsOptionsOpen, handlePickOption, pickedOption } =
    useContext(RegSelectContext);

  return (
    <div className={styles.regTypeSelect}>
      <label>
        {type === "login"
          ? t("header.auth.regType.title.login")
          : t("header.auth.regType.title.register")}
        :
      </label>
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
                pickedOption === "customer" || pickedOption === "მომხმარებელი"
                  ? styles.optionActive
                  : styles.option
              }
              onClick={() =>
                handlePickOption(
                  currentLanguage === "ka" ? "მომხმარებელი" : "customer"
                )
              }
            >
              {t("header.auth.regType.options.0")}
            </span>
            <span
              className={
                pickedOption === "business" || pickedOption === "ბიზნესი"
                  ? styles.optionActive
                  : styles.option
              }
              onClick={() =>
                handlePickOption(
                  currentLanguage === "ka" ? "ბიზნესი" : "business"
                )
              }
            >
              {t("header.auth.regType.options.1")}
            </span>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
};

export default RegSelect;
