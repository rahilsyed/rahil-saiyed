import Moon from "../../assets/Moon";
import Sun from "../../assets/Sun";
import useLanguage from "../../hooks/useLanguage";
import useTheme from "../../hooks/useTheme";
import { CONSTANTS } from "../../utilities/constants";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const {language, setLanguage} = useLanguage();
  console.log(language, setLanguage);
  
  const isLight = theme === "light";
  const handleThemeToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <a href="#top" className="brand">
          <span className="dot"></span>
          {CONSTANTS.NAV_BAR_DATA.title}
        </a>
        <nav className="links">
          <a href="#systems">{CONSTANTS.NAV_BAR_DATA.systems}</a>
          <a href="#timeline">{CONSTANTS.NAV_BAR_DATA.timeLines}</a>
          <a href="#builds">{CONSTANTS.NAV_BAR_DATA.builds}</a>
          <a href="#debug">Debug&nbsp;Log</a>
        </nav>
        <button
          className="theme-toggle"
          onClick={handleThemeToggle}
          role="switch"
          aria-checked={isLight}
          aria-label={
            isLight ? "Switch to dark theme" : "Switch to light theme"
          }
          title={isLight ? "Switch to dark theme" : "Switch to light theme"}
        >
          <span className="knob">{isLight ? <Moon /> : <Sun />}</span>
        </button>
        <a href="#contact" className="nav-cta">
          {CONSTANTS.NAV_BAR_DATA.contact}
        </a>
      </div>
    </header>
  );
};

export default Navbar;
