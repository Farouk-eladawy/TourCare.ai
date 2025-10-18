import { useEffect, useRef } from 'react';

type AnimationOptions = {
  threshold?: number;
  triggerOnce?: boolean;
  delay?: string; // e.g., '100ms', '200ms'
};

export const useScrollAnimation = <T extends HTMLElement>(options: AnimationOptions = {}) => {
  const ref = useRef<T>(null);
  const { threshold = 0.1, triggerOnce = true, delay = '0ms' } = options;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Apply delay via style
    element.style.transitionDelay = delay;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add('is-visible');
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else {
          // Optionally, remove the class if you want the animation to repeat
          if (!triggerOnce) {
            element.classList.remove('is-visible');
          }
        }
      },
      {
        threshold,
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [ref, threshold, triggerOnce, delay]);

  return ref;
};
