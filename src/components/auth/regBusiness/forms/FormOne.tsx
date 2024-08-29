import { ChangeEvent, useContext } from "react";
import { RegBusinessContext } from "../../../../context/regBusinessContext";
import styles from "./FormOne.module.scss";

const FormOne: React.FC = () => {
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
        <input
          className={styles.formOneInput}
          type="text"
          placeholder="Enter first name *"
          name="firstName"
          value={regBusinessData.firstName}
          onChange={handleInputChange}
          required
        />
        <input
          className={styles.formOneInput}
          type="text"
          placeholder="Enter last name *"
          name="lastName"
          value={regBusinessData.lastName}
          onChange={handleInputChange}
          required
        />
        <div className={styles.contactInputs}>
          <input
            className={styles.formOneInput}
            type="email"
            placeholder="Enter email *"
            name="email"
            value={regBusinessData.email}
            onChange={handleInputChange}
            required
          />
          <input
            className={styles.formOneInput}
            type="number"
            placeholder="Enter phone number"
            name="phoneNumber"
            value={regBusinessData.phoneNumber}
            onChange={handleInputChange}
          />
        </div>
        <input
          className={styles.formOneInput}
          type="password"
          placeholder="Enter password *"
          name="password"
          onChange={handleInputChange}
          required
        />
        <input
          className={styles.formOneInput}
          type="password"
          placeholder="Retype password *"
          name="confirmPassword"
          onChange={handleInputChange}
          required
        />
      </div>
      <hr />
      <div className={styles.row2}>
        <input
          className={styles.formOneInput}
          type="text"
          placeholder="Company/Business name *"
          name="companyName"
          value={regBusinessData.companyName}
          onChange={handleInputChange}
          required
        />
        <input
          className={styles.formOneInput}
          type="number"
          placeholder="Date of establishment"
          name="est"
          value={regBusinessData.est}
          onChange={handleInputChange}
        />
        <textarea
          placeholder="Tell people little more about your company/business"
          name="description"
          value={regBusinessData.description}
          onChange={handleInputChange}
        ></textarea>
      </div>
    </>
  );
};

export default FormOne;
