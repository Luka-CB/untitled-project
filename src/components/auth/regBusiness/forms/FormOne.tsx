import { ChangeEvent, useContext } from "react";
import { RegBusinessContext } from "../../../../context/regBusinessContext";
import styles from "./FormOne.module.scss";
import { useTranslation } from "react-i18next";

const FormOne: React.FC = () => {
  const { t } = useTranslation();

  const { regBusinessData, setRegBusinessData } =
    useContext(RegBusinessContext);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (e.target) {
      setRegBusinessData((prev: any) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    }
  };

  return (
    <>
      <div className={styles.row1}>
        <div className={styles.names}>
          <input
            className={styles.formOneInput}
            type="text"
            placeholder={t("header.auth.signup.form.business.firstName")}
            name="firstName"
            value={regBusinessData.firstName}
            onChange={handleInputChange}
            required
          />
          <input
            className={styles.formOneInput}
            type="text"
            placeholder={t("header.auth.signup.form.business.lastName")}
            name="lastName"
            value={regBusinessData.lastName}
            onChange={handleInputChange}
            required
          />
        </div>
        <input
          className={styles.formOneInput}
          type="email"
          placeholder={t("header.auth.signup.form.business.email")}
          name="email"
          value={regBusinessData.email}
          onChange={handleInputChange}
          required
        />
        <div className={styles.contactInput}>
          <label htmlFor="phoneNumber">
            {t("header.auth.signup.form.business.phoneNumber.label")}
          </label>
          <input
            className={styles.formOneInput}
            type="number"
            placeholder={t(
              "header.auth.signup.form.business.phoneNumber.placeholder"
            )}
            name="phoneNumber"
            value={regBusinessData.phoneNumber}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.passwords}>
          <input
            className={styles.formOneInput}
            type="password"
            placeholder={t("header.auth.signup.form.business.password")}
            name="password"
            onChange={handleInputChange}
            required
          />
          <input
            className={styles.formOneInput}
            type="password"
            placeholder={t("header.auth.signup.form.business.confirmPassword")}
            name="confirmPassword"
            onChange={handleInputChange}
            required
          />
          <p>{t("header.auth.signup.form.business.warning")}</p>
        </div>
        <div className={styles.gender}>
          <label htmlFor="gender">
            {t("header.auth.signup.form.business.gender.label")}
          </label>
          <div className={styles.inputs}>
            <div className={styles.male}>
              <label htmlFor="gender">
                {t("header.auth.signup.form.business.gender.options.0")}
              </label>
              <input
                type="radio"
                name="gender"
                id="male"
                value="male"
                checked={
                  regBusinessData.gender && regBusinessData.gender === "male"
                    ? true
                    : false
                }
                onChange={handleInputChange}
                required
              />
            </div>
            <div className={styles.female}>
              <label htmlFor="gender">
                {t("header.auth.signup.form.business.gender.options.1")}
              </label>
              <input
                type="radio"
                name="gender"
                id="female"
                value="female"
                checked={
                  regBusinessData.gender && regBusinessData.gender === "female"
                    ? true
                    : false
                }
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className={styles.row2}>
        <div className={styles.company}>
          <input
            className={styles.formOneInput}
            type="text"
            placeholder={t("header.auth.signup.form.business.companyName")}
            name="companyName"
            value={regBusinessData.companyName}
            onChange={handleInputChange}
            required
          />
          <input
            className={styles.formOneInput}
            type="number"
            placeholder={t("header.auth.signup.form.business.est")}
            name="est"
            value={regBusinessData.est}
            onChange={handleInputChange}
          />
        </div>
        <textarea
          placeholder={t("header.auth.signup.form.business.description")}
          name="description"
          value={regBusinessData.description}
          onChange={handleInputChange}
        ></textarea>
      </div>
    </>
  );
};

export default FormOne;
