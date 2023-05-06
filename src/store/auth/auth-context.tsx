import { createContext, useEffect, useState } from "react";
import { User as FirebaseUser } from "firebase/auth";
import { ChildrenRoot } from "../../types/shared";
import { auth } from "../../lib/firebase";

export const AuthContext = createContext<FirebaseUser | null>(null);

export const AuthContextProvider = ({ children }: ChildrenRoot) => {
  const [user, setUser] = useState<FirebaseUser | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser);
      }
    });

    return unsubscribe;
  }, []);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};
