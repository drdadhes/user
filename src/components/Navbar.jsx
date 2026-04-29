// import React, { useState, useEffect } from "react";
// import { Leaf, Menu, X, ChevronDown } from "lucide-react";
// import { Link } from "react-router-dom";

// import enTranslations from "../locales/en.json";
// import teTranslations from "../locales/te.json";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [currentLang, setCurrentLang] = useState(() => {
//     return localStorage.getItem("appLanguage") || "en";
//   });
//   const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

//   useEffect(() => {
//     // Dispatch event when language changes so other components can update
//     window.dispatchEvent(
//       new CustomEvent("languageChanged", { detail: currentLang }),
//     );
//   }, [currentLang]);

//   const t =
//     currentLang === "te" ? teTranslations.navbar : enTranslations.navbar;

//   const navItems = [
//     { id: "", label: t.navItems.home },
//     { id: "", label: t.navItems.products },
//     { id: "videos", label: t.navItems.videos },
//   ];

//   const handleLanguageChange = (langCode) => {
//     setCurrentLang(langCode);
//     localStorage.setItem("appLanguage", langCode);
//     setIsLangDropdownOpen(false);
//   };

//   return (
//     <header className="fixed top-0 left-0 right-0 z-50 ">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <div className="mt-4 rounded-2xl border border-emerald-100 bg-white shadow-sm">
//           <nav className="flex items-center justify-between px-4 sm:px-6 py-4">
//             <div className="flex items-center space-x-3 order-first">
//               <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 border border-emerald-100">
//                 <Leaf className="h-5 w-5 text-emerald-700" />
//               </div>
//               <div className="sm:block">
//                 <div className="text-xlnpm  font-serif font-bold text-slate-900">
//                   {t.logo.main}
//                 </div>
//                 <div className="text-xs tracking-wide text-emerald-700">
//                   {t.logo.tagline}
//                 </div>
//               </div>
//             </div>

//             <ul className="hidden lg:flex items-center space-x-10 mx-auto">
//               {navItems.map((item) => (
//                 <li key={item.id} className="relative">

//                   <Link to={`${item.id}`}>   <span className="cursor-pointer">{item.label}</span>
//                     <span className="absolute -bottom-1 left-0 h-px w-0 bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
//                  </Link>
//                 </li>
//               ))}
//             </ul>

//             <div className="hidden lg:flex items-center space-x-4">
//               <div className="relative">
//                 <button
//                   onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
//                   className="flex items-center space-x-1 text-sm font-medium text-slate-700 hover:text-emerald-700 transition-colors px-3 py-2 rounded-lg hover:bg-emerald-50"
//                 >
//                   <span>
//                     {currentLang === "en" ? t.language.en : t.language.te}
//                   </span>
//                   <ChevronDown
//                     className={`h-4 w-4 transition-transform ${isLangDropdownOpen ? "rotate-180" : ""}`}
//                   />
//                 </button>

//                 {isLangDropdownOpen && (
//                   <div className="absolute right-0 mt-2 w-40 rounded-xl border border-emerald-100 bg-white/90 backdrop-blur-xl shadow-lg py-2">
//                     <button
//                       onClick={() => handleLanguageChange("en")}
//                       className={`w-full text-left px-4 py-2 text-sm transition-colors ${
//                         currentLang === "en"
//                           ? "text-emerald-700 bg-emerald-50 font-medium"
//                           : "text-slate-700 hover:text-emerald-700 hover:bg-emerald-50"
//                       }`}
//                     >
//                       {t.language.en}
//                     </button>
//                     <button
//                       onClick={() => handleLanguageChange("te")}
//                       className={`w-full text-left px-4 py-2 text-sm transition-colors ${
//                         currentLang === "te"
//                           ? "text-emerald-700 bg-emerald-50 font-medium"
//                           : "text-slate-700 hover:text-emerald-700 hover:bg-emerald-50"
//                       }`}
//                     >
//                       {t.language.te}
//                     </button>
//                   </div>
//                 )}
//               </div>

//               <button className="inline-flex items-center rounded-xl border border-emerald-200 px-5 py-2.5 text-sm font-medium text-emerald-700 transition hover:bg-emerald-50">
//                 {t.cta}
//               </button>
//             </div>

//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="lg:hidden p-2 rounded-lg text-slate-600 hover:text-emerald-700 hover:bg-emerald-50 transition-colors duration-200 order-last"
//               aria-label="Toggle menu"
//             >
//               {isOpen ? (
//                 <X className="h-6 w-6" />
//               ) : (
//                 <Menu className="h-6 w-6" />
//               )}
//             </button>
//           </nav>

//           <div
//             className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
//               isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
//             }`}
//           >
//             <div className="px-4 pb-4 space-y-1">
//               <div className="py-2">
//                 <div className="text-xs font-medium text-slate-500 mb-2 px-2">
//                   Select Language
//                 </div>
//                 <div className="grid grid-cols-2 gap-2">
//                   <button
//                     onClick={() => handleLanguageChange("en")}
//                     className={`px-4 py-2 text-sm font-medium rounded-lg border transition-colors ${
//                       currentLang === "en"
//                         ? "border-emerald-300 text-emerald-700 bg-emerald-50"
//                         : "border-emerald-100 text-slate-700 hover:border-emerald-300 hover:text-emerald-700 hover:bg-emerald-50"
//                     }`}
//                   >
//                     {t.language.en}
//                   </button>
//                   <button
//                     onClick={() => handleLanguageChange("te")}
//                     className={`px-4 py-2 text-sm font-medium rounded-lg border transition-colors ${
//                       currentLang === "te"
//                         ? "border-emerald-300 text-emerald-700 bg-emerald-50"
//                         : "border-emerald-100 text-slate-700 hover:border-emerald-300 hover:text-emerald-700 hover:bg-emerald-50"
//                     }`}
//                   >
//                     {t.language.te}
//                   </button>
//                 </div>
//               </div>

//               <ul className="space-y-1">
//                 {navItems.map((item) => (
//                   <li key={item.id}>
//                     <a
//                       href={`#${item.id}`}
//                       onClick={() => setIsOpen(false)}
//                       className="flex items-center px-4 py-3 text-sm font-medium text-slate-700 hover:text-emerald-700 hover:bg-emerald-50 rounded-lg transition-colors duration-200"
//                     >
//                       {item.label}
//                     </a>
//                   </li>
//                 ))}
//               </ul>

//               <div className="pt-2">
//                 <button
//                   onClick={() => setIsOpen(false)}
//                   className="w-full inline-flex items-center justify-center rounded-xl border border-emerald-200 px-5 py-2.5 text-sm font-medium text-emerald-700 transition hover:bg-emerald-50"
//                 >
//                   {t.cta}
//                 </button>
//               </div>

//               <div className="pt-3 border-t border-emerald-50">
//                 <div className="flex items-center justify-center space-x-2">
//                   <div className="h-1.5 w-1.5 rounded-full bg-emerald-400"></div>
//                   <span className="text-xs text-slate-500 font-medium">
//                     {t.mobileTagline}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;


import React, { useState } from "react";
import { Leaf, Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import logo from "../assets/logo.png";

const Navbar = () => {
  const { currentLang, t, changeLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

  const navItems = [
    { id: "", label: t.navbar.navItems.home },
    // { id: "products", label: t.navbar.navItems.products },
    // { id: "videos", label: t.navbar.navItems.videos },
  ];

  const handleLanguageChange = (langCode) => {
    changeLanguage(langCode);
    setIsLangDropdownOpen(false);
  };

  // Language options with their display names and flags/indicators
  const languageOptions = [
    { code: "en", name: t.navbar.language.en, nativeName: "English" },
    { code: "te", name: t.navbar.language.te, nativeName: "తెలుగు" },
    { code: "hi", name: "हिन्दी", nativeName: "Hindi" }
  ];

  // Get current language display name
  const getCurrentLanguageDisplay = () => {
    switch(currentLang) {
      case "en": return t.navbar.language.en;
      case "te": return t.navbar.language.te;
      case "hi": return "हिन्दी";
      default: return "English";
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-emerald-100 bg-white shadow-sm">
          <nav className="flex items-center justify-between px-4 sm:px-6 py-2">
            <div className="flex items-center space-x-3 order-first">
              <div className="flex h-15 w-15 items-center justify-center rounded-full ">
                <img src={logo} alt="dr dadhes" className="text-emerald-700" />
              </div>
              <div className="sm:block">
                <div className="text-xlnpm font-serif font-bold text-slate-900">
                  {t.navbar.logo.main}
                </div>
                <div className="text-xs tracking-wide text-emerald-700">
                  {t.navbar.logo.tagline}
                </div>
              </div>
            </div>

            <ul className="hidden lg:flex items-center space-x-10 mx-auto">
              {navItems.map((item) => (
                <li key={item.id} className="relative group">
                  <Link to={`/${item.id}`}>
                    <span className="cursor-pointer">{item.label}</span>
                    <span className="absolute -bottom-1 left-0 h-px w-0 bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="hidden lg:flex items-center space-x-4">
              <div className="relative">
                <button
                  onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                  className="flex items-center space-x-1 text-sm font-medium text-slate-700 hover:text-emerald-700 transition-colors px-3 py-2 rounded-lg hover:bg-emerald-50"
                >
                  <span>{getCurrentLanguageDisplay()}</span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${isLangDropdownOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {isLangDropdownOpen && (
                  <>
                    <div 
                      className="fixed inset-0 z-40" 
                      onClick={() => setIsLangDropdownOpen(false)}
                    />
                    <div className="absolute right-0 mt-2 w-48 rounded-xl border border-emerald-100 bg-white/95 backdrop-blur-xl shadow-lg py-2 z-50">
                      {languageOptions.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => handleLanguageChange(lang.code)}
                          className={`w-full text-left px-4 py-2.5 text-sm transition-all duration-200 ${
                            currentLang === lang.code
                              ? "text-emerald-700 bg-emerald-50 font-medium"
                              : "text-slate-700 hover:text-emerald-700 hover:bg-emerald-50"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span>{lang.name}</span>
                            {currentLang === lang.code && (
                              <span className="text-emerald-600 text-xs">✓</span>
                            )}
                          </div>
                          <div className="text-xs text-slate-400 mt-0.5">
                            {lang.nativeName}
                          </div>
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* <button
                onClick={() => {
                  setIsOpen(false);
                  window.location.href = "tel:+919966426060";
                }}
                className="inline-flex items-center rounded-xl border border-emerald-200 px-5 py-2.5 text-sm font-medium text-emerald-700 transition hover:bg-emerald-50"
              >
                {t.navbar.cta}
              </button> */}
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-600 hover:text-emerald-700 hover:bg-emerald-50 transition-colors duration-200 order-last"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </nav>

          {/* Mobile Menu */}
          <div
            className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
              isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-4 pb-4 space-y-1">
              <div className="py-2">
                <div className="text-xs font-medium text-slate-500 mb-2 px-2">
                  Select Language / भाषा चुनें
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {languageOptions.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className={`px-3 py-2 text-sm font-medium rounded-lg border transition-all duration-200 ${
                        currentLang === lang.code
                          ? "border-emerald-300 text-emerald-700 bg-emerald-50"
                          : "border-emerald-100 text-slate-700 hover:border-emerald-300 hover:text-emerald-700 hover:bg-emerald-50"
                      }`}
                    >
                      <div>{lang.name}</div>
                      <div className="text-xs text-slate-400 mt-0.5">
                        {lang.nativeName}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <ul className="space-y-1">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <Link
                      to={`/${item.id}`}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center px-4 py-3 text-sm font-medium text-slate-700 hover:text-emerald-700 hover:bg-emerald-50 rounded-lg transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
{/* 
              <div className="pt-2">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    window.location.href = "tel:+919966426060";
                  }}
                  className="w-full inline-flex items-center justify-center rounded-xl border border-emerald-200 px-5 py-2.5 text-sm font-medium text-emerald-700 transition hover:bg-emerald-50"
                >
                  {t.navbar.cta}
                </button>
              </div> */}

              <div className="pt-3 border-t border-emerald-50">
                <div className="flex items-center justify-center space-x-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-400"></div>
                  <span className="text-xs text-slate-500 font-medium">
                    {t.navbar.mobileTagline}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;