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
  const [language, setLanguage] = useState(
    localStorage.getItem("data-language") ?? "en",
  );

  useEffect(() => {
    localStorage.setItem("data-language", language);
  }, [language]);
  return (
    <LanguageContext.Provider
      value={{ language, setLanguage } as LanguageContextInterface}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;