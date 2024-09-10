'use client';

import Link from 'next/link';

export default function Contact() {
    return (
        <div className="flex items-center justify-center h-[calc(90vh-64px)]">
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-8 shadow-xl max-w-md w-full">
                <h1 className="text-4xl font-bold mb-6 text-center text-white">Contact Me</h1>
                <p className="text-lg mb-8 text-center text-gray-300">Need assistance or have questions? Our team at Stratos Tech is here to help!</p>
                <div className="space-y-4">
                    <Link href="https://stratostech.xyz/contact" target="_blank" rel="noopener noreferrer" className="block">
                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 shadow-md hover:shadow-lg">
                            Contact Stratos Tech
                        </button>
                    </Link>
                    <p className="text-sm text-center text-gray-400">
                        Visit our website to get in touch with our team and explore our services.
                    </p>
                </div>
            </div>
        </div>
    );
}

