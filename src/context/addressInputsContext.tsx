import { createContext, ReactNode, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface childrenIFace {
  children: ReactNode;
}

interface addressIFace {
  id: string;
  city: string;
  village: string;
  preciseAddress: string;
  lat: string;
  long: string;
  isDefault: boolean;
}

interface contextIFace {
  addresses: addressIFace[];
  setAddresses: any;
}

const initialData = [
  {
    id: uuidv4(),
    city: "",
    village: "",
    preciseAddress: "",
    lat: "",
    long: "",
    isDefault: true,
  },
];

export const AddressInputsContext = createContext({} as contextIFace);

const AddressInputsProvider = ({ children }: childrenIFace) => {
  const [addresses, setAddresses] = useState<addressIFace[]>(
    localStorage.getItem("addresses")
      ? JSON.parse(localStorage.getItem("addresses") || "")
      : initialData
  );

  useEffect(() => {
    localStorage.setItem("addresses", JSON.stringify(addresses));
  }, [addresses]);

  const values = {
    addresses,
    setAddresses,
  };

  return (
    <AddressInputsContext.Provider value={values}>
      {children}
    </AddressInputsContext.Provider>
  );
};

export default AddressInputsProvider;
