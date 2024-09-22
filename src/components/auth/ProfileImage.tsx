import { useContext } from "react";
import styles from "./ProfileImage.module.scss";
import { MdAddPhotoAlternate } from "react-icons/md";
import { ProfileImageContext } from "../../context/profileImageContext";
import { FlashMsgContext } from "../../context/flashMsgContext";
import { useTranslation } from "react-i18next";

const ProfileImage: React.FC = () => {
  const { t } = useTranslation();

  const { setImage, image } = useContext(ProfileImageContext);
  const { setErrorMsg } = useContext(FlashMsgContext);

  const handleChooseFile = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      if (file.size > 1000000) {
        return setErrorMsg(t("header.flashMsg.error.imageSize"));
      }
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className={styles.container}>
      <label htmlFor="uploadImage">
        <div
          className={styles.imageWrapper}
          data-title={t("header.dataTitle.profileImg")}
        >
          {image ? (
            <img src={image} alt="avatar" />
          ) : (
            <MdAddPhotoAlternate className={styles.icon} />
          )}
        </div>
      </label>
      <input
        type="file"
        id="uploadImage"
        hidden
        accept="image/*"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          e.target.files !== null && handleChooseFile(e.target.files[0])
        }
      />
    </div>
  );
};

export default ProfileImage;
