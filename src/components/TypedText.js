'use client';

import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypedText = () => {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: [
                'Node.js Specialist',
                'Tech Innovator',
                'Problem Solver',
                'Lead Developer at Stratos Tech'
            ],
            typeSpeed: 70,
            backSpeed: 50,
            loop: true,
            shuffle: false,
            smartBackspace: true,
            startDelay: 500,
            backDelay: 2000,
            fadeOut: true,
            fadeOutClass: 'typed-fade-out',
            fadeOutDelay: 500,
            cursorChar: '|',
            autoInsertCss: true,
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return <span ref={el} className="font-bold text-blue-400 text-xl"></span>;
};

export default TypedText;
