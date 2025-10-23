'use client';
import React, { createContext } from 'react';
import { Content, Language, Direction } from '../types';
import { getContent } from '../data/localization';

interface AppContextType {
    openAuthModal: (planName?: string | null) => void;
    setIsVideoModalOpen: (isOpen: boolean) => void;
    content: Content;
    lang: Language;
    changeLanguage: (lang: Language) => void;
    availableLangs: Language[];
    dir: Direction;
}

export const AppContext = createContext<AppContextType>({
    openAuthModal: () => {},
    setIsVideoModalOpen: () => {},
    content: getContent('en'),
    lang: 'en',
    changeLanguage: () => {},
    availableLangs: ['en', 'ar', 'de', 'es'],
    dir: 'ltr',
});
