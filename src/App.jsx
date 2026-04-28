import React from "react";
import AppRoutes from "./routes/AppRoutes";
import { LanguageProvider } from "./contexts/LanguageContext";

const App = () => {
  return (
    <>
      <LanguageProvider>
        <AppRoutes />
      </LanguageProvider>
    </>
  );
};

export default App;
