/**
 * Fieldwork visual language: real places and production traces lead; future accents stay quiet.
 */
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { useEffect, useState } from "react";

export type FieldworkSlide = {
  src: string;
  alt: string;
  place: string;
  date: string;
  label: string;
  caption: string;
};

type FieldworkCarouselProps = {
  slides: FieldworkSlide[];
  compact?: boolean;
};

export default function FieldworkCarousel({ slides, compact = false }: FieldworkCarouselProps) {
  const [active, setActive] = useState(0);
  const current = slides[active];

  useEffect(() => {
    if (active >= slides.length) setActive(0);
  }, [active, slides.length]);

  const go = (direction: number) => {
    setActive((index) => (index + direction + slides.length) % slides.length);
  };

  if (!slides.length) return null;

  return (
    <section className={`fieldwork-carousel ${compact ? "is-compact" : ""}`} aria-label="田野与影视现场照片">
      <div className="fieldwork-carousel-visual">
        <img key={current.src} src={current.src} alt={current.alt} />
        <div className="fieldwork-carousel-scrim" />
        <span className="fieldwork-carousel-label">{current.label}</span>
        <div className="fieldwork-carousel-location"><MapPin size={13} /> {current.place} · {current.date}</div>
        <div className="fieldwork-carousel-controls">
          <button type="button" onClick={() => go(-1)} aria-label="上一张"><ChevronLeft size={18} /></button>
          <span>{String(active + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}</span>
          <button type="button" onClick={() => go(1)} aria-label="下一张"><ChevronRight size={18} /></button>
        </div>
      </div>
      <div className="fieldwork-carousel-copy">
        <p className="section-label"><span>FIELD NOTE</span><span>{current.date}</span></p>
        <h3>{current.caption}</h3>
        <div className="fieldwork-carousel-dots" role="tablist" aria-label="选择现场照片">
          {slides.map((slide, index) => <button key={slide.src} type="button" role="tab" aria-selected={index === active} aria-label={`查看第 ${index + 1} 张：${slide.label}`} className={index === active ? "is-active" : ""} onClick={() => setActive(index)} />)}
        </div>
      </div>
    </section>
  );
}
