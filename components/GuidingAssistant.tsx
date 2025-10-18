import React, { useState, useEffect, useRef } from 'react';
import { Language } from '../types';

interface GuidingAssistantProps {
  onOpenAssistant: () => void;
  lang: Language;
  currentRoute: string;
}

// SVG Icon Component, customizable via CSS variables from index.html
const BotIcon = () => (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="AI Assistant Bot" style={{ width: '100%', height: '100%' }}>
        <path d="M40 26C40 33.732 32.8366 40 24 40C15.1634 40 8 33.732 8 26" fill="rgba(0,0,0,0.1)" />
        <rect x="8" y="14" width="32" height="24" rx="16" fill="var(--bot-color-primary)" />
        <rect x="12" y="18" width="24" height="12" rx="6" fill="#000000" />
        <circle cx="19" cy="24" r="3.5" fill="var(--bot-color-secondary)" />
        <circle cx="19" cy="24" r="2" fill="var(--bot-color-eye-glow)" />
        <circle cx="29" cy="24" r="3.5" fill="var(--bot-color-secondary)" />
        <circle cx="29" cy="24" r="2" fill="var(--bot-color-eye-glow)" />
        <line x1="24" y1="14" x2="24" y2="10" stroke="var(--bot-color-primary)" strokeWidth="2" strokeLinecap="round" />
        <circle cx="24" cy="8" r="2.5" fill="var(--bot-color-secondary)" />
        <circle cx="24" cy="8" r="1" fill="var(--bot-color-eye-glow)" />
    </svg>
);

// FIX: Added missing de/es language properties to align with the `Language` type.
const sectionMessages: Record<string, { [key in Language]: string }> = {
    'hero': { en: "Welcome! Let's explore how we can automate your business.", ar: "أهلاً بك! دعنا نستكشف كيف يمكننا أتمتة أعمالك.", de: "Welcome! Let's explore how we can automate your business.", es: "Welcome! Let's explore how we can automate your business." },
    'stats': { en: "See the impact! We deliver measurable results for your business.", ar: "شاهد التأثير! نقدم نتائج قابلة للقياس لعملك.", de: "See the impact! We deliver measurable results for your business.", es: "See the impact! We deliver measurable results for your business." },
    'who-it-is-for': { en: "Is this for you? Absolutely, if you're a growth-focused operator.", ar: "هل هذا لك؟ بالطبع، إذا كنت تركز على النمو.", de: "Is this for you? Absolutely, if you're a growth-focused operator.", es: "Is this for you? Absolutely, if you're a growth-focused operator." },
    'workflow': { en: "Our process is simple, powerful, and transparent.", ar: "عمليتنا بسيطة، قوية، وشفافة.", de: "Our process is simple, powerful, and transparent.", es: "Our process is simple, powerful, and transparent." },
    'features': { en: "Check out our core features designed to save you time.", ar: "اطلع على ميزاتنا الأساسية المصممة لتوفير وقتك.", de: "Check out our core features designed to save you time.", es: "Check out our core features designed to save you time." },
    'cta': { en: "Ready to start? Let's book a free consultation.", ar: "هل أنت مستعد للبدء؟ لنتحدث في استشارة مجانية.", de: "Ready to start? Let's book a free consultation.", es: "Ready to start? Let's book a free consultation." },
    'testimonials': { en: "Don't just take our word for it, see what our partners say.", ar: "لا تأخذ كلمتنا فقط، انظر ماذا يقول شركاؤنا.", de: "Don't just take our word for it, see what our partners say.", es: "Don't just take our word for it, see what our partners say." },
};


const GuidingAssistant: React.FC<GuidingAssistantProps> = ({ onOpenAssistant, lang, currentRoute }) => {
  const isHomePage = currentRoute === '#/' || currentRoute === '';
  const [position, setPosition] = useState({ top: '85%', left: '3rem' });
  const [message, setMessage] = useState(sectionMessages['hero'][lang]);
  const [showMessage, setShowMessage] = useState(false);
  const [isMinimized, setIsMinimized] = useState(true);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [botSize, setBotSize] = useState(96);
  
  const bubbleTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  
  // Effect to get dynamic CSS variables and DOM element sizes
  useEffect(() => {
    if (isHomePage) {
      const headerEl = document.getElementById('main-header');
      if (headerEl) {
        setHeaderHeight(headerEl.offsetHeight);
      }

      const sizeStr = getComputedStyle(document.documentElement).getPropertyValue('--bot-size').trim().replace('px', '');
      const size = parseInt(sizeStr, 10);
      if (!isNaN(size)) {
        setBotSize(size);
      }
    }
  }, [isHomePage]);
  
  // Effect for dynamic guiding behavior on the homepage
  useEffect(() => {
    if (!isHomePage || headerHeight === 0) return;

    const observer = new IntersectionObserver(
        (entries) => {
            const visibleEntry = entries.find(entry => entry.isIntersecting);
            if (visibleEntry) {
                const sectionId = visibleEntry.target.getAttribute('data-section-id');
                const rect = visibleEntry.intersectionRect; 
                
                if (sectionId && sectionMessages[sectionId]) {
                    const windowWidth = window.innerWidth;
                    const leftPosition = windowWidth > 768 ? '3rem' : '1rem';
                    
                    const newTop = rect.top + rect.height / 2;
                    
                    // The minimum top position should ensure the bot's top edge is below the header.
                    // The `top` style is for the center of the bot due to translateY(-50%).
                    // We want the bot's top edge (top - botSize/2) to be >= headerHeight.
                    // Therefore, the minimum center position `top` must be `headerHeight + botSize/2`.
                    // A 16px buffer is added for spacing.
                    const minTop = headerHeight + (botSize / 2) + 16;
                    const finalTop = Math.max(newTop, minTop);

                    setPosition({
                        top: `${finalTop}px`,
                        left: leftPosition,
                    });
                    
                    setMessage(sectionMessages[sectionId][lang]);
                    setShowMessage(true);
                    
                    if (bubbleTimeoutRef.current) clearTimeout(bubbleTimeoutRef.current);
                    bubbleTimeoutRef.current = setTimeout(() => setShowMessage(false), 5000);
                }
            }
        },
        { rootMargin: '-30% 0px -30% 0px', threshold: 0.1 }
    );

    const sections = document.querySelectorAll('[data-section-id]');
    sections.forEach(sec => observer.observe(sec));
    
    // Initial reveal
    const entryTimeout = setTimeout(() => {
        setIsMinimized(false);
        setShowMessage(true);
        bubbleTimeoutRef.current = setTimeout(() => setShowMessage(false), 5000);
    }, 1500);

    return () => {
        sections.forEach(sec => observer.unobserve(sec));
        if (bubbleTimeoutRef.current) clearTimeout(bubbleTimeoutRef.current);
        clearTimeout(entryTimeout);
    };
  }, [isHomePage, lang, headerHeight, botSize]);

  // Effect for handling language change in messages
  useEffect(() => {
    if(isHomePage) {
      setMessage(msg => {
        const key = Object.keys(sectionMessages).find(k => sectionMessages[k]['en'] === msg || sectionMessages[k]['ar'] === msg);
        return key ? sectionMessages[key][lang] : sectionMessages['hero'][lang];
      });
    }
  }, [lang, isHomePage]);


  if (isHomePage) {
    // DYNAMIC GUIDING BOT for HomePage
    return (
      <div 
        className={`fixed z-40 transition-all duration-700 ease-in-out transform ${isMinimized ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}
        style={{ top: position.top, left: position.left, transform: 'translateY(-50%)' }}
      >
        <div className="relative">
          <button
            onClick={onOpenAssistant}
            className="bg-brand-blue p-3 rounded-full shadow-lg transition-transform duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-accent"
            style={{ width: 'var(--bot-size)', height: 'var(--bot-size)' }}
            role="button"
            aria-label="Open AI Assistant"
          >
            <BotIcon />
          </button>
          
          <div className={`
            absolute bottom-1/2 left-full ml-4 transform translate-y-1/2 
            w-64 p-4 bg-brand-blue text-white text-base font-semibold rounded-lg shadow-xl 
            transition-all duration-500 ease-out origin-left
            ${showMessage ? 'scale-100 opacity-100' : 'scale-75 opacity-0'}
          `}>
            {message}
            <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-brand-blue transform rotate-45"></div>
          </div>
        </div>
      </div>
    );
  } else {
    // STATIC FLOATING ACTION BUTTON for other pages
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
      const timer = setTimeout(() => setIsVisible(true), 500);
      return () => clearTimeout(timer);
    }, []);

    return (
       <div className="fixed bottom-6 right-6 z-40 group">
          <button
              onClick={onOpenAssistant}
              className={`bg-brand-blue p-3 rounded-full shadow-lg transition-all duration-300 ease-in-out hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-accent ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}
              style={{ width: '64px', height: '64px' }}
              role="button"
              aria-label="Open AI Assistant"
          >
              <BotIcon />
          </button>
          <div className="absolute bottom-1/2 right-full mr-4 transform translate-y-1/2 px-3 py-1.5 bg-brand-blue text-white text-sm font-semibold rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
            {lang === 'ar' ? 'المساعد الذكي' : 'AI Assistant'}
            <div className="absolute top-1/2 left-full -translate-y-1/2 w-2 h-2 bg-brand-blue transform rotate-45"></div>
          </div>
        </div>
    );
  }
};

export default GuidingAssistant;