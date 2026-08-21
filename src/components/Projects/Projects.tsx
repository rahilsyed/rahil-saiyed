import { Reveal } from '../../hooks/useReveal';
import { PROJECTS } from '../../utilities/constants';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <section id="builds">
      <div className="wrap">
        <Reveal>
          <div className="sheet-head">
            <div><div className="sheet-num">SHEET 04</div><div className="sheet-title">Selected Builds</div></div>
            <div className="sheet-tag">Click a card for the challenge solved</div>
          </div>
        </Reveal>
        <div className="proj-grid">
          {PROJECTS.map((p,i)=>(
            <Reveal key={p.title}>
              <ProjectCard p={p} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );

}

export default Projects