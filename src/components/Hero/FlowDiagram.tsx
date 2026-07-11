import { NODES, PATHS } from '../../utilities/constants'

const FlowDiagram = () => {
  return (
    <div className="diagram-frame">
      <span className="label">System Diagram — request lifecycle</span>
      <svg viewBox="0 0 400 400" width="100%" role="img" aria-label="Architecture diagram showing a React client calling a GraphQL API, handled by Node.js and AWS Lambda compute, backed by MongoDB and DynamoDB, delivered via S3 and CloudFront.">
        <defs>
          <marker id="dot" markerWidth="6" markerHeight="6" refX="3" refY="3">
            <circle cx="3" cy="3" r="2.4" fill="#5EEAD4" />
          </marker>
        </defs>
        {PATHS.map((d,i)=>(
          <g key={i}>
            <path d={d} fill="none" stroke="rgba(148,180,214,0.28)" strokeWidth="1.4" strokeDasharray="3 5"/>
            <circle r="3.4" fill="#5EEAD4">
              <animateMotion dur={`${3+i*0.6}s`} repeatCount="indefinite" path={d} />
            </circle>
          </g>
        ))}
        {NODES.map((n,i)=>(
          <g key={i} className="arch-node">
            <rect x={n.x} y={n.y} width={n.w} height={n.h} rx="3"
              fill="rgba(255,255,255,0.02)" stroke="rgba(148,180,214,0.35)" strokeWidth="1">
              <animate attributeName="stroke" values="rgba(148,180,214,0.35);#FF9F1C;rgba(148,180,214,0.35)" dur="6s" begin={`${i*1.1}s`} repeatCount="indefinite" />
            </rect>
            <text x={n.x+14} y={n.y+20} className="node-label">{n.title}</text>
            <text x={n.x+14} y={n.y+35} className="node-tip">{n.sub}</text>
          </g>
        ))}
      </svg>
    </div>
  );
}

export default FlowDiagram