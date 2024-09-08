import { useState, useEffect } from 'react';
import Image from 'next/image';
import Modal from './Modal';
import JsxParser from 'react-jsx-parser'; // Import the library

let cachedProjectsData = null;

const fetchData = async () => {
    if (!cachedProjectsData) {
        const response = await fetch('/projects.json');
        cachedProjectsData = await response.json();
    }
    return cachedProjectsData;
};

const DetailedViewButton = ({ project }) => {
    const [modalData, setModalData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [isImageModalOpen, setIsImageModalOpen] = useState(false);
    const [error, setError] = useState(null);
    const [projectsData, setProjectsData] = useState({ projects: [] });

    useEffect(() => {
        const loadProjects = async () => {
            const data = await fetchData();
            setProjectsData(data);
        };
        loadProjects();
    }, []);

    const handleClick = async () => {
        setLoading(true);
        const fproject = projectsData.projects.find(p => p.project === project);
        if (fproject) {
            setModalData(fproject);
            setError(null);
        } else {
            setError("Project not found");
            setModalData(null);
        }
        setLoading(false);
    };

    const handleCloseProjectModal = () => {
        setModalData(null);
        setIsImageModalOpen(false);
        setError(null);
    };

    const openImageModal = () => {
        setIsImageModalOpen(true);
    };

    const closeImageModal = () => {
        setIsImageModalOpen(false);
    };

    return (
        <div className="flex justify-center items-center space-x-4">
            <button
                onClick={handleClick}
                className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-700 text-white hover:from-blue-600 hover:to-blue-800 transition-transform transform hover:scale-105 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="View Details"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 16v-4" />
                    <path d="M12 8h.01" />
                </svg>
            </button>

            {loading && (
                <Modal isOpen={loading} onClose={() => { }} aria-live="polite">
                    <div className="w-8 h-8 border-4 border-t-4 border-t-transparent border-white rounded-full animate-spin"></div>
                </Modal>
            )}

            {error && (
                <Modal isOpen={Boolean(error)} onClose={handleCloseProjectModal} aria-live="polite">
                    <h2 className="text-2xl font-bold mb-4 text-red-600">Error</h2>
                    <p className="text-lg mb-6 text-center">{error}</p>
                </Modal>
            )}

            {modalData && !loading && !error && (
                <Modal isOpen={Boolean(modalData)} onClose={handleCloseProjectModal} size="max-w-2xl p-6">
                    <div className="text-center mb-4">
                        <Image
                            src={modalData.icon}
                            width={120}
                            height={120}
                            className='mx-auto mb-4 rounded-full shadow-md'
                            alt={`${modalData.name} icon`}
                        />
                        <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">{modalData.name}</h2>
                        <div className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                            <JsxParser jsx={modalData.description} /> {/* Render HTML */}
                        </div>
                    </div>
                    <div className="bg-neutral-900 rounded-lg overflow-hidden p-4 mb-4">
                        <h3 className="text-xl font-semibold mb-2 text-gray-200">Features</h3>
                        <ul className="list-disc pl-5 text-gray-300">
                            {modalData.features.map((item, index) => (
                                <li key={index} className="text-sm mb-1">{item}</li>
                            ))}
                        </ul>
                    </div>
                    {modalData.exampleImage && (
                        <div className='bg-neutral-900 rounded-lg shadow-lg overflow-hidden p-4'>
                            <h3 className="text-xl font-semibold mb-3 text-gray-200">Example Image</h3>
                            <div className='cursor-pointer' onClick={openImageModal}>
                                <Image
                                    src={modalData.exampleImage}
                                    width={800}
                                    height={450}
                                    className='w-full h-auto mx-auto rounded-lg shadow-custom'
                                    alt="Example"
                                />
                            </div>
                        </div>
                    )}
                </Modal>
            )}

            <Modal isOpen={isImageModalOpen} onClose={closeImageModal} size="max-w-screen-xl max-h-screen">
                <img
                    src={modalData?.exampleImage}
                    alt="Zoomed Example"
                    className="max-w-full max-h-full object-contain rounded-xl"
                />
            </Modal>
        </div>
    );
};

export { DetailedViewButton };
