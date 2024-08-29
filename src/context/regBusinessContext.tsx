import { createContext, ReactNode, useEffect, useState } from "react";

interface childrenIFace {
  children: ReactNode;
}

interface regDataIFace {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: number;
  password: string;
  confirmPassword: string;
  companyName: string;
  est: number;
  description: string;
}

interface contextIFace {
  regBusinessData: regDataIFace;
  setRegBusinessData: any;
}

const initialData = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: 0,
  password: "",
  confirmPassword: "",
  companyName: "",
  est: 0,
  description: "",
};

const dataFromStorage = localStorage.getItem("regBusinessData")
  ? JSON.parse(localStorage.getItem("regBusinessData") || "")
  : initialData;

export const RegBusinessContext = createContext({} as contextIFace);

const RegBusinessProvider = ({ children }: childrenIFace) => {
  const [regBusinessData, setRegBusinessData] =
    useState<regDataIFace>(dataFromStorage);

  useEffect(() => {
    if (regBusinessData) {
      localStorage.setItem("regBusinessData", JSON.stringify(regBusinessData));
    }
  }, [regBusinessData]);

  const values = {
    regBusinessData,
    setRegBusinessData,
  };

  return (
    <RegBusinessContext.Provider value={values}>
      {children}
    </RegBusinessContext.Provider>
  );
};

export default RegBusinessProvider;
