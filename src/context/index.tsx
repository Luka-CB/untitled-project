import InfoPopupProvider from "./infoPopupContext";
import LanguageProvider from "./languageContext";
import ProfileImageProvider from "./profileImageContext";
import RegBusinessProvider from "./regBusinessContext";
import RegSelectProvider from "./regSelectContext";
import SelectTypeProvider from "./selectTypeContext";

const ContextProvider = ({ children }: any) => {
  return (
    <LanguageProvider>
      <RegSelectProvider>
        <ProfileImageProvider>
          <RegBusinessProvider>
            <InfoPopupProvider>
              <SelectTypeProvider>{children}</SelectTypeProvider>
            </InfoPopupProvider>
          </RegBusinessProvider>
        </ProfileImageProvider>
      </RegSelectProvider>
    </LanguageProvider>
  );
};

export default ContextProvider;
