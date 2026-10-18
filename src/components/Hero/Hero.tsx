import useLanguage from '../../hooks/useLanguage'
import { Reveal } from '../../hooks/useReveal'
import { DE, EN } from '../../utilities/language';
import FlowDiagram from './FlowDiagram'

const Hero = () => {
    const { language } = useLanguage();
    const isDeutsche = language === 'de';

    return (
        <section id="top" className="hero">
            <div className="wrap hero-grid">
                <div>
                    <div className="eyebrow">{isDeutsche ? DE.HERO_DATA.designation : EN.HERO_DATA.designation} &amp; {isDeutsche ? DE.HERO_DATA.aiSystems : EN.HERO_DATA.aiSystems}</div>
                    <h1 className="hero-title">{isDeutsche ? DE.HERO_DATA.title : EN.HERO_DATA.title} <span className="accent">{isDeutsche ? DE.HERO_DATA.title2 : EN.HERO_DATA.title2}</span></h1>
                    <p className="hero-sub">
                        {
                            isDeutsche ? DE.HERO_DATA.subject : EN.HERO_DATA.subject
                        }
                    </p>
                    <div className="hero-actions">
                        <a className="btn btn-primary" href="#builds">{isDeutsche ? DE.HERO_DATA.button1 : EN.HERO_DATA.button1}</a>
                        <a className="btn btn-ghost" href="#contact">{isDeutsche ? DE.HERO_DATA.button2 : EN.HERO_DATA.button2}</a>
                    </div>
                    <div className="stack-strip">
                        {["React", "Next.js", "Node.js", "GraphQL", "AWS Lambda", "DynamoDB", "MongoDB", "Claude / OpenAI API"].map(s =>
                            <span key={s}>{s}</span>
                        )}
                    </div>
                </div>
                <Reveal>
                    <FlowDiagram />
                </Reveal>
            </div>
        </section>

    )
}

export default Hero