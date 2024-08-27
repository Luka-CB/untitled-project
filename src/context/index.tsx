import LanguageProvider from "./languageContext";
import ProfileImageProvider from "./profileImageContext";
import RegBusinessProvider from "./regBusinessContext";
import RegSelectProvider from "./regSelectContext";

const ContextProvider = ({ children }: any) => {
  return (
    <LanguageProvider>
      <RegSelectProvider>
        <ProfileImageProvider>
          <RegBusinessProvider>{children}</RegBusinessProvider>
        </ProfileImageProvider>
      </RegSelectProvider>
    </LanguageProvider>
  );
};

export default ContextProvider;
