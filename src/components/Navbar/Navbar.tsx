import Moon from "../../assets/Moon";
import Sun from "../../assets/Sun";
import useLanguage from "../../hooks/useLanguage";
import useTheme from "../../hooks/useTheme";
import { CONSTANTS } from "../../utilities/constants";
import { DE, EN } from "../../utilities/language";

const LANGUAGES = [
  { code: CONSTANTS.LANGUAGE.ENGLISH, label: "EN", name: "English" },
  { code: CONSTANTS.LANGUAGE.GERMAN, label: "DE", name: "Deutsch" },
] as const;

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const { language, setLanguage } = useLanguage();
  const t = language === CONSTANTS.LANGUAGE.GERMAN ? DE.NAV_BAR_DATA : EN.NAV_BAR_DATA;

  const isLight = theme === "light";
  const handleThemeToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <a href="#top" className="brand">
          <span className="dot"></span>
          <span className="brand-text">{t.title}</span>
          <span className="brand-short">RAHIL SAIYED</span>
        </a>
        <nav className="links">
          <a href="#systems">{t.systems}</a>
          <a href="#timeline">{t.timeLines}</a>
          <a href="#builds">{t.builds}</a>
          <a href="#debug">{language === CONSTANTS.LANGUAGE.GERMAN ? `Debug-Protokoll` : `Debug Log`}</a>
        </nav>
        <div className="nav-right">
          <div className="lang-switch" role="group" aria-label="Language">
            {LANGUAGES.map((l) => (
              <button
                key={l.code}
                type="button"
                className={language === l.code ? "active" : ""}
                aria-pressed={language === l.code}
                lang={l.code}
                title={l.name}
                onClick={() => setLanguage(l.code)}
              >
                {l.label}
              </button>
            ))}
          </div>
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
            {t.contact}
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
