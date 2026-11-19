import { Reveal } from '../../hooks/useReveal'
import Belt from './Belt'
import { awsServices, techStack } from '../../utilities/constants'

const TechBelt = () => {
  return (
   <section className="belt-band" aria-label="Technologies and AWS services">
      <div className="wrap">
        <Reveal>
          <div className="belt-row">
            <div className="belt-label"><span><b>AWS</b> — services in production</span><span>hover to pause</span></div>
            <Belt items={awsServices} duration={36} aws />
          </div>
          <div className="belt-row">
            <div className="belt-label"><span><b>STACK</b> — languages, frameworks &amp; tools</span><span>hover to pause</span></div>
            <Belt items={techStack} duration={52} />
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default TechBelt