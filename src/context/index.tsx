import LanguageProvider from "./languageContext";

const ContextProvider = ({ children }: any) => {
  return <LanguageProvider>{children}</LanguageProvider>;
};

export default ContextProvider;
