import {
   useContext, 
   useCallback 
} from "react";
import AuthorizationContext from "../context/AuthorizationContext";
import AuthService from "../services/AuthServices";

const useAuth = () => {
  const { isAuthenticated, setIsAuthenticated, user, setUser } = useContext(
    AuthorizationContext.context
  );

  const checkAuthenticated = useCallback(async () => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
      return token;
    }
  }, [setIsAuthenticated]);

  const login = useCallback(async (formData) => {
    return new Promise((resolve, reject) => {
      AuthService.login(formData)
        .then(async (data) => {
          localStorage.setItem("token", data.token);
          localStorage.setItem("expireTime", data.expiry);
          resolve(data);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }, []);

  const registerUser = useCallback(async (formData) => {
    return new Promise((resolve, reject) => {
      AuthService.register(formData)
        .then(async (data) => {
          setUser(data.users);
          localStorage.setItem("user", JSON.stringify(data.users));
          localStorage.setItem("token", JSON.stringify(data.token));
          resolve(data);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("expireTime");
    localStorage.removeItem("user");
  };

  return {
    login,
    user,
    setUser,
    registerUser,
    isAuthenticated,
    checkAuthenticated,
    logout,
  };
};

export default useAuth;
