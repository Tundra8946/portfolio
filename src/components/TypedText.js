"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypedText = () => {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: [
                "Innovating Ideas",
                "Building Futures",
                "Creating Impact",
                "Shaping Technology",
            ],
            typeSpeed: 90,
            backSpeed: 90,
            loop: true,
            shuffle: true,
            startDelay: 300,
            backDelay: 1500,
            fadeOut: false,
            fadeOutClass: "typed-fade-out",
            fadeOutDelay: 300,
            cursorChar: "|",
            autoInsertCss: true,
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return <span ref={el} className="font-semibold text-blue-400 text-2xl"></span>;
};

export default TypedText;
