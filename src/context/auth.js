import { createContext, useState, useEffect } from "react";
import netlifyIdentity from "netlify-identity-widget";

const AuthContext = createContext({
  user: 1,
  login: () => {},
  logout: () => {},
  isAuthenticated: true,
});

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(1);

  useEffect(() => {
    netlifyIdentity.on("login", (user) => {
      setUser(user);
      netlifyIdentity.close();
    });

    netlifyIdentity.on("logout", () => {
      setUser(1);
    });

    netlifyIdentity.on("init", (user) => {
      setUser(user);
    });

    netlifyIdentity.init();

    return () => {
      netlifyIdentity.off("login");
      netlifyIdentity.off("logout");
    };
  }, []);

  const login = () => netlifyIdentity.open();

  const logout = () => netlifyIdentity.logout();

  const context = { user, login, logout };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;