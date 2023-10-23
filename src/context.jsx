import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

const getInitialDark = () => {
  const prefersDarkMode = window.matchMedia && window.matchMedia(
    '(prefers-color-scheme:dark)'
  ).matches;
  const storedDarkMode = localStorage.getItem('darkTheme') === 'true'
  return storedDarkMode || prefersDarkMode
};

export const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(getInitialDark());
  const [searchTerm, setSearchTerm] = useState("dog");
  
  const toggleDarkTheme = () => {
    const newTheme = !isDarkTheme;
    setIsDarkTheme(newTheme);
    localStorage.setItem('darkTheme',newTheme)
  /*   const body = document.querySelector("body");
    body.classList.toggle("dark-theme", newTheme);
    console.log(body); */
  };

  useEffect(()=>{
     document.body.classList.toggle('dark-theme',isDarkTheme)
  },[isDarkTheme])

  return (
    <AppContext.Provider
      value={{ toggleDarkTheme, isDarkTheme, searchTerm, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
