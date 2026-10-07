import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import ThemeProvider from "./context/ThemeContext";
import LanguageProvider from "./context/LanguageContext";
function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider>
          <LanguageProvider>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </LanguageProvider>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
