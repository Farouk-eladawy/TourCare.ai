import React, { useState, useRef, useEffect, FC } from 'react';
import { Link } from 'react-router-dom';
import { Language, HeaderContent, NavDropdown as NavDropdownType } from '../types';

interface HeaderProps {
  content: HeaderContent;
  lang: Language;
  availableLangs: Language[];
  changeLanguage: (lang: Language) => void;
  onCtaClick: () => void;
}

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
        <div className="absolute top-full ltr:left-0 rtl:right-0 mt-3 w-64 bg-white rounded-md shadow-lg border border-gray-200/80 p-2 z-20">
          {item.items.map((subItem) => (
            <Link
              key={subItem.href}
              to={subItem.href.replace('#', '')}
              onClick={() => setIsOpen(false)}
              className="block p-3 rounded-md hover:bg-brand-light-gray"
            >
              <p className="font-semibold text-gray-800">{subItem.text}</p>
              <p className="text-sm text-gray-500">{subItem.description}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

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
                <div className="absolute top-full ltr:right-0 rtl:left-0 mt-3 w-32 bg-white rounded-md shadow-lg border border-gray-200/80 p-1 z-20">
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

const MobileMenu: FC<{
  isOpen: boolean;
  onClose: () => void;
  content: HeaderContent;
  lang: Language;
  onCtaClick: () => void;
}> = ({ isOpen, onClose, content, lang, onCtaClick }) => {
  const handleCtaClick = () => {
    onClose();
    onCtaClick();
  };

  return (
    <div
      className={`fixed inset-0 z-50 transition-opacity duration-300 ease-in-out ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div
        className="absolute inset-0 bg-black/60"
        onClick={onClose}
        aria-hidden="true"
      ></div>
      <div
        className={`absolute top-0 h-full w-full max-w-sm bg-white shadow-xl transition-transform duration-300 ease-in-out ${
          lang === 'ar'
            ? `right-0 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`
            : `left-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`
        }`}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-4 border-b border-gray-200">
            <Link to="/" onClick={onClose} className="block" aria-label="TourCare.ai Home">
              <img
                src="https://res.cloudinary.com/dqlurfwet/image/upload/v1760801741/20251018_1834_%D8%AA%D9%83%D8%A8%D9%8A%D8%B1_%D9%84%D9%88%D8%AC%D9%88_TourCare.AI_remix_01k7vz6rjze1gbrer8wx1eke0k_qgdxxq.png"
                alt="TourCare.ai logo"
                style={{ height: 'var(--logo-height)' }}
                className="object-contain max-w-[200px]"
              />
            </Link>
            <button onClick={onClose} className="p-2 text-gray-500 hover:text-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              <span className="sr-only">Close menu</span>
            </button>
          </div>
          <nav className="flex-grow p-6 space-y-4 overflow-y-auto">
            {content.navItems.map((item, index) => {
              if (item.type === 'link') {
                return (
                  <Link key={index} to={item.href.replace('#', '')} onClick={onClose} className="block text-lg font-semibold text-gray-700 hover:text-brand-accent transition py-2">
                    {item.text}
                  </Link>
                );
              }
              if (item.type === 'dropdown') {
                return (
                  <div key={index} className="py-2">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                    <div className="space-y-2 ltr:pl-4 rtl:pr-4 border-l-2 border-brand-accent/20 ltr:border-l-2 rtl:border-r-2">
                      {item.items.map(subItem => (
                        <Link key={subItem.href} to={subItem.href.replace('#', '')} onClick={onClose} className="block text-gray-600 hover:text-brand-accent transition py-1">
                          {subItem.text}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }
              return null;
            })}
          </nav>
          <div className="p-6 border-t border-gray-200 mt-auto">
            <button onClick={handleCtaClick} className="w-full bg-brand-accent text-white font-bold px-5 py-3 rounded-md hover:bg-brand-accent-hover transition">
              {content.cta}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Header: React.FC<HeaderProps> = ({ content, lang, availableLangs, changeLanguage, onCtaClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const headerClasses = `
    sticky top-0 z-40 transition-all duration-300
    ${isScrolled
      ? 'bg-white/80 backdrop-blur-lg border-b border-gray-200/80 shadow-sm'
      : 'bg-transparent border-b-transparent'
    }
  `;

  return (
    <>
      <header id="main-header" className={headerClasses}>
        <div className="container mx-auto px-6 py-0 flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="block z-10" aria-label="TourCare.ai Home">
              <img 
                src="https://res.cloudinary.com/dqlurfwet/image/upload/v1760801741/20251018_1834_%D8%AA%D9%83%D8%A8%D9%8A%D8%B1_%D9%84%D9%88%D8%AC%D9%88_TourCare.AI_remix_01k7vz6rjze1gbrer8wx1eke0k_qgdxxq.png" 
                alt="TourCare.ai logo" 
                style={{ height: 'var(--logo-height)' }}
                className="object-contain"
              />
            </Link>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {content.navItems.map((item, index) => {
              if (item.type === 'link') {
                return <Link key={index} to={item.href.replace('#', '')} className="text-gray-700 hover:text-brand-accent transition font-semibold">{item.text}</Link>;
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
            {/* Mobile Menu Button */}
            <button onClick={() => setIsMobileMenuOpen(true)} className="md:hidden p-2 text-gray-700 hover:text-brand-accent z-10" aria-label="Open menu">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        content={content}
        lang={lang}
        onCtaClick={onCtaClick}
      />
    </>
  );
};

export default Header;
