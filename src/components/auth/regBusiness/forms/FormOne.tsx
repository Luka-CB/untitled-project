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
        <div className={styles.names}>
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
        </div>
        <input
          className={styles.formOneInput}
          type="email"
          placeholder="Enter email *"
          name="email"
          value={regBusinessData.email}
          onChange={handleInputChange}
          required
        />
        <div className={styles.contactInput}>
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            className={styles.formOneInput}
            type="number"
            placeholder="Enter phone number"
            name="phoneNumber"
            value={regBusinessData.phoneNumber}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.passwords}>
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
          <p>Must be at least 6 characters long</p>
        </div>
        <div className={styles.gender}>
          <label htmlFor="gender">Choose Gender*:</label>
          <div className={styles.inputs}>
            <div className={styles.male}>
              <label htmlFor="gender">Male</label>
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
              <label htmlFor="gender">Female</label>
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
        </div>
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
