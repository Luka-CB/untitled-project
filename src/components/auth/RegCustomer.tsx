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
          placeholder={t("header.auth.signup.form.customer.firstName")}
          required
        />
        <input
          className={styles.input}
          type="text"
          placeholder={t("header.auth.signup.form.customer.lastName")}
          required
        />
        <input
          className={styles.input}
          type="email"
          placeholder={t("header.auth.signup.form.customer.email")}
          required
        />
        <input
          className={styles.input}
          type="password"
          placeholder={t("header.auth.signup.form.customer.password")}
          required
        />
        <input
          className={styles.input}
          type="password"
          placeholder={t("header.auth.signup.form.customer.confirmPassword")}
          required
        />
        <button className={styles.submitBtn}>
          {t("header.auth.signup.form.customer.btn")}
        </button>
      </form>
    </>
  );
};

export default RegCustomer;
