import LanguageProvider from "./languageContext";
import ProfileImageProvider from "./profileImageContext";
import RegSelectProvider from "./regSelectContext";

const ContextProvider = ({ children }: any) => {
  return (
    <LanguageProvider>
      <RegSelectProvider>
        <ProfileImageProvider>{children}</ProfileImageProvider>
      </RegSelectProvider>
    </LanguageProvider>
  );
};

export default ContextProvider;
