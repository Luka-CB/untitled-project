import { FormEvent, useState } from "react";
import styles from "./RegBusiness.module.scss";
import FormOne from "./forms/FormOne";
import FormTwo from "./forms/FormTwo";

const RegBusiness: React.FC = () => {
  const [pageCount, setPageCount] = useState(1);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setPageCount(2);
  };

  const handleBackBtn = () => {
    setPageCount(1);
  };

  return (
    <div className={styles.container}>
      <div className={styles.indicators}>
        <div className={styles.indicator}></div>
        <div
          className={
            pageCount === 2 ? styles.indicatorActive : styles.indicator
          }
        ></div>
      </div>
      <form onSubmit={handleSubmit}>
        {pageCount === 1 ? <FormOne /> : <FormTwo />}
        <div className={styles.btns}>
          {pageCount === 2 ? (
            <button
              type="button"
              className={styles.backBtn}
              onClick={handleBackBtn}
            >
              Prev
            </button>
          ) : null}
          <button type="submit" className={styles.submitBtn}>
            {pageCount === 2 ? "Submit" : "Next"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegBusiness;
