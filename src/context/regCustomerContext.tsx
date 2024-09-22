import { createContext, ReactNode, useEffect, useState } from "react";

interface childrenIFace {
  children: ReactNode;
}

export interface regCustomerDataIFace {
  firstName: string;
  lastName: string;
  email: string;
  image: string;
  password: string;
  confirmPassword?: string;
  gender: string;
}

interface contextIFace {
  regCustomerData: regCustomerDataIFace;
  setRegCustomerData: any;
  resetRegCustomerData: () => void;
}

const initialData = {
  firstName: "",
  lastName: "",
  email: "",
  image: "",
  password: "",
  confirmPassword: "",
  gender: "",
};

const dataFromStorage = localStorage.getItem("regCustomerData")
  ? JSON.parse(localStorage.getItem("regCustomerData") || "")
  : initialData;

export const RegCustomerContext = createContext({} as contextIFace);

const RegCustomerProvider = ({ children }: childrenIFace) => {
  const [regCustomerData, setRegCustomerData] =
    useState<regCustomerDataIFace>(dataFromStorage);

  useEffect(() => {
    if (regCustomerData) {
      localStorage.setItem("regCustomerData", JSON.stringify(regCustomerData));
    }
  }, [regCustomerData]);

  const resetRegCustomerData = () => {
    setRegCustomerData(initialData);
    localStorage.removeItem("regCustomerData");
  };

  const values = {
    regCustomerData,
    setRegCustomerData,
    resetRegCustomerData,
  };

  return (
    <RegCustomerContext.Provider value={values}>
      {children}
    </RegCustomerContext.Provider>
  );
};

export default RegCustomerProvider;
