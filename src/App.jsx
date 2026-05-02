import React from "react";
import AppRoutes from "./routes/AppRoutes";
import { LanguageProvider } from "./contexts/LanguageContext";
import { HelmetProvider } from "react-helmet-async";

const App = () => {
  return (
    <HelmetProvider>
      <LanguageProvider>
        <AppRoutes />
      </LanguageProvider>
    </HelmetProvider>
  );
};

export default App;