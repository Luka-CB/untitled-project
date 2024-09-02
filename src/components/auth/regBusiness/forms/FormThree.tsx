import { useContext, useState } from "react";
import ProfileImage from "../../ProfileImage";
import styles from "./FormThree.module.scss";
import SelectType from "./selectType/SelectType";
import { v4 as uuidv4 } from "uuid";
import { IoMdCloseCircle } from "react-icons/io";
import { TagsContext } from "../../../../context/tagsContext";

const FormThree: React.FC = () => {
  const [tagInput, setTagInput] = useState("");

  const { tags, tagCount, addTag, removeTag } = useContext(TagsContext);

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

  const handleInput = (e: any) => {
    if (e.key === "Enter") {
      e.preventDefault();

      addTag({
        id: uuidv4(),
        value: tagInput,
      });
      setTagInput("");
    }
  };

  const handleAddTag = () => {
    addTag({
      id: uuidv4(),
      value: tagInput,
    });

    setTagInput("");
  };

  const handleRemoveTag = (id: string) => {
    removeTag(id);
  };

  return (
    <>
      <div className={styles.imageWrapper}>
        <ProfileImage />
      </div>
      <DividerTitle title="Category" />
      <div className={styles.categoryWrapper}>
        <SelectType />
      </div>
      <DividerTitle title="tags" />
      <div className={styles.tagsWrapper}>
        <div className={styles.inputBox}>
          <input
            className={styles.formThreeInput}
            type="text"
            name="tag"
            placeholder="Add Tag, at least 3 letters"
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            onKeyDown={handleInput}
          />
          <button
            type="button"
            className={styles.addBtn}
            disabled={tagInput.length <= 3}
            onClick={handleAddTag}
          >
            add
          </button>
        </div>
        <div className={styles.tags}>
          {tags.length === 0 ? (
            <p>No Tags!</p>
          ) : (
            <>
              {tags?.map((tag) => (
                <div className={styles.tag} key={tag.id}>
                  <span>{tag.value}</span>
                  <IoMdCloseCircle
                    className={styles.closeIcon}
                    onClick={() => handleRemoveTag(tag.id)}
                  />
                </div>
              ))}
            </>
          )}
        </div>
        <div className={styles.count}>
          <span>{tagCount} / 10</span>
        </div>
      </div>
    </>
  );
};

export default FormThree;

const DividerTitle: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className={styles.dividerTitle}>
      <div className={styles.line}></div>
      <span>{title}</span>
      <div className={styles.line}></div>
    </div>
  );
};
