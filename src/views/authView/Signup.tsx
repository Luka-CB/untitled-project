import { useTranslation } from "react-i18next";
import styles from "./Signup.module.scss";
import regImg from "../../assets/imgs/register.png";
import { RegBusiness, RegCustomer, RegSelect } from "../../components";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { RegSelectContext } from "../../context/regSelectContext";
import { IoIosWarning } from "react-icons/io";

const Signup: React.FC = () => {
  const { pickedOption } = useContext(RegSelectContext);

  const { t } = useTranslation();

  return (
    <main className={styles.container}>
      <div className={styles.auth}>
        <div className={styles.col1}>
          <div className={styles.info}>
            <h1>{t("header.auth.signup.info.title")}</h1>
            <p>{t("header.auth.signup.info.description")}</p>
          </div>
          <div className={styles.image}>
            <img src={regImg} alt="register" />
          </div>
        </div>
        <div className={styles.col2}>
          <div className={styles.content}>
            <div className={styles.msg}>
              <IoIosWarning className={styles.warningIcon} />
              <p>
                <b>*</b> - indicates required field!
              </p>
            </div>
            <RegSelect />
            {pickedOption === "customer" ? <RegCustomer /> : <RegBusiness />}
            <div className={styles.note}>
              <h4>
                {t("header.auth.signup.note.text")}{" "}
                <Link to={{ pathname: "/signin" }}>
                  {t("header.auth.signup.note.link")}
                </Link>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;
