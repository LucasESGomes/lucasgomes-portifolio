import { useEffect, useState } from "react";

import { timeline } from "../../data/timeline.js";
import { useInView } from "../../hooks/useInView.js";
import Section from "../layout/Section.jsx";

const reveal = (visible, stagger = "") => `text-reveal ${stagger} ${visible ? "visible" : ""}`;

const TimelineSection = () => {
  const [titleRef, titleInView] = useInView();
  const [listRef, listInView] = useInView();
  const [visibleItems, setVisibleItems] = useState(0);

  // Reveals one entry every 800ms once the list enters the viewport
  useEffect(() => {
    if (!listInView) return;
    const timers = timeline.map((_, i) => setTimeout(() => setVisibleItems(i + 1), 800 * i + 400));
    return () => timers.forEach(clearTimeout);
  }, [listInView]);

  return (
    <Section id="trajetoria">
      <div ref={titleRef} className="mb-16 flex items-center">
        <div className={reveal(titleInView)}>
          <span className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-300 mr-4 md:mr-6">04</span>
        </div>
        <div className={reveal(titleInView, "stagger-2")}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-black">
            Trajetória<span className="text-2xl">.</span>
          </h2>
        </div>
      </div>

      <div ref={listRef} className="space-y-4">
        {timeline.map((item, i) => {
          const visible = i < visibleItems;
          return (
            <div key={item.title} className="border-b border-gray-100 pb-12 last:border-b-0">
              <div className="mb-4">
                <div className={reveal(visible)}>
                  <p className="text-xs md:text-sm text-gray-500 font-medium mb-4 tracking-wide uppercase">
                    {item.period}
                  </p>
                </div>
                <div className="flex flex-col md:flex-row md:items-baseline gap-2 mb-6">
                  <div className={reveal(visible, "stagger-1")}>
                    <h3 className="text-2xl md:text-3xl font-normal text-black leading-tight">{item.title}</h3>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <div className={reveal(visible, "stagger-2")}>
                      <span className="text-xl md:text-2xl text-gray-400 font-light hidden md:inline">—</span>
                    </div>
                    <div className={reveal(visible, "stagger-3")}>
                      <span className="text-lg md:text-2xl text-black font-light">{item.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={reveal(visible, "stagger-4")}>
                <p className="text-gray-700 leading-relaxed text-sm md:text-base max-w-4xl">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default TimelineSection;
