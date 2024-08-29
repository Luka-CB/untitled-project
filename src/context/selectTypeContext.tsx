import { createContext, ReactNode, useState } from "react";

interface childrenIFace {
  children: ReactNode;
}

interface pickedTypeIFace {
  typeId: string | number;
  type: string;
}

interface contextIFace {
  toggleDropdown: boolean;
  setToggleDropdown: any;
  pickedType: pickedTypeIFace;
  handlePickType: (type: pickedTypeIFace) => void;
}

export const SelectTypeContext = createContext({} as contextIFace);

const SelectTypeProvider = ({ children }: childrenIFace) => {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [pickedType, setPickedType] = useState({} as pickedTypeIFace);

  const handlePickType = (type: pickedTypeIFace) => {
    setPickedType(type);
    setToggleDropdown(false);
  };

  const values = {
    toggleDropdown,
    setToggleDropdown,
    pickedType,
    handlePickType,
  };

  return (
    <SelectTypeContext.Provider value={values}>
      {children}
    </SelectTypeContext.Provider>
  );
};

export default SelectTypeProvider;
