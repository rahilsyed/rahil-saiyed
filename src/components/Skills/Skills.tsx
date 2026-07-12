import { Reveal } from '../../hooks/useReveal'
import { SKILL_GROUPS } from '../../utilities/constants'

const Skills = () => {
    return (
        <section id="systems">
            <div className="wrap">
                <Reveal>
                    <div className="sheet-head">
                        <div><div className="sheet-num">SHEET 02</div><div className="sheet-title">Systems &amp; Tooling</div></div>
                        <div className="sheet-tag">Component legend</div>
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