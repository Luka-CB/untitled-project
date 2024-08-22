import { useTranslation } from "react-i18next";
import styles from "./Search.module.scss";
import { CiSearch } from "react-icons/ci";

const Search = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.search}>
      <CiSearch className={styles.searchIcon} />
      <input type="search" placeholder={t("header.search.placeholder")} />
    </div>
  );
};

export default Search;
