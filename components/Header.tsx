import React, { useState, useRef, useEffect, FC } from 'react';
import { Language, HeaderContent, NavDropdown as NavDropdownType } from '../types';

interface HeaderProps {
  content: HeaderContent;
  lang: Language;
  availableLangs: Language[];
  changeLanguage: (lang: Language) => void;
  onCtaClick: () => void;
}

// Self-contained Dropdown component for Products
const NavDropdown: FC<{ item: NavDropdownType }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-700 hover:text-brand-accent transition flex items-center gap-1 font-semibold"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {item.title}
        <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute top-full ltr:left-0 rtl:right-0 mt-3 w-64 bg-white rounded-md shadow-lg border border-gray-200/80 p-2">
          {item.items.map((subItem) => (
            <a
              key={subItem.href}
              href={subItem.href}
              onClick={() => setIsOpen(false)}
              className="block p-3 rounded-md hover:bg-brand-light-gray"
            >
              <p className="font-semibold text-gray-800">{subItem.text}</p>
              <p className="text-sm text-gray-500">{subItem.description}</p>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

// Language Switcher Dropdown
const LanguageSwitcher: FC<{ currentLang: Language; availableLangs: Language[]; onChange: (lang: Language) => void; }> = ({ currentLang, availableLangs, onChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
         <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-brand-accent transition flex items-center gap-1 font-semibold"
                aria-haspopup="true"
                aria-expanded={isOpen}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 2a8 8 0 015.407 13.543l1.821 1.822a.5.5 0 01-.353.853h-3.32a.5.5 0 01-.48-.636l.707-1.768A6 6 0 1010 4z" />
                    <path d="M10.5 5a.5.5 0 00-1 0v4.879l-1.854-.463a.5.5 0 00-.592.592l2.5 1a.5.5 0 00.48-.013l3.5-2a.5.5 0 00-.217-.925L10.5 7.88V5z" />
                </svg>
                <span className="uppercase">{currentLang}</span>
            </button>
            {isOpen && (
                <div className="absolute top-full ltr:right-0 rtl:left-0 mt-3 w-32 bg-white rounded-md shadow-lg border border-gray-200/80 p-1">
                    {availableLangs.map(langCode => (
                        <button
                            key={langCode}
                            onClick={() => { onChange(langCode); setIsOpen(false); }}
                            className={`w-full text-start p-2 rounded-md hover:bg-brand-light-gray font-semibold ${langCode === currentLang ? 'text-brand-accent' : 'text-gray-800'}`}
                        >
                            {langCode.toUpperCase()}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}

const Header: React.FC<HeaderProps> = ({ content, lang, availableLangs, changeLanguage, onCtaClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Dynamically set header classes based on scroll position
  const headerClasses = `
    sticky top-0 z-50 transition-all duration-300
    ${isScrolled
      ? 'bg-brand-white/80 backdrop-blur-lg border-b border-gray-200/80 shadow-sm'
      : 'bg-transparent border-b-transparent'
    }
  `;

  return (
    <header id="main-header" className={headerClasses}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#/" className="text-2xl font-bold text-gray-900">
          TourCare<span className="text-brand-accent">.ai</span>
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          {content.navItems.map((item, index) => {
            if (item.type === 'link') {
              return (
                <a key={index} href={item.href} className="text-gray-700 hover:text-brand-accent transition font-semibold">
                  {item.text}
                </a>
              );
            }
            if (item.type === 'dropdown') {
              return <NavDropdown key={index} item={item} />;
            }
            return null;
          })}
        </nav>
        <div className="flex items-center space-x-4">
          <LanguageSwitcher currentLang={lang} availableLangs={availableLangs} onChange={changeLanguage} />
          <button onClick={onCtaClick} className="hidden sm:block bg-brand-accent text-white font-bold px-5 py-2 rounded-md hover:bg-brand-accent-hover transition">
            {content.cta}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
