import useLanguage from '../../hooks/useLanguage'
import { Reveal } from '../../hooks/useReveal'
import { DE, EN } from '../../utilities/language';

const Experience = () => {
    const { language } = useLanguage();
    const t = language === 'de' ? DE.EXPERIENCE_DATA : EN.EXPERIENCE_DATA;
    const handleCertificateDownload = (fileName: string) => {
        const link = document.createElement('a');
        link.href = `/pdfs/${fileName}`;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
 return (
    <section id="timeline">
      <div className="wrap">
        <Reveal>
          <div className="sheet-head">
            <div><div className="sheet-num">SHEET 03</div><div className="sheet-title">{t.sheetTitle}</div></div>
            <div className="sheet-tag">{t.sheetTag}</div>
          </div>
        </Reveal>
        <Reveal>
          <div className="timeline">
            {t.entries.map((e, i) => (
              <div className={`tl-item ${e.current?"current":""}`} key={i}>
                <span className="tl-dot"></span>
                <div className="tl-role-row">
                  <span className="tl-role">{e.role}</span>
                        <span className="">
                            <button className='tl-badge tl-badge:hover' onClick={() => handleCertificateDownload(e.certificatePath as string)}>
                                {e.badge}
                            </button>
                        </span>
                    </div>
                <div className="tl-company">{e.company}</div>
                <div className="tl-desc">
                  {e.desc}
                  {e.bullets.length>0 && <ul>{e.bullets.map((b,j)=><li key={j}>{b}</li>)}</ul>}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Experience