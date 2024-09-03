import { useTranslation } from "react-i18next";
import styles from "./Oauth.module.scss";
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";

const googleUrl = "http://localhost:5000/api/oauth/login/google";

const Oauth: React.FC = () => {
  const { t } = useTranslation();

  const handleGoogleLogin = () => {
    window.open(googleUrl, "_self");
  };

  return (
    <div className={styles.oauth}>
      <div className={styles.google} onClick={handleGoogleLogin}>
        <FcGoogle className={styles.googleIcon} />
        <span>{t("header.auth.oauth.google")}</span>
      </div>
      <div className={styles.facebook}>
        <SiFacebook className={styles.fbIcon} />
        <span>{t("header.auth.oauth.facebook")}</span>
      </div>
    </div>
  );
};

export default Oauth;
