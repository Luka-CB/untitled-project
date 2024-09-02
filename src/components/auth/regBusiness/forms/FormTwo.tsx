import { ChangeEvent, useContext } from "react";
import Address from "./address/Address";
import styles from "./FormTwo.module.scss";
import { RegBusinessContext } from "../../../../context/regBusinessContext";

const FormTwo: React.FC = () => {
  const { regBusinessData, setRegBusinessData } =
    useContext(RegBusinessContext);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (e.target) {
      setRegBusinessData((prev: any) => ({
        ...prev,
        links: {
          ...prev.links,
          [e.target.name]: e.target.value,
        },
      }));
    }
  };

  return (
    <>
      <DividerTitle title="links" />
      <div className={styles.links}>
        <div className={styles.row1}>
          <input
            className={styles.formTwoInput}
            type="text"
            name="website"
            placeholder="Website url"
            value={regBusinessData.links?.website}
            onChange={handleInputChange}
          />
          <input
            className={styles.formTwoInput}
            type="text"
            name="youtube"
            placeholder="Youtube url"
            value={regBusinessData.links?.youtube}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.row2}>
          <input
            className={styles.formTwoInput}
            type="text"
            name="facebook"
            placeholder="Facebook url"
            value={regBusinessData.links?.facebook}
            onChange={handleInputChange}
          />
          <input
            className={styles.formTwoInput}
            type="text"
            name="instagram"
            placeholder="Instagram url"
            value={regBusinessData.links?.instagram}
            onChange={handleInputChange}
          />
          <input
            className={styles.formTwoInput}
            type="text"
            name="tiktok"
            placeholder="Tiktok url"
            value={regBusinessData.links?.tiktok}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <DividerTitle title="address" />
      <Address />
    </>
  );
};

export default FormTwo;

const DividerTitle: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className={styles.dividerTitle}>
      <div className={styles.line}></div>
      <span>{title}</span>
      <div className={styles.line}></div>
    </div>
  );
};
