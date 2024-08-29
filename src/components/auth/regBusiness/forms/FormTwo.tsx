import { ChangeEvent, useContext } from "react";
import { RegBusinessContext } from "../../../../context/regBusinessContext";
import styles from "./FormTwo.module.scss";
import { FaCircleInfo } from "react-icons/fa6";
import InfoPopup from "../../../infoPopup/InfoPopup";
import { InfoPopupContext } from "../../../../context/infoPopupContext";
import { AnimatePresence } from "framer-motion";
import SelectType from "./selectType/SelectType";

const FormTwo: React.FC = () => {
  const { togglePopup, setTogglePopup } = useContext(InfoPopupContext);

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
      <DividerTitle title="address" />
      <div className={styles.address}>
        <div className={styles.row1}>
          <input
            className={styles.formTwoInput}
            type="text"
            name="city"
            placeholder="City/Town"
          />
          <input
            className={styles.formTwoInput}
            type="text"
            name="village"
            placeholder="Village"
          />
        </div>
        <div className={styles.row2}>
          <input
            className={styles.formTwoInput}
            type="text"
            name="preciseAddress"
            placeholder="Precise address e.g. street, avenue etc."
          />
        </div>
        <div className={styles.row3}>
          <input
            className={styles.formTwoInput}
            type="text"
            name="lat"
            placeholder="Latitude"
          />
          <input
            className={styles.formTwoInput}
            type="text"
            name="long"
            placeholder="Longitude"
          />
          <div className={styles.info}>
            <FaCircleInfo
              className={styles.infoIcon}
              onMouseEnter={() => setTogglePopup(true)}
              onMouseLeave={() => setTogglePopup(false)}
            />
            <AnimatePresence>
              {togglePopup ? (
                <InfoPopup info="Latitude and longitude are needed to show your company or business on the map, it's optional and you can always add them later." />
              ) : null}
            </AnimatePresence>
          </div>
        </div>
      </div>
      <DividerTitle title="links" />
      <div className={styles.links}>
        <div className={styles.row1}>
          <input
            className={styles.formTwoInput}
            type="text"
            name="website"
            placeholder="Website url"
          />
          <input
            className={styles.formTwoInput}
            type="text"
            name="youtube"
            placeholder="Youtube url"
          />
        </div>
        <div className={styles.row2}>
          <input
            className={styles.formTwoInput}
            type="text"
            name="facebook"
            placeholder="Facebook url"
          />
          <input
            className={styles.formTwoInput}
            type="text"
            name="instagram"
            placeholder="Instagram url"
          />
          <input
            className={styles.formTwoInput}
            type="text"
            name="tiktok"
            placeholder="Tiktok url"
          />
        </div>
      </div>
      <DividerTitle title="type" />
      <SelectType />
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
