import React, { createContext, useContext, useState, useEffect } from "react";
import supabase from "./supabase";
const SupabaseContext = createContext();

export const SupabaseProvider = ({ children }) => {
  const [session, setSession] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    setSession(session);
    setUser(session?.user ?? null);
    setLoading(false);

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => subscription?.unsubscribe();
  
  }, []);

  const hanldeSignIn = async (email,password,callback) => {
  
    const { session, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    callback(error);
  };

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Error al cerrar sesión:", error);
      return false;
    }
    return true;
  };

  const value = { supabase, session, user, loading, hanldeSignIn, handleSignOut };

  return (
    <SupabaseContext.Provider value={value}>
      {children}
    </SupabaseContext.Provider>
  );
};

export const useSupabase = () => {
  const context = useContext(SupabaseContext);
  if (!context) {
    throw new Error("useSupabase debe usarse dentro de un SupabaseProvider");
  }
  return context;
};
