import { createContext, ReactNode, useState } from "react";

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
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const [pickedOption, setPickedOption] = useState(
    localStorage.getItem("regOption")
      ? JSON.parse(localStorage.getItem("regOption") || "")
      : "customer"
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
