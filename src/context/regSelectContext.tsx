import { createContext, ReactNode, useContext, useState } from "react";
import { LanguageContext } from "./languageContext";

interface childrenIFace {
  children: ReactNode;
}

interface contextIFace {
  isOptionsOpen: boolean;
  setIsOptionsOpen: any;
  pickedOption: string;
  handlePickOption: (value: string) => void;
}

export const RegSelectContext = createContext({} as contextIFace);

const RegSelectProvider = ({ children }: childrenIFace) => {
  const { currentLanguage } = useContext(LanguageContext);

  const defaultPickedOption =
    currentLanguage === "ka" ? "მომხმარებელი" : "customer";

  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const [pickedOption, setPickedOption] = useState(
    localStorage.getItem("regOption")
      ? JSON.parse(localStorage.getItem("regOption") || "")
      : defaultPickedOption
  );

  const handlePickOption = (value: string) => {
    setPickedOption(value);
    localStorage.setItem("regOption", JSON.stringify(value));
    setIsOptionsOpen(false);
  };

  const values = {
    isOptionsOpen,
    setIsOptionsOpen,
    pickedOption,
    handlePickOption,
  };

  return (
    <RegSelectContext.Provider value={values}>
      {children}
    </RegSelectContext.Provider>
  );
};

export default RegSelectProvider;
