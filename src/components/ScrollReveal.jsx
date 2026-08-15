import { useEffect } from "react";
import { useLocation } from "react-router";

function ScrollReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    const elements = document.querySelectorAll(
      "main section, .concept-card, .work-card, .media-item"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
      }
    );

    elements.forEach((element) => {
      element.classList.add("reveal-item");
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}

export default ScrollReveal;