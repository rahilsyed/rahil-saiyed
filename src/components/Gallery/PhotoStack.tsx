import React, { useEffect, useRef, useState } from 'react'

type Direction = 1 | -1;

interface AnimState {
  dir: Direction;
  from: number;
  to: number;
  phase: "start" | "end";
}

interface PhotoStackProps {
  photos: string[];
  tag: string;
  title: string;
}

type ClickEvent = React.MouseEvent<HTMLButtonElement>;

const PhotoStack = ({ photos, tag, title }: PhotoStackProps) => {
  const [idx, setIdx] = useState(0);
  const [anim, setAnim] = useState<AnimState | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const count = photos.length;

  useEffect(()=>()=>{ if(timerRef.current) clearTimeout(timerRef.current); },[]);

  const shuffleTo = (to: number, dir: Direction, e: ClickEvent) => {
    e.stopPropagation();
    if (anim || to === idx) return;
    setAnim({dir, from:idx, to, phase:"start"});
    requestAnimationFrame(()=>{
      requestAnimationFrame(()=>{
        setAnim(a => a ? {...a, phase:"end"} : a);
      });
    });
    timerRef.current = setTimeout(()=>{
      setIdx(to);
      setAnim(null);
    }, 380);
  };

  const go = (dir: Direction, e: ClickEvent) => {
    const to = (idx + dir + count) % count;
    shuffleTo(to, dir, e);
  };

  const goDot = (i: number, e: ClickEvent) => {
    const forward = (i - idx + count) % count;
    const backward = (idx - i + count) % count;
    const dir: Direction = forward <= backward ? 1 : -1;
    shuffleTo(i, dir, e);
  };

  const renderFace = (i: number) => (
    photos[i]
      ? <img src={photos[i]} alt={`${title} photo ${i+1}`} />
      : <div className="ph-fallback">// print {String(i+1).padStart(2,"0")} of {String(count).padStart(2,"0")}<br/>drop image src here</div>
  );

  return (
    <div className="flip-photo">
      {count > 2 && <div className="stack-layer behind-2"></div>}
      {count > 1 && <div className="stack-layer behind-1"></div>}

      {anim ? (
        <React.Fragment>
          <div className={`stack-layer active-photo shuffle-exit ${anim.dir>0?"to-right":"to-left"} ${anim.phase==="end"?"go":""}`}>
            {renderFace(anim.from)}
          </div>
          <div className={`stack-layer active-photo shuffle-enter ${anim.dir>0?"from-left":"from-right"} ${anim.phase==="end"?"go":""}`}>
            {renderFace(anim.to)}
          </div>
        </React.Fragment>
      ) : (
        <div className="stack-layer active-photo">
          {renderFace(idx)}
        </div>
      )}

      <span className="ph-tag">{tag}</span>
      {count > 1 && <span className="ph-count">{(anim?anim.to:idx)+1}/{count}</span>}
      {count > 1 && (
        <React.Fragment>
          <button type="button" className="ph-arrow prev" aria-label="Previous photo" onClick={(e)=>go(-1,e)}>‹</button>
          <button type="button" className="ph-arrow next" aria-label="Next photo" onClick={(e)=>go(1,e)}>›</button>
          <div className="ph-dots">
            {photos.map((_, i)=>(
              <button
                type="button"
                key={i}
                className={`ph-dot ${i===(anim?anim.to:idx)?"on":""}`}
                aria-label={`Go to photo ${i+1}`}
                onClick={(e)=>goDot(i,e)}
              />
            ))}
          </div>
        </React.Fragment>
      )}
    </div>
  );

}

export default PhotoStack