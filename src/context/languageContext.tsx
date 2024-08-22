import { createContext, ReactNode, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

interface childrenIFace {
  children: ReactNode;
}

interface contextIFace {
  currentLanguage: string;
  toggleLanguage: () => void;
}

export const LanguageContext = createContext({} as contextIFace);

const LanguageProvider = ({ children }: childrenIFace) => {
  const {
    i18n: { changeLanguage, language },
  } = useTranslation();

  const [currentLanguage, setCurrentLanguage] = useState(
    localStorage.getItem("lang")
      ? JSON.parse(localStorage.getItem("lang") || "")
      : language
  );

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === "en" ? "ka" : "en";
    setCurrentLanguage(newLanguage);
    changeLanguage(newLanguage);
    localStorage.setItem("lang", JSON.stringify(newLanguage));
  };

  useEffect(() => {
    if (currentLanguage) changeLanguage(currentLanguage);
  }, [currentLanguage]);

  const values = {
    currentLanguage,
    toggleLanguage,
  };

  return (
    <LanguageContext.Provider value={values}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
