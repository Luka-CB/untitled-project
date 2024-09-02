import { ChangeEvent, useContext, useState } from "react";
import styles from "./Address.module.scss";
import { v4 as uuidv4 } from "uuid";
import { FaCircleInfo } from "react-icons/fa6";
import { IoMdCloseCircle } from "react-icons/io";
import InfoPopup from "../../../../infoPopup/InfoPopup";
import { AnimatePresence, motion } from "framer-motion";
import { InfoPopupContext } from "../../../../../context/infoPopupContext";
import { AddressInputsContext } from "../../../../../context/addressInputsContext";

const Address: React.FC = () => {
  const { togglePopup, setTogglePopup } = useContext(InfoPopupContext);
  const { addresses, setAddresses } = useContext(AddressInputsContext);

  const handleAddMoreAddress = () => {
    setAddresses((prev: any) => [
      ...prev,
      {
        id: uuidv4(),
        city: "",
        village: "",
        preciseAddress: "",
        lat: "",
        long: "",
        isDefault: false,
      },
    ]);

    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  const handleRemoveAdditionalAddress = (id: string) => {
    const newArr = addresses.filter((x) => x.id !== id);
    setAddresses(newArr);
  };

  const handleCityInputOnChange = (
    e: ChangeEvent<HTMLInputElement>,
    i: number
  ) => {
    let data = [...addresses];
    data[i]["city"] = e.target.value;
    setAddresses(data);
  };
  const handleVillageInputOnChange = (
    e: ChangeEvent<HTMLInputElement>,
    i: number
  ) => {
    let data = [...addresses];
    data[i]["village"] = e.target.value;
    setAddresses(data);
  };
  const handlePreciseAddressInputOnChange = (
    e: ChangeEvent<HTMLInputElement>,
    i: number
  ) => {
    let data = [...addresses];
    data[i]["preciseAddress"] = e.target.value;
    setAddresses(data);
  };
  const handleLatInputOnChange = (
    e: ChangeEvent<HTMLInputElement>,
    i: number
  ) => {
    let data = [...addresses];
    data[i]["lat"] = e.target.value;
    setAddresses(data);
  };
  const handleLongInputOnChange = (
    e: ChangeEvent<HTMLInputElement>,
    i: number
  ) => {
    let data = [...addresses];
    data[i]["long"] = e.target.value;
    setAddresses(data);
  };

  return (
    <>
      <AnimatePresence>
        {addresses.map((x, i) => (
          <motion.div
            initial={{ opacity: 0, translateX: 100 }}
            animate={{
              opacity: 1,
              translateX: 0,
              transition: { duration: 0.5, type: "spring" },
            }}
            exit={{
              opacity: 0,
              translateX: 100,
              transition: { duration: 0.3, type: "spring" },
            }}
            className={styles.address}
            key={x.id}
          >
            <div className={styles.row1}>
              <input
                className={styles.formTwoInput}
                type="text"
                name="city"
                placeholder="City/Town"
                value={x.city}
                onChange={(e) => handleCityInputOnChange(e, i)}
              />
              <input
                className={styles.formTwoInput}
                type="text"
                name="village"
                placeholder="Village"
                value={x.village}
                onChange={(e) => handleVillageInputOnChange(e, i)}
              />
            </div>
            <div className={styles.row2}>
              <input
                className={styles.formTwoInput}
                type="text"
                name="preciseAddress"
                placeholder="Precise address e.g. street, avenue etc."
                value={x.preciseAddress}
                onChange={(e) => handlePreciseAddressInputOnChange(e, i)}
              />
            </div>
            <div className={styles.row3}>
              <input
                className={styles.formTwoInput}
                type="text"
                name="lat"
                placeholder="Latitude"
                value={x.lat}
                onChange={(e) => handleLatInputOnChange(e, i)}
              />
              <input
                className={styles.formTwoInput}
                type="text"
                name="long"
                placeholder="Longitude"
                value={x.long}
                onChange={(e) => handleLongInputOnChange(e, i)}
              />
              {x.isDefault ? (
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
              ) : (
                <div className={styles.remove}>
                  <IoMdCloseCircle
                    className={styles.closeIcon}
                    onClick={() => handleRemoveAdditionalAddress(x.id)}
                  />
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </AnimatePresence>

      <button
        type="button"
        className={styles.addAddressBtn}
        onClick={handleAddMoreAddress}
      >
        Add Address
      </button>
    </>
  );
};

export default Address;
