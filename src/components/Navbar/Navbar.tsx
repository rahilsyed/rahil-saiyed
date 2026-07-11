import { CONSTANTS } from "../../utilities/constants"

const Navbar = () => {

    return (
        <header className="nav">
            <div className="wrap nav-inner">
                <a href="#top" className="brand"><span className="dot"></span>{CONSTANTS.NAV_BAR_DATA.title}</a>
                <nav className="links">
                    <a href="#systems">{CONSTANTS.NAV_BAR_DATA.systems}</a>
                    <a href="#timeline">{CONSTANTS.NAV_BAR_DATA.timeLines}</a>
                    <a href="#builds">{CONSTANTS.NAV_BAR_DATA.builds}</a>
                    <a href="#debug">Debug&nbsp;Log</a>
                </nav>
                <a href="#contact" className="nav-cta">{CONSTANTS.NAV_BAR_DATA.contact}</a>
            </div>
        </header>
    )
}

export default Navbar