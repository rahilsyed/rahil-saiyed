import { Reveal } from '../../hooks/useReveal'
import { EXPERIENCE } from '../../utilities/constants';

const Experience = () => {
    const handleCertificateDownload =(fileName:string)=>{
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
            <div><div className="sheet-num">SHEET 03</div><div className="sheet-title">Experience Timeline</div></div>
            <div className="sheet-tag">Click Badge To Download Certificate</div>
          </div>
        </Reveal>
        <Reveal>
          <div className="timeline">
            {EXPERIENCE.map((e,i)=>(
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