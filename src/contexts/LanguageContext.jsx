// import React, { createContext, useState, useContext, useEffect } from 'react';
// import enTranslations from "../locales/en.json";
// import teTranslations from "../locales/te.json";

// const translations = {
//   en: enTranslations,
//   te: teTranslations
// };

// const LanguageContext = createContext();

// export const LanguageProvider = ({ children }) => {
//   const [currentLang, setCurrentLang] = useState(() => {
//     return localStorage.getItem("appLanguage") || "en";
//   });

//   const t = translations[currentLang];

//   useEffect(() => {
//     localStorage.setItem("appLanguage", currentLang);
//   }, [currentLang]);

//   const changeLanguage = (langCode) => {
//     setCurrentLang(langCode);
//   };

//   return (
//     <LanguageContext.Provider value={{ currentLang, t, changeLanguage }}>
//       {children}
//     </LanguageContext.Provider>
//   );
// };

// export const useLanguage = () => {
//   const context = useContext(LanguageContext);
//   if (!context) {
//     throw new Error("useLanguage must be used within a LanguageProvider");
//   }
//   return context;
// };


import React, { createContext, useState, useContext, useEffect } from 'react';
import enTranslations from "../locales/en.json";
import teTranslations from "../locales/te.json";
import hiTranslations from "../locales/hi.json"
const translations = {
  en: enTranslations,
  te: teTranslations,
  hi:hiTranslations,
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [currentLang, setCurrentLang] = useState(() => {
    return localStorage.getItem("appLanguage") || "en";
  });

  const t = translations[currentLang];

  useEffect(() => {
    localStorage.setItem("appLanguage", currentLang);
    // Set HTML lang attribute for font switching
    document.documentElement.setAttribute("lang", currentLang);
  }, [currentLang]);

  const changeLanguage = (langCode) => {
    setCurrentLang(langCode);
  };

  return (
    <LanguageContext.Provider value={{ currentLang, t, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};