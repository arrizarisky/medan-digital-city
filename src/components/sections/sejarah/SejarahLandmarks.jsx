import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function SejarahLandmarks({
  content,
  landmarks,
  lang,
  onLandmarkClick,
  sectionRef,
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Mobile detection with cleanup
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Image preloading
  useEffect(() => {
    landmarks.forEach((item) => {
      const img = new Image();
      img.src = item.src;
    });
  }, [landmarks]);

  // Navigation handlers with animation lock
  const goNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % 3);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goPrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 2) % 3);
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Position calculations for 3 items
  const getPositionData = () => {
    return {
      center: activeIndex,
      left: (activeIndex + 2) % 3,
      right: (activeIndex + 1) % 3,
    };
  };

  const positions = getPositionData();
  const activeItem = landmarks[activeIndex];

  // Position styles for each role
  const getPositionStyle = (role) => {
    const baseStyle = {
      position: "absolute",
      transition:
        "transform 500ms cubic-bezier(0.16, 1, 0.3, 1), opacity 500ms cubic-bezier(0.16, 1, 0.3, 1), left 500ms cubic-bezier(0.16, 1, 0.3, 1), bottom 500ms cubic-bezier(0.16, 1, 0.3, 1), height 500ms cubic-bezier(0.16, 1, 0.3, 1), filter 500ms cubic-bezier(0.16, 1, 0.3, 1)",
      willChange: "transform, opacity",
      objectFit: "contain",
      cursor: role === "center" ? "pointer" : "default",
    };

    switch (role) {
      case "center":
        return {
          ...baseStyle,
          transform: `translateX(-50%) scale(${isMobile ? 1.05 : 1.1})`,
          opacity: 1,
          zIndex: 20,
          left: "50%",
          height: isMobile ? "65%" : "80%",
          bottom: isMobile ? "15%" : "5%",
          filter: "drop-shadow(0 20px 30px rgba(0,0,0,0.08))",
        };
      case "left":
        return {
          ...baseStyle,
          transform: "translateX(-50%) scale(0.9)",
          opacity: 0.25,
          zIndex: 10,
          left: "10%",
          height: isMobile ? "25%" : "35%",
          bottom: isMobile ? "30%" : "10%",
        };
      case "right":
        return {
          ...baseStyle,
          transform: "translateX(-50%) scale(0.9)",
          opacity: 0.25,
          zIndex: 10,
          left: "90%",
          height: isMobile ? "25%" : "35%",
          bottom: isMobile ? "30%" : "10%",
        };
      default:
        return baseStyle;
    }
  };

  return (
    <section ref={sectionRef} className="reveal-up">
      <div className="max-w-6xl mx-auto px-6 py-12 sm:py-16">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="inline-block px-3 py-1 bg-zinc-100 text-zinc-600 text-[11px] font-semibold tracking-widest uppercase rounded-full mb-4">
            {content.landmarks.tag}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight">
            {content.landmarks.title}
          </h2>
        </div>

        {/* 3D Carousel Container */}
        <div
          className="relative w-full rounded-3xl overflow-hidden"
          style={{
            height: isMobile ? "500px" : "600px",
            backgroundColor: "#FCFCFC",
          }}
        >
          {/* Elegant Year Ghost Text */}
          <div
            className="absolute left-1/2 transform -translate-x-1/2 pointer-events-none select-none"
            style={{
              top: "8%",
              zIndex: 10,
              fontFamily: "'Georgia', 'Times New Roman', serif",
              fontSize: isMobile
                ? "clamp(80px, 25vw, 180px)"
                : "clamp(120px, 20vw, 280px)",
              fontWeight: 100,
              color: "rgba(161, 161, 170, 0.15)",
              lineHeight: 1,
              textAlign: "center",
              whiteSpace: "nowrap",
            }}
          >
            {activeItem.year}
          </div>

          {/* Carousel Items */}
          <div className="absolute inset-0 flex items-center justify-center">
            {landmarks.map((item, index) => {
              let role = "";
              if (index === positions.center) role = "center";
              else if (index === positions.left) role = "left";
              else if (index === positions.right) role = "right";

              return (
                <img
                  key={index}
                  src={item.src}
                  alt={item.title[lang]}
                  style={getPositionStyle(role)}
                  draggable={false}
                  onClick={() => role === "center" && onLandmarkClick(item)}
                />
              );
            })}
          </div>

          {/* Navigation Arrows */}
          <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 flex justify-between items-center px-6 md:px-12 z-30 pointer-events-none">
            <button
              onClick={goPrev}
              disabled={isAnimating}
              className="pointer-events-auto w-11 h-11 md:w-12 md:h-12 rounded-full border border-zinc-200 bg-white/80 text-zinc-700 flex items-center justify-center hover:bg-zinc-50 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Previous"
            >
              <ArrowLeft size={20} strokeWidth={1.5} />
            </button>
            <button
              onClick={goNext}
              disabled={isAnimating}
              className="pointer-events-auto w-11 h-11 md:w-12 md:h-12 rounded-full border border-zinc-200 bg-white/80 text-zinc-700 flex items-center justify-center hover:bg-zinc-50 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Next"
            >
              <ArrowRight size={20} strokeWidth={1.5} />
            </button>
          </div>

          {/* Indicator Dots */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-30">
            {landmarks.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isAnimating && index !== activeIndex) {
                    setIsAnimating(true);
                    setActiveIndex(index);
                    setTimeout(() => setIsAnimating(false), 500);
                  }
                }}
                disabled={isAnimating}
                className={`transition-all duration-300 rounded-full ${
                  index === activeIndex
                    ? "w-6 h-1.5 bg-zinc-800"
                    : "w-1.5 h-1.5 bg-zinc-300 hover:bg-zinc-400"
                }`}
                aria-label={`Go to landmark ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Clean Info Panel Below Carousel */}
        <div className="mt-10 flex flex-col items-center text-center">
          <span className="inline-block text-zinc-500 text-sm font-medium tracking-wide mb-3">
            {content.landmarks.since} {activeItem.year}
          </span>
          <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-3">
            {activeItem.title[lang]}
          </h3>
          <p className="text-zinc-500 text-sm md:text-base leading-relaxed max-w-2xl mb-5">
            {activeItem.shortDesc[lang]}
          </p>
          <button
            onClick={() => onLandmarkClick(activeItem)}
            className="inline-flex items-center gap-2 px-6 py-2.5 border border-zinc-200 bg-white text-zinc-800 font-medium text-sm rounded-full hover:bg-zinc-50 transition-all duration-300"
          >
            {content.landmarks.readMore}
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
