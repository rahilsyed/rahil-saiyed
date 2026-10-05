import { Reveal } from '../../hooks/useReveal'
import FlowDiagram from './FlowDiagram'

const Hero = () => {
return (
    <section id="top" className="hero">
        <div className="wrap hero-grid">
            <div>
                <div className="eyebrow">Full Stack Developer — Cloud &amp; AI Systems</div>
                <h1 className="hero-title">I build products end to end — <span className="accent">interface to infrastructure.</span></h1>
                <p className="hero-sub">
                    React and Node.js on the front lines, GraphQL and AWS Lambda underneath, and AI
                    woven into the workflow when it earns its place. Currently shipping production
                    features at Perception System.
                </p>
                <div className="hero-actions">
                    <a className="btn btn-primary" href="#builds">View builds ↓</a>
                    <a className="btn btn-ghost" href="#contact">Get in touch</a>
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