import React, { useContext, useState, useEffect } from 'react';
import { auth } from '../FirebaseApp';

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();

  // Create user function
  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

    // Set current user
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
