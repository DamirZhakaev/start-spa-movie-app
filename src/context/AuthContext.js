import { createContext, useContext, useEffect, useState } from "react";
import { userObserver } from "../auth/firebase";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    userObserver(setCurrentUser);
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

function App() {
  return (
    <AuthContextProvider>
      {/* Ваши другие компоненты и маршруты */}
    </AuthContextProvider>
  );
}

export default AuthContextProvider;
