import React, {
  useState, 
  createContext
} from "react";

const Context = createContext({});

export const AuthorizationContextProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [checkToken, setCheckToken] = useState("");

  const values = {
    isAuthenticated,
    setIsAuthenticated,
    user,
    setUser,
    checkToken,
    setCheckToken,
  };

  return <Context.Provider value={values}> {children} </Context.Provider>;
};

AuthorizationContextProvider.context = Context;
export default AuthorizationContextProvider;
