import { createContext, ReactNode, useState } from "react";

interface childrenIFace {
  children: ReactNode;
}

interface contextIFace {
  image: string;
  setImage: any;
  imageError: string;
  setImageError: any;
}

export const ProfileImageContext = createContext({} as contextIFace);

const ProfileImageProvider = ({ children }: childrenIFace) => {
  const [image, setImage] = useState("");
  const [imageError, setImageError] = useState("");

  const values = {
    image,
    setImage,
    imageError,
    setImageError,
  };

  return (
    <ProfileImageContext.Provider value={values}>
      {children}
    </ProfileImageContext.Provider>
  );
};

export default ProfileImageProvider;
