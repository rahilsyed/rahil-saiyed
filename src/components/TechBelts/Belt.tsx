
import type { CSSProperties } from "react";

const Belt = ({items, duration=40, aws=false}:{items:any[], duration?:number, aws?:boolean}) => {
    const group = (hidden:any)=>(
    <div className="belt-group" aria-hidden={hidden || undefined}>
      {items.map(it=>(
        <div className={`belt-chip ${aws?"aws":""}`} key={it.name} tabIndex={hidden?-1:0}>
          <span className="belt-badge">{it.abbr}</span>
          <span>
            <div className="belt-name">{it.name}</div>
            <div className="belt-cat">{it.cat}</div>
          </span>
        </div>
      ))}
    </div>
  );
  return (
    <div className="belt" role="list" style={{"--belt-dur": duration+"s"} as CSSProperties & { "--belt-dur": string }}>
      <div className="belt-track">
        {group(false)}
        {group(true)}
      </div>
    </div>
  )
}

export default Belt