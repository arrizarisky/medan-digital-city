import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function GsapScrollReveal({ children, className = "" }) {
  const scope = useRef(null);

  useGSAP(
    () => {
      const sections = gsap.utils.toArray("[data-gsap-section]");

      sections.forEach((section) => {
        const items = section.querySelectorAll("[data-gsap-reveal]");
        const images = section.querySelectorAll("[data-gsap-image]");

        gsap.fromTo(
          items,
          { autoAlpha: 0, y: 34 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.85,
            ease: "power3.out",
            stagger: 0.12,
            scrollTrigger: {
              trigger: section,
              start: "top 78%",
              once: true,
            },
          },
        );

        gsap.fromTo(
          images,
          { scale: 1.04 },
          {
            scale: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 82%",
              once: true,
            },
          },
        );
      });
    },
    { scope },
  );

  return (
    <div ref={scope} className={className}>
      {children}
    </div>
  );
}
