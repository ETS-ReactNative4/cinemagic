import { useContext, createContext, useState } from "react";
import { themes } from "@/util/themes";

const initialStates = {
  theme: "default",
  setTheme: () => {}
}

const themeContext = createContext(initialStates);

export default function AppProvider({ children }){
  const [theme, setTheme] = useState(initialStates.theme);

  return (
    <themeContext.Provider value={{ theme, setTheme }}>
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