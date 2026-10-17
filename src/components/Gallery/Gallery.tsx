import useLanguage from '../../hooks/useLanguage';
import { Reveal } from '../../hooks/useReveal'
import { DE, EN } from '../../utilities/language';
import FlipCard from './FlipCard';

const Gallery = () => {
  const { language } = useLanguage();
  const t = language === 'de' ? DE.GALLERY_DATA : EN.GALLERY_DATA;
  return (
    <section id="photos">
      <div className="wrap">
        <Reveal>
          <div className="sheet-head">
            <div><div className="sheet-num">SHEET 05</div><div className="sheet-title">{t.sheetTitle}</div></div>
            <div className="sheet-tag">{t.sheetTag}</div>
          </div>
        </Reveal>
        <Reveal>
          <div className="gallery-grid">
            {t.entries.map((item, i) => (
              <FlipCard item={item} index={i} key={item.title} backBtn={t.backBtn} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Gallery