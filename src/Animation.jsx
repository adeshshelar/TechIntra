import { useEffect } from "react";

const useScrollAnimation = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show-items");
        } else {
          entry.target.classList.remove("show-items");
        }
      });
    });

    const elements = document.querySelectorAll(
      ".scroll-scale, .scroll-bottom, .scroll-top"
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);
};

export default useScrollAnimation;
