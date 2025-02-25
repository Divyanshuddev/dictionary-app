import { createContext, useState } from "react";
import Home from "./Pages/Home";
import './App.css'
export const ThemeContext = createContext(null)
function App() {
  const [theme, setTheme] = useState("light")
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <Home handleTheme={toggleTheme} />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
