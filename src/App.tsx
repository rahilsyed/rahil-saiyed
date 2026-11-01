import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import ThemeProvider from "./context/ThemeContext";
import LanguageProvider from "./context/LanguageContext";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import { AuthProvider } from "./context/AuthContext";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider>
          <LanguageProvider>
            <AuthProvider>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/admin/login" element={<Login />} />
                <Route element={<ProtectedRoutes adminOnly />} >
                  <Route path="/admin/dashboard" element={<Dashboard />} />
                </Route>
              </Routes>
            </AuthProvider>
          </LanguageProvider>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
