import { useEffect, useRef, useState } from "react"

const useReveal = () => {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);
    useEffect(() => {
        const el = ref.current;
        if (!el) return
        const obs = new IntersectionObserver((entries) => {
            entries.forEach(e => {
                if (e.isIntersecting) {
                    setInView(true)
                    obs.unobserve(el);
                }
            });
        }, { threshold: 0.12 });
        obs.observe(el);
        return () => obs.disconnect();
    }, []);
    return [ref, inView]    
}


export const Reveal = ({ children, as: Tag = "div", className = "", style }: any) => {
    const [ref, inView] = useReveal();
    return <Tag ref={ref} className={`reveal ${inView ? "in" : ""} ${className}`} style={style}>{children}</Tag>;

}