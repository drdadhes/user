import React from "react";
import AppRoutes from "./routes/AppRoutes";
import { LanguageProvider } from "./contexts/LanguageContext";
import { HelmetProvider } from "react-helmet-async";
import BackgroundMusic from "./components/BackgroundMusic";

const App = () => {
  return (
    <HelmetProvider>
      <LanguageProvider>
                <BackgroundMusic />
        <AppRoutes />
      </LanguageProvider>
    </HelmetProvider>
  );
};

export default App;