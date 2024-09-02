import { useContext } from "react";
import styles from "./ProfileImage.module.scss";
import { MdAddPhotoAlternate } from "react-icons/md";
import { ProfileImageContext } from "../../context/profileImageContext";

const ProfileImage: React.FC = () => {
  const { setImage, image } = useContext(ProfileImageContext);

  const handleChooseFile = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className={styles.container}>
      <label htmlFor="uploadImage">
        <div className={styles.imageWrapper} data-title="Upload Profile Image">
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
