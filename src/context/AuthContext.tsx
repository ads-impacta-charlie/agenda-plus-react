import React, { useState, useEffect, createContext, useContext } from "react";
import firebase_app from "../../firebaseConfig";
import { onAuthStateChanged, getAuth, User } from "firebase/auth";

const auth = getAuth(firebase_app);
const user = auth.currentUser;

type AuthContextType = {
  user: any;
};

export const AuthContext = createContext<AuthContextType>({ user: null });

export const useAuthContext = () => useContext(AuthContext);
type props = {
  children: React.ReactNode;
};

export const AuthContextProvider = ({ children }: props) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("To setado", user);
        setUser(user);
      } else {
        console.log("To levantado", user);
        setUser(null);
      }
      console.log("To nem sentado nem levantado");
      setLoading(false);
    });
    console.log("4 console");
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      {loading ? <></> : children}
    </AuthContext.Provider>
  );
};
