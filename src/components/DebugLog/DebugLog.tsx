import { Reveal } from '../../hooks/useReveal'
import useLanguage from '../../hooks/useLanguage'
import { DE, EN } from '../../utilities/language';

const DebugLog = () => {
    const { language } = useLanguage();
    const lang: any = language === 'de' ? DE.DEBUG_LOG_DATA : EN.DEBUG_LOG_DATA

    return (
        <section id='debug'>
            <div className='wrap'>
                <Reveal>
                    <div className="sheet-head">
                        <div><div className="sheet-num">SHEET 06</div><div className="sheet-title">{lang.title}</div></div>
                        <div className="sheet-tag">{lang.subtitleFirst} &amp;{lang.subtitleLast}</div>
                    </div>
                </Reveal>
                <Reveal>
                    <div className="log">
                        {
                            lang.logItems.map((issue: string, i: string) => (
                                <div className="log-row" key={issue}>
                                    <span className="log-id">#{String(i + 1).padStart(3, "0")}</span>
                                    <span className="log-issue">{issue}</span>
                                    <span className="log-status">resolved</span>
                                </div>))
                        }
                    </div>
                </Reveal>
            </div>
        </section>
    )
}

export default DebugLog;