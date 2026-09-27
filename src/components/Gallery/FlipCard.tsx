import { useState } from 'react'
import PhotoStack from './PhotoStack';

export interface GalleryItem {
  tag: string;
  title: string;
  subtitle: string;
  photos: string[];
  back: string;
}

interface FlipCardProps {
  item: GalleryItem;
  index: number;
}

const FlipCard = ({ item, index }: FlipCardProps) => {
    const [flipped, setFlipped] = useState(false);
  return (
    <div className={`flip-card ${flipped?"flipped":""}`}>
      <div className="flip-inner">
        <div className="flip-face flip-front">
          <PhotoStack photos={item.photos} tag={item.tag} title={item.title} />
          <div className="flip-caption">
            <div className="fc-text">
              <div className="ft">{item.title}</div>
              <div className="fs">{item.subtitle}</div>
            </div>
            <button type="button" className="flip-btn" onClick={()=>setFlipped(true)}>Details</button>
          </div>
        </div>
        <div className="flip-face flip-back">
          <div className="fb-num">// 0{index+1} — details</div>
          <div className="fb-title">{item.title}</div>
          <div className="fb-desc">{item.back}</div>
          <div className="fb-thumbs">
            {item.photos.map((src,i)=>(
              <div className="fb-thumb" key={i}>{src ? <img src={src} alt="" /> : i+1}</div>
            ))}
          </div>
          <button type="button" className="flip-btn back-btn" onClick={()=>setFlipped(false)}>← Back to photos</button>
        </div>
      </div>
    </div>
  );

}

export default FlipCard