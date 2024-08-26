import { createContext, ReactNode, useState } from "react";

interface childrenIFace {
  children: ReactNode;
}

interface contextIFace {
  isOptionsOpen: boolean;
  setIsOptionsOpen: any;
  pickedOption: string;
  setPickedOption: any;
}

export const RegSelectContext = createContext({} as contextIFace);

const RegSelectProvider = ({ children }: childrenIFace) => {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const [pickedOption, setPickedOption] = useState("customer");

  const values = {
    isOptionsOpen,
    setIsOptionsOpen,
    pickedOption,
    setPickedOption,
  };

  return (
    <RegSelectContext.Provider value={values}>
      {children}
    </RegSelectContext.Provider>
  );
};

export default RegSelectProvider;
