import { useContext, createContext, useState } from "react";
import { themes } from "@/utils/themes";
import { views } from "@/utils/themes";

//setting 
const initialStates = {
  theme: "default",
  setTheme: () => {},
  view:"default",
  setView: () => {},
}

const themeContext = createContext(initialStates);

export default function AppProvider({ children }){
  const [theme, setTheme] = useState(initialStates.theme);
  const [view, setView] = useState(initialStates.view);

  return (
    <themeContext.Provider value={{ 
      theme, 
      setTheme,
      view,
      setView 
      }}>
      <style jsx global>
        {
          `
          body {
            background-color: ${ themes[theme].body };
          }
          `
        }
      </style>

      { children }

    </themeContext.Provider>
  )
}

export function useTheme(){
  const { theme, setTheme } = useContext(themeContext);
  return { theme, setTheme };
}

export function useView(){
  const { view, setView } = useContext(themeContext);
  return { view, setView };
}