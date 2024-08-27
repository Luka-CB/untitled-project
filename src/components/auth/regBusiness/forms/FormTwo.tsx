import { ChangeEvent, useContext } from "react";
import { RegBusinessContext } from "../../../../context/regBusinessContext";
import styles from "./FormOne.module.scss";

const FormTwo: React.FC = () => {
  //   const { regBusinessData, setRegBusinessData } =
  //     useContext(RegBusinessContext);

  //   const handleInputChange = (
  //     e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  //   ) => {
  //     if (e.target) {
  //       setRegBusinessData((prev: any) => ({
  //         ...prev,
  //         [e.target.name]: e.target.value,
  //       }));
  //     }
  //   };

  return (
    <>
      <div className={styles.row1}>
        <input
          type="text"
          placeholder="Enter first name *"
          name="firstName"
          //   onChange={handleInputChange}
          required
        />
        <input
          type="text"
          placeholder="Enter last name *"
          name="lastName"
          //   onChange={handleInputChange}
          required
        />
        <input
          type="email"
          placeholder="Enter email *"
          name="email"
          //   onChange={handleInputChange}
          required
        />
        <input
          type="password"
          placeholder="Enter password *"
          name="password"
          //   onChange={handleInputChange}
          required
        />
        <input
          type="password"
          placeholder="Retype password *"
          name="confirmPassword"
          //   onChange={handleInputChange}
          required
        />
      </div>
      <hr />
      <div className={styles.row2}>
        <input
          type="text"
          placeholder="Company/Business name *"
          name="companyName"
          //   onChange={handleInputChange}
          required
        />
        <input
          type="number"
          placeholder="Date of establishment"
          name="est"
          //   onChange={handleInputChange}
        />
        <textarea
          placeholder="Tell people little more about your company/business"
          name="description"
          //   onChange={handleInputChange}
        ></textarea>
      </div>
    </>
  );
};

export default FormTwo;
