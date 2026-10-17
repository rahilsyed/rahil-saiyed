import useLanguage from '../../hooks/useLanguage'
import { Reveal } from '../../hooks/useReveal'
import { SKILL_GROUPS } from '../../utilities/constants'
import { DE, EN } from '../../utilities/language'

const Skills = () => {
    const { language } = useLanguage();
    const t = language === 'de' ? DE.SKILLS_DATA : EN.SKILLS_DATA;
    return (
        <section id="systems">
            <div className="wrap">
                <Reveal>
                    <div className="sheet-head">
                        <div><div className="sheet-num">SHEET 02</div><div className="sheet-title">{t.sheetTitle}</div></div>
                        <div className="sheet-tag">{t.sheetTag}</div>
                    </div>
                </Reveal>
                <Reveal>
                    <div className="skill-groups">
                        {SKILL_GROUPS.map(g => (
                            <div className="skill-card" key={g.title}>
                                <h3>{g.title}</h3>
                                <ul>{g.items.map(i => <li key={i}>{i}</li>)}</ul>
                            </div>
                        ))}
                    </div>
                </Reveal>
            </div>
        </section>
    )
}

export default Skills