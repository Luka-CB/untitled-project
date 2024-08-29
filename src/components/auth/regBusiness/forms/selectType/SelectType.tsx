import styles from "./SelectType.module.scss";
import { GoChevronDown } from "react-icons/go";
import { business_types } from "../../../../../data";
import { useContext } from "react";
import { SelectTypeContext } from "../../../../../context/selectTypeContext";
import { AnimatePresence, motion } from "framer-motion";

const SelectType: React.FC = () => {
  const { toggleDropdown, setToggleDropdown, handlePickType, pickedType } =
    useContext(SelectTypeContext);

  return (
    <div className={styles.type}>
      <div
        className={pickedType?.typeId ? styles.selectActive : styles.select}
        onClick={() => setToggleDropdown(!toggleDropdown)}
      >
        <span>
          {pickedType?.typeId
            ? pickedType.type
            : "Choose one of the options that best describes your business"}
        </span>
        <GoChevronDown className={styles.chevronDown} />
      </div>
      <AnimatePresence>
        {toggleDropdown ? (
          <motion.div
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
            className={styles.options}
            onClick={(e) => e.stopPropagation()}
          >
            <dl>
              {business_types.map((type) => (
                <div key={type.id}>
                  <dt>{type.category}</dt>
                  {type.subcategories?.map((subCat) => (
                    <dd
                      key={subCat.id}
                      onClick={() =>
                        handlePickType({ typeId: type.id, type: subCat.name })
                      }
                    >
                      {subCat.name}
                    </dd>
                  ))}
                </div>
              ))}
            </dl>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
};

export default SelectType;
