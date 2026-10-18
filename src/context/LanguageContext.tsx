import { createContext, useEffect, useState } from "react";

type Language = "en" | "de";
interface LanguageContextInterface {
  language: Language;
  setLanguage: React.Dispatch<React.SetStateAction<Language>>;
}
export const LanguageContext = createContext<
  LanguageContextInterface | undefined
>(undefined);

const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() =>
    localStorage.getItem("data-language") === "de" ? "de" : "en",
  );

  useEffect(() => {
    localStorage.setItem("data-language", language);
    document.documentElement.lang = language;
  }, [language]);
  return (
    <LanguageContext.Provider
      value={{ language, setLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;