import React, { createContext, useContext, useState, useEffect } from "react";
import supabase from "./supabase";
const SupabaseContext = createContext();

export const SupabaseProvider = ({ children }) => {
  const [email, setEmail] = useState(import.meta.env.VITE_SUPABASE_EMAIL);
  const [password, setPassword] = useState(import.meta.env.VITE_SUPABASE_PASSWORD);
  const [session, setSession] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    let login = false;

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

    if(!session && login == false){
      autoLogin();
      login = true;
    }

    console.log(session)

    return () => {
      subscription?.unsubscribe();
      login = false;
    }


  }, []);

  const autoLogin = async () => {
  
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      console.error("Error al iniciar sesión:", error);
    }
  };

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  const value = { supabase, session, user, loading };

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
