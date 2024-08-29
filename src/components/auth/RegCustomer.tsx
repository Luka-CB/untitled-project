import { useTranslation } from "react-i18next";
import styles from "./RegCustomer.module.scss";
import ProfileImage from "./ProfileImage";
import Oauth from "./Oauth";

const RegCustomer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Oauth />
      <div className={styles.or}>
        <div className={styles.leftLine}></div>
        <span>{t("header.auth.signin.or")}</span>
        <div className={styles.rightLine}></div>
      </div>
      <ProfileImage />
      <form className={styles.form}>
        <input
          className={styles.input}
          type="text"
          placeholder={t("header.auth.signup.form.firstName")}
        />
        <input
          className={styles.input}
          type="text"
          placeholder={t("header.auth.signup.form.lastName")}
        />
        <input
          className={styles.input}
          type="email"
          placeholder={t("header.auth.signup.form.email")}
        />
        <input
          className={styles.input}
          type="password"
          placeholder={t("header.auth.signup.form.password")}
        />
        <input
          className={styles.input}
          type="password"
          placeholder={t("header.auth.signup.form.confirmPassword")}
        />
        <button className={styles.submitBtn}>
          {t("header.auth.signup.form.btn")}
        </button>
      </form>
    </>
  );
};

export default RegCustomer;
