import { Reveal } from '../../hooks/useReveal'
import Crops from '../ui/Crops'
import useLanguage from '../../hooks/useLanguage'
import { DE, EN } from '../../utilities/language';

const Footer = () => {
  const { language } = useLanguage();
  const lang = language === 'de' ? DE.FOOTER_DATA : EN.FOOTER_DATA

  return (
        <section id="contact" style={{borderBottom:"none"}}>
      <div className="wrap">
        <Reveal>
          <div className="sheet-head">
            <div><div className="sheet-num">SHEET 07</div><div className="sheet-title">{lang.title}</div></div>
            <div className="sheet-tag">{lang.tag}</div>
          </div>
        </Reveal>
        <Reveal>
          <div className="titleblock">
            <Crops/>
            <div className="tb-top">
              <div className="tb-heading">{lang.heading}</div>
              <a className="btn btn-primary" href="mailto:rahilcloud08@gmail.com">{lang.emailButton}</a>
            </div>
            <div className="tb-fields">
              <div className="tb-field"><span>{lang.emailLabel}</span><a href="mailto:rahilcloud08@gmail.com">rahilcloud08@gmail.com</a></div>
              <div className="tb-field"><span>{lang.phoneLabel}</span><p>+91 9265825711</p></div>
              <div className="tb-field"><span>GitHub</span><a href="https://github.com/rahilsyed" target="_blank" rel="noreferrer">github.com/rahilsyed</a></div>
              <div className="tb-field"><span>LinkedIn</span><a href="https://www.linkedin.com/in/rahil-saiyed-8541b42a0/" target="_blank" rel="noreferrer">linkedin.com/in/rahil-saiyed</a></div>
              <div className="tb-field"><span>{lang.basedInLabel}</span><p>{lang.location}</p></div>
              <div className="tb-field"><span>{lang.statusLabel}</span><p>{lang.status}</p></div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>

  )
}

export default Footer;