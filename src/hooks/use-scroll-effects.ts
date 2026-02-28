import { useEffect } from 'react';

const SCROLL_UP_CLASS = 'scroll-dir-up';
const SCROLL_DOWN_CLASS = 'scroll-dir-down';

export const useScrollEffects = (): void => {
  useEffect(() => {
    let rafId = 0;
    let scrollY = window.scrollY;
    let lastY = scrollY;
    let direction: 'up' | 'down' = 'down';
    let energy = 0;
    let targetEnergy = 0;

    const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

    const setDirectionClass = (direction: 'up' | 'down') => {
      document.body.classList.toggle(SCROLL_UP_CLASS, direction === 'up');
      document.body.classList.toggle(SCROLL_DOWN_CLASS, direction === 'down');
    };

    const setScrollProgress = () => {
      const maxScroll = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      const progress = clamp(scrollY / maxScroll, 0, 1);
      document.body.style.setProperty('--scroll-progress', progress.toFixed(4));
    };

    const applyScrollState = () => {
      document.body.style.setProperty('--scroll-energy', energy.toFixed(3));
      setScrollProgress();
      setDirectionClass(direction);
    };

    const animateEnergy = () => {
      energy += (targetEnergy - energy) * 0.22;
      targetEnergy *= 0.9;
      if (targetEnergy < 0.012) targetEnergy = 0;

      applyScrollState();

      if (Math.abs(targetEnergy - energy) > 0.004 || targetEnergy > 0) {
        rafId = window.requestAnimationFrame(animateEnergy);
      } else {
        energy = 0;
        applyScrollState();
        rafId = 0;
      }
    };

    const onScroll = () => {
      scrollY = window.scrollY;
      const delta = scrollY - lastY;
      const distance = Math.abs(delta);

      if (distance > 1) {
        direction = delta > 0 ? 'down' : 'up';
        targetEnergy = Math.max(targetEnergy, clamp(distance / 52, 0, 1));
      }

      lastY = scrollY;
      if (!rafId) rafId = window.requestAnimationFrame(animateEnergy);
    };

    const onResize = () => setScrollProgress();

    applyScrollState();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize, { passive: true });

    return () => {
      if (rafId) window.cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      document.body.style.removeProperty('--scroll-energy');
      document.body.style.removeProperty('--scroll-progress');
      document.body.classList.remove(SCROLL_UP_CLASS, SCROLL_DOWN_CLASS);
    };
  }, []);

  useEffect(() => {
    const targets = Array.from(document.querySelectorAll<HTMLElement>('[data-scroll-reveal]'));
    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            target.classList.add('is-visible');
            observer.unobserve(target);
          }
        });
      },
      {
        threshold: 0.16,
      }
    );

    targets.forEach((target, index) => {
      if (!target.style.getPropertyValue('--scroll-reveal-delay')) {
        target.style.setProperty('--scroll-reveal-delay', `${index * 50}ms`);
      }
      observer.observe(target);
    });

    return () => observer.disconnect();
  }, []);
};
