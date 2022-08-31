import React from "react";
import { AuthorizationContextProvider } from "./context/AuthorizationContext";

import Navigation from "./routes/app";

const App = () => {
  return (
    <div>
      <AuthorizationContextProvider>
        <Navigation />
      </AuthorizationContextProvider>
    </div>
  );
};

export default App;
