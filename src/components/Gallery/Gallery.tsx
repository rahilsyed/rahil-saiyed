import { Reveal } from '../../hooks/useReveal'
import { GALLERY_ITEMS } from '../../utilities/constants';
import FlipCard from './FlipCard';
const Gallery = () => {
 return (
    <section id="photos">
      <div className="wrap">
        <Reveal>
          <div className="sheet-head">
            <div><div className="sheet-num">SHEET 05</div><div className="sheet-title">Field Photos</div></div>
            <div className="sheet-tag">Arrows cycle photos · Details flips the card</div>
          </div>
        </Reveal>
        <Reveal>
          <div className="gallery-grid">
            {GALLERY_ITEMS.map((item,i)=>(
              <FlipCard item={item} index={i} key={item.title}/>
            ))}
          </div>
        </Reveal>
        
      </div>
    </section>
  );

}

export default Gallery