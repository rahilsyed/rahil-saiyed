import React from 'react';

type Project = { title: string; desc: string; tags: string[]; challenge: string; };
type Props = { p: Project; index: number; };

const ProjectCard = ({ p, index }: Props) => {
  const [flipped, setFlipped] = React.useState(false);
  return (
    <div
      className={`flip-card${flipped ? ' flipped' : ''}`}
      role="button"
      tabIndex={0}
      aria-pressed={flipped}
      aria-label={`${p.title} — click to ${flipped ? 'show project info' : 'show challenge solved'}`}
      onClick={() => setFlipped(f => !f)}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setFlipped(f => !f); } }}
    >
      <div className="flip-inner">
        <div className="flip-face flip-front">
          <div className="proj-idx">// {String(index + 1).padStart(2, '0')}</div>
          <div className="proj-title">{p.title}</div>
          <div className="proj-desc">{p.desc}</div>
          <div className="proj-tags">{p.tags.map((t: string) => <span key={t}>{t}</span>)}</div>
        </div>
        <div className="flip-face flip-back">
          <div className="proj-idx">// {String(index + 1).padStart(2, '0')} — challenge</div>
          <div className="proj-title">{p.title}</div>
          <div className="proj-challenge">
            <b>Challenge solved</b>
            <div className="fb-desc">{p.challenge}</div>
          </div>
          <div className="proj-flip-hint">← Click to go back</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;