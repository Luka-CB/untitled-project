import { useTranslation } from "react-i18next";
import styles from "./RegCustomer.module.scss";
import ProfileImage from "./ProfileImage";
import Oauth from "./Oauth";
import { RegCustomerContext } from "../../context/regCustomerContext";
import { ChangeEvent, FormEvent, useContext, useEffect } from "react";
import { FlashMsgContext } from "../../context/flashMsgContext";
import { ProfileImageContext } from "../../context/profileImageContext";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { registerCustomer } from "../../redux/actions/userActions";
import { useNavigate } from "react-router-dom";
import { BtnLoaderSecondary } from "../loaders/BtnLoader";

const RegCustomer: React.FC = () => {
  const { t } = useTranslation();

  const { setErrorMsg } = useContext(FlashMsgContext);
  const { image } = useContext(ProfileImageContext);
  const { regCustomerData, setRegCustomerData, resetRegCustomerData } =
    useContext(RegCustomerContext);

  const { status, error } = useAppSelector((state) => state.registerCustomer);
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (e.target) {
      setRegCustomerData((prev: any) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (regCustomerData.password?.length < 6) {
      return setErrorMsg(t("header.flashMsg.error.passwordLength"));
    }

    if (regCustomerData.password !== regCustomerData.confirmPassword) {
      return setErrorMsg(t("header.flashMsg.error.passwordsMatch"));
    }

    const data = {
      firstName: regCustomerData.firstName,
      lastName: regCustomerData.lastName,
      email: regCustomerData.email,
      gender: regCustomerData.gender,
      image: image || "",
      password: regCustomerData.password,
    };

    dispatch(registerCustomer(data));
  };

  useEffect(() => {
    if (status === "failed") {
      setErrorMsg(error);
    }

    if (status === "success") {
      navigate({ pathname: "/" });
      resetRegCustomerData();
      window.location.reload();
    }
  }, [status]);

  return (
    <>
      <Oauth />
      <div className={styles.or}>
        <div className={styles.leftLine}></div>
        <span>{t("header.auth.signin.or")}</span>
        <div className={styles.rightLine}></div>
      </div>
      <ProfileImage />
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          className={styles.input}
          type="text"
          placeholder={t("header.auth.signup.form.customer.firstName")}
          name="firstName"
          value={regCustomerData.firstName}
          onChange={handleInputChange}
          required
        />
        <input
          className={styles.input}
          type="text"
          placeholder={t("header.auth.signup.form.customer.lastName")}
          name="lastName"
          value={regCustomerData.lastName}
          onChange={handleInputChange}
          required
        />
        <input
          className={styles.input}
          type="email"
          placeholder={t("header.auth.signup.form.customer.email")}
          name="email"
          value={regCustomerData.email}
          onChange={handleInputChange}
          required
        />
        <input
          className={styles.input}
          type="password"
          placeholder={t("header.auth.signup.form.customer.password")}
          name="password"
          onChange={handleInputChange}
          required
        />
        <input
          className={styles.input}
          type="password"
          placeholder={t("header.auth.signup.form.customer.confirmPassword")}
          name="confirmPassword"
          onChange={handleInputChange}
          required
        />
        <div className={styles.gender}>
          <label htmlFor="gender">
            {t("header.auth.signup.form.business.gender.label")}
          </label>
          <div className={styles.inputs}>
            <div className={styles.male}>
              <input
                type="radio"
                name="gender"
                id="male"
                value="male"
                checked={
                  regCustomerData.gender && regCustomerData.gender === "male"
                    ? true
                    : false
                }
                onChange={handleInputChange}
                required
              />
              <label htmlFor="male">
                {t("header.auth.signup.form.customer.gender.options.0")}
              </label>
            </div>
            <div className={styles.female}>
              <input
                type="radio"
                name="gender"
                id="female"
                value="female"
                checked={
                  regCustomerData.gender && regCustomerData.gender === "female"
                    ? true
                    : false
                }
                onChange={handleInputChange}
                required
              />
              <label htmlFor="female">
                {t("header.auth.signup.form.customer.gender.options.1")}
              </label>
            </div>
          </div>
        </div>
        <button className={styles.submitBtn}>
          {status === "loading" ? (
            <BtnLoaderSecondary />
          ) : (
            t("header.auth.signup.form.customer.btn")
          )}
        </button>
      </form>
    </>
  );
};

export default RegCustomer;
