import { FormEvent, useContext, useState } from "react";
import styles from "./RegBusiness.module.scss";
import FormOne from "./forms/FormOne";
import FormTwo from "./forms/FormTwo";
import FormThree from "./forms/FormThree";
import { RegBusinessContext } from "../../../context/regBusinessContext";
import { FlashMsgContext } from "../../../context/flashMsgContext";
import { SelectTypeContext } from "../../../context/selectTypeContext";
import { AddressInputsContext } from "../../../context/addressInputsContext";
import { ProfileImageContext } from "../../../context/profileImageContext";
import { TagsContext } from "../../../context/tagsContext";
import { useTranslation } from "react-i18next";

const RegBusiness: React.FC = () => {
  const { t } = useTranslation();

  const [pageCount, setPageCount] = useState(
    localStorage.getItem("regBusinessPageCount")
      ? JSON.parse(localStorage.getItem("regBusinessPageCount") || "")
      : 1
  );

  const { regBusinessData } = useContext(RegBusinessContext);
  const { addresses } = useContext(AddressInputsContext);
  const { image } = useContext(ProfileImageContext);
  const { tags } = useContext(TagsContext);
  const { setSelectTypeError, pickedTypes } = useContext(SelectTypeContext);
  const { setErrorMsg } = useContext(FlashMsgContext);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (regBusinessData.password?.length < 6) {
      return setErrorMsg(t("header.flashMsg.error.passwordLength"));
    }

    if (regBusinessData.password !== regBusinessData.confirmPassword) {
      return setErrorMsg(t("header.flashMsg.error.passwordsMatch"));
    }

    if (pageCount < 3) {
      setPageCount((prev: number) => prev + 1);
      localStorage.setItem(
        "regBusinessPageCount",
        JSON.stringify(pageCount + 1)
      );
      return;
    }

    if (!pickedTypes?.length) {
      return setSelectTypeError(true);
    }

    const data = {
      ...regBusinessData,
      addresses,
      image,
      categories: pickedTypes,
      tags,
    };

    console.log(data);
  };

  const handleBackBtn = () => {
    setPageCount((prev: number) => prev - 1);
    localStorage.setItem("regBusinessPageCount", JSON.stringify(pageCount - 1));
  };

  return (
    <div className={styles.container}>
      <div className={styles.indicators}>
        <div className={styles.indicator}></div>
        <div
          className={pageCount > 1 ? styles.indicatorActive : styles.indicator}
        ></div>
        <div
          className={pageCount > 2 ? styles.indicatorActive : styles.indicator}
        ></div>
      </div>
      <form onSubmit={handleSubmit}>
        {pageCount === 1 ? (
          <FormOne />
        ) : pageCount === 2 ? (
          <FormTwo />
        ) : (
          <FormThree />
        )}
        <div className={styles.btns}>
          {pageCount > 1 ? (
            <button
              type="button"
              className={styles.backBtn}
              onClick={handleBackBtn}
            >
              Prev
            </button>
          ) : null}
          <button type="submit" className={styles.submitBtn}>
            {pageCount === 3 ? "Submit" : "Next"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegBusiness;
