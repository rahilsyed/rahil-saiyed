import useLanguage from '../../hooks/useLanguage';
import { Reveal } from '../../hooks/useReveal';
import { DE, EN } from '../../utilities/language';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const { language } = useLanguage();
  const t = language === 'de' ? DE.PROJECTS_DATA : EN.PROJECTS_DATA;
  return (
    <section id="builds">
      <div className="wrap">
        <Reveal>
          <div className="sheet-head">
            <div><div className="sheet-num">SHEET 04</div><div className="sheet-title">{t.sheetTitle}</div></div>
            <div className="sheet-tag">{t.sheetTag}</div>
          </div>
        </Reveal>
        <div className="proj-grid">
          {t.entries.map((p, i) => (
            <Reveal key={p.title}>
              <ProjectCard p={p} index={i} t={t} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects