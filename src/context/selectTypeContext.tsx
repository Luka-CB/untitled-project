import { createContext, ReactNode, useEffect, useState } from "react";

interface childrenIFace {
  children: ReactNode;
}

interface pickedTypeIFace {
  id: string | number;
  type: string;
}

interface contextIFace {
  toggleDropdown: boolean;
  setToggleDropdown: any;
  pickedTypes: pickedTypeIFace[];
  handlePickType: (type: pickedTypeIFace) => void;
  removePickedType: (id: string | number) => void;
  selectTypeError: boolean;
  setSelectTypeError: any;
}

export const SelectTypeContext = createContext({} as contextIFace);

const SelectTypeProvider = ({ children }: childrenIFace) => {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [selectTypeError, setSelectTypeError] = useState(false);
  const [pickedTypes, setPickedTypes] = useState<pickedTypeIFace[]>(
    localStorage.getItem("categories")
      ? JSON.parse(localStorage.getItem("categories") || "")
      : []
  );

  const handlePickType = (type: pickedTypeIFace) => {
    if (pickedTypes.length >= 3) return;

    setPickedTypes((prev) => [...prev, type]);
    setSelectTypeError(false);
    setToggleDropdown(false);
  };

  const removePickedType = (id: string | number) => {
    const newArr = pickedTypes.filter((type) => type.id !== id);
    setPickedTypes(newArr);
  };

  useEffect(() => {
    localStorage.setItem("categories", JSON.stringify(pickedTypes));
  }, [pickedTypes]);

  const values = {
    toggleDropdown,
    setToggleDropdown,
    pickedTypes,
    handlePickType,
    removePickedType,
    selectTypeError,
    setSelectTypeError,
  };

  return (
    <SelectTypeContext.Provider value={values}>
      {children}
    </SelectTypeContext.Provider>
  );
};

export default SelectTypeProvider;
