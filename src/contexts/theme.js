// 1st work always to cresre

import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: ()=>{},
    lightTheme: ()=>{},
})



export const ThemeProvider = ThemeContext.Provider


// call it to themeBtn 1st
export default function useTheme(){
    return useContext(ThemeContext)
}