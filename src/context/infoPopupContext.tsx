import { createContext, ReactNode, useState } from "react";

interface childrenIFace {
  children: ReactNode;
}

interface contextIFace {
  togglePopup: boolean;
  setTogglePopup: any;
}

export const InfoPopupContext = createContext({} as contextIFace);

const InfoPopupProvider = ({ children }: childrenIFace) => {
  const [togglePopup, setTogglePopup] = useState(false);

  const values = {
    togglePopup,
    setTogglePopup,
  };

  return (
    <InfoPopupContext.Provider value={values}>
      {children}
    </InfoPopupContext.Provider>
  );
};

export default InfoPopupProvider;
