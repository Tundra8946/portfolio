'use client';

import { Suspense } from 'react';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

function GradientContent() {
    const searchParams = useSearchParams();
    const [isAuthorized, setIsAuthorized] = useState(false);

    useEffect(() => {
        const secret = searchParams.get('secret');
        setIsAuthorized(secret === 'gradients');

        if (secret === 'gradients') {
            const gradients = [
                'bg-gradient-blue-purple from-blue-500 to-purple-600',
                'bg-gradient-blue-red from-blue-600 to-red-500',
                'bg-gradient-green-blue from-green-400 to-blue-500',
                'bg-gradient-blue-purple from-blue-500 to-blue-600'
            ];

            const gradientStyles = gradients.map(gradient =>
                `.bg-gradient-to-r.${gradient.replace(/ /g, '.')} { background-image: linear-gradient(to right, var(--tw-gradient-stops)); }`
            ).join('\n');

            const styleElement = document.createElement('style');
            styleElement.textContent = gradientStyles;
            document.head.appendChild(styleElement);
        }
    }, [searchParams]);

    if (!isAuthorized) {
        return (
            <div className="flex items-center justify-center min-h-[80vh] ">
                <div className="text-center p-8 bg-gray-800 shadow-md rounded-lg">
                    <h1 className="text-2xl font-bold text-white mb-4">Access Denied</h1>
                    <p className="text-gray-300">You are not authorized to view this page. </p>
                </div>
            </div>
        );
    }

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Gradient Generator</h1>
            <p>Gradient styles have been added to the page.</p>
            <div className="mt-4 space-y-4">
                <div className="h-20 w-full bg-gradient-to-r bg-gradient-blue-purple from-blue-500 to-purple-600"></div>
                <div className="h-20 w-full bg-gradient-to-r bg-gradient-blue-red from-blue-600 to-red-500"></div>
                <div className="h-20 w-full bg-gradient-to-r bg-gradient-green-blue from-green-400 to-blue-500"></div>
            </div>
        </div>
    );
}

export default function GradientGenerator() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <GradientContent />
        </Suspense>
    );
}