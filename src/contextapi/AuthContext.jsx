import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [isOrganizerLoggedIn, setIsOrganizerLoggedIn] = useState(false);

  useEffect(() => {
    // Check if the user is logged in based on token or session.
    const userToken = localStorage.getItem("userToken");
    const adminToken = localStorage.getItem("adminToken");
    const organizerToken = localStorage.getItem("organizerToken");

    setIsUserLoggedIn(!!userToken);
    setIsAdminLoggedIn(!!adminToken);
    setIsOrganizerLoggedIn(!!organizerToken);
  }, []);

  const login = (role) => {
    // Example: Store tokens in localStorage after login
    localStorage.setItem(`${role}Token`, `${role}TokenValue`);
    if (role === "user") setIsUserLoggedIn(true);
    if (role === "admin") setIsAdminLoggedIn(true);
    if (role === "organizer") setIsOrganizerLoggedIn(true);
  };

  const logout = (role) => {
    localStorage.removeItem(`${role}Token`);
    if (role === "user") setIsUserLoggedIn(false);
    if (role === "admin") setIsAdminLoggedIn(false);
    if (role === "organizer") setIsOrganizerLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isUserLoggedIn,
        isAdminLoggedIn,
        isOrganizerLoggedIn,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
