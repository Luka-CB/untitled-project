import { createContext, ReactNode, useState } from "react";

interface childrenIFace {
  children: ReactNode;
}

interface contextIFace {
  isUserOptionsOpen: boolean;
  toggleUserOptions: (value: boolean) => void;
}

export const UserOptionsContext = createContext({} as contextIFace);

const UserOptionsProvider = ({ children }: childrenIFace) => {
  const [isUserOptionsOpen, setIsUserOptionsOpen] = useState(false);

  const toggleUserOptions = (value: boolean) => setIsUserOptionsOpen(value);

  const values = {
    isUserOptionsOpen,
    toggleUserOptions,
  };

  return (
    <UserOptionsContext.Provider value={values}>
      {children}
    </UserOptionsContext.Provider>
  );
};

export default UserOptionsProvider;
