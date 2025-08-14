// LanguageContext.tsx
import {
  createContext,
  useContext,
  useState,
  type FC,
  type ReactNode,
} from "react";

interface IProps {
  children: ReactNode;
}
const LanguageContext = createContext<{
  lang: string;
  setLang: (lang: string) => void;
}>({
  lang: "en",
  setLang: () => {},
});

const LanguageProvider: FC<IProps> = ({ children }) => {
  const [lang, setLang] = useState("en");

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

export default LanguageProvider;
