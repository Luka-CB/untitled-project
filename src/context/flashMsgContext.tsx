import { createContext, ReactNode, useEffect, useState } from "react";

interface childrenIFace {
  children: ReactNode;
}

interface contextIFace {
  errorMsg: string;
  setErrorMsg: any;
  successMsg: string;
  setSuccessMsg: any;
}

export const FlashMsgContext = createContext({} as contextIFace);

const FlashMsgProvider = ({ children }: childrenIFace) => {
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  useEffect(() => {
    let timeout: any;

    if (errorMsg) {
      timeout = setTimeout(() => {
        setErrorMsg("");
      }, 3500);
    }

    return () => clearTimeout(timeout);
  }, [errorMsg]);

  const values = {
    errorMsg,
    setErrorMsg,
    successMsg,
    setSuccessMsg,
  };

  return (
    <FlashMsgContext.Provider value={values}>
      {children}
    </FlashMsgContext.Provider>
  );
};

export default FlashMsgProvider;
