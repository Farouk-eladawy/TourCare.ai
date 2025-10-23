'use client';
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import AutomationPlayground from '../components/AutomationPlayground';

const PlaygroundPage: React.FC = () => {
    const { content } = useContext(AppContext);
    return (
        <AutomationPlayground content={content.playground} />
    );
};

export default PlaygroundPage;
