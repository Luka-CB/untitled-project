import AddressInputsProvider from "./addressInputsContext";
import FlashMsgProvider from "./flashMsgContext";
import InfoPopupProvider from "./infoPopupContext";
import LanguageProvider from "./languageContext";
import ProfileImageProvider from "./profileImageContext";
import RegBusinessProvider from "./regBusinessContext";
import RegSelectProvider from "./regSelectContext";
import SelectTypeProvider from "./selectTypeContext";
import TagsProvider from "./tagsContext";
import UserOptionsProvider from "./userOptionsContext";

const ContextProvider = ({ children }: any) => {
  return (
    <LanguageProvider>
      <RegSelectProvider>
        <ProfileImageProvider>
          <RegBusinessProvider>
            <InfoPopupProvider>
              <SelectTypeProvider>
                <AddressInputsProvider>
                  <TagsProvider>
                    <FlashMsgProvider>
                      <UserOptionsProvider>{children}</UserOptionsProvider>
                    </FlashMsgProvider>
                  </TagsProvider>
                </AddressInputsProvider>
              </SelectTypeProvider>
            </InfoPopupProvider>
          </RegBusinessProvider>
        </ProfileImageProvider>
      </RegSelectProvider>
    </LanguageProvider>
  );
};

export default ContextProvider;
