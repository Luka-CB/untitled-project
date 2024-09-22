import styles from "./BtnLoader.module.scss";

export const BtnLoaderPrimary: React.FC = () => {
  return <div className={styles.loaderPrimary}></div>;
};

export const BtnLoaderSecondary: React.FC = () => {
  return <div className={styles.loaderSecondary}></div>;
};
