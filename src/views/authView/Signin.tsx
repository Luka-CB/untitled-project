import { useTranslation } from "react-i18next";
import styles from "./Signin.module.scss";
import loginImg from "../../assets/imgs/login.png";
import { Oauth, RegSelect } from "../../components";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { RegSelectContext } from "../../context/regSelectContext";

const Signin: React.FC = () => {
  const { t } = useTranslation();

  const { pickedOption } = useContext(RegSelectContext);

  return (
    <main className={styles.container}>
      <div className={styles.auth}>
        <div className={styles.col1}>
          <div className={styles.info}>
            <h1>{t("header.auth.signin.info.title")}</h1>
            <p>{t("header.auth.signin.info.description")}</p>
          </div>
          <div className={styles.image}>
            <img src={loginImg} alt="login" />
          </div>
        </div>
        <div className={styles.col2}>
          <div className={styles.content}>
            <RegSelect title="Sign in as" />
            {pickedOption === "customer" ? (
              <>
                <Oauth />
                <div className={styles.or}>
                  <div className={styles.leftLine}></div>
                  <span>{t("header.auth.signin.or")}</span>
                  <div className={styles.rightLine}></div>
                </div>
              </>
            ) : null}
            <form>
              <input
                type="email"
                placeholder={t("header.auth.signin.form.email")}
              />
              <input
                type="password"
                placeholder={t("header.auth.signin.form.password")}
              />
              <button>{t("header.auth.signin.form.btn")}</button>
            </form>
            <div className={styles.note}>
              <h4>
                {t("header.auth.signin.note.text")}{" "}
                <Link to={{ pathname: "/signup" }}>
                  {t("header.auth.signin.note.link")}
                </Link>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signin;
