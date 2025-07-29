import React, { createContext, useContext, useState, useEffect } from "react";


// ✅ Create the context
const AuthContext = createContext();

// ✅ AuthProvider component
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [accessToken,setAccessToken] = useState(null);
 

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    const storedUser = localStorage.getItem("user");
  
    if (token) {
      setIsAuthenticated(true);
      setAccessToken(token)
      if (storedUser) {
        try {
          setUser(JSON.parse(storedUser)); // ✅ parse string to object
        } catch (error) {
          console.error("Error parsing user:", error);
          localStorage.removeItem("user");
        }
      }
    }

    setLoading(false); // ✅ finish loading after checking
  }, []);

  const login = (token, userData) => {
    localStorage.setItem("accessToken", token);
    localStorage.setItem("user", JSON.stringify(userData)); // ✅ store user info
    setAccessToken(token);
    setIsAuthenticated(true);
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
    setAccessToken(null);
    setIsAuthenticated(false);
    setUser(null);

  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout, loading,accessToken }}>
      {children}
    </AuthContext.Provider>
  );
};

// ✅ Custom hook
export const useAuth = () => useContext(AuthContext);
