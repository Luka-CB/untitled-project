import styles from "./Search.module.scss";
import { CiSearch } from "react-icons/ci";

const Search = () => {
  return (
    <div className={styles.search}>
      <CiSearch className={styles.searchIcon} />
      <input type="search" placeholder="search anything" />
    </div>
  );
};

export default Search;
