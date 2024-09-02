import styles from "./SelectType.module.scss";
import { GoChevronDown } from "react-icons/go";
import { business_types } from "../../../../../data";
import { useContext } from "react";
import { SelectTypeContext } from "../../../../../context/selectTypeContext";
import { AnimatePresence, motion } from "framer-motion";
import { IoMdCloseCircle } from "react-icons/io";

const SelectType: React.FC = () => {
  const {
    toggleDropdown,
    setToggleDropdown,
    handlePickType,
    pickedTypes,
    removePickedType,
    selectTypeError,
  } = useContext(SelectTypeContext);

  return (
    <div className={styles.type}>
      <div
        className={
          selectTypeError
            ? styles.selectError
            : pickedTypes?.length
            ? styles.selectActive
            : styles.select
        }
      >
        {pickedTypes?.length ? (
          <div className={styles.pickedTypes}>
            {pickedTypes?.map((type) => (
              <div
                className={styles.pickedType}
                key={type.id}
                data-title={type.type?.length > 16 ? type.type : undefined}
              >
                <span>
                  {type.type?.length > 16
                    ? `${type.type?.substring(0, 16)}...`
                    : type.type}
                </span>
                <IoMdCloseCircle
                  className={styles.delIcon}
                  onClick={() => removePickedType(type.id)}
                />
              </div>
            ))}
          </div>
        ) : (
          <span className={styles.placeholder}>
            Choose up to three that best describes your business *
          </span>
        )}

        <div
          className={styles.icon}
          onClick={() => setToggleDropdown(!toggleDropdown)}
        >
          <GoChevronDown className={styles.chevronDown} />
        </div>
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
            className={
              pickedTypes?.length >= 3 ? styles.optionsDisabled : styles.options
            }
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
                        handlePickType({ id: subCat.id, type: subCat.name })
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
