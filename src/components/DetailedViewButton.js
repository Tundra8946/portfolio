import { useState, useEffect } from 'react';
import Image from 'next/image';
import Modal from './Modal';
import JsxParser from 'react-jsx-parser';

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
        <>
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
                    <div className="flex items-center justify-center h-full">
                        <div className="w-12 h-12 border-4 border-t-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                </Modal>
            )}

            {error && (
                <Modal isOpen={Boolean(error)} onClose={handleCloseProjectModal} aria-live="polite">
                    <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-lg">
                        <h2 className="text-2xl font-bold mb-2">Error</h2>
                        <p className="text-lg">{error}</p>
                    </div>
                </Modal>
            )}

            {modalData && !loading && !error && (
                <Modal isOpen={Boolean(modalData)} onClose={handleCloseProjectModal} size="max-w-4xl w-full h-full sm:h-auto sm:max-h-[90vh]">
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl overflow-hidden h-full flex flex-col">
                        <button
                            className="absolute top-6 right-6 z-50 p-1 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-300 ease-in-out"
                            onClick={handleCloseProjectModal}
                            aria-label="Close modal"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>
                        <div className={`relative h-24 sm:h-32 bg-gradient-to-r ${modalData.gradient}`}>
                            <Image
                                src={modalData.icon}
                                layout="fill"
                                objectFit="contain"
                                className="p-2"
                                alt={`${modalData.name} icon`}
                            />

                        </div>
                        <div className="p-4 sm:p-6 overflow-y-auto flex-grow">
                            <h2 className="text-xl sm:text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100">{modalData.name}</h2>
                            <div className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                                <JsxParser jsx={modalData.description} />
                            </div>
                            <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3 mb-3">
                                <h3 className="text-base sm:text-lg font-semibold mb-1 text-gray-800 dark:text-gray-200">Features</h3>
                                <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-1">
                                    {modalData.features.map((item, index) => (
                                        <li key={index} className="text-xs">{item}</li>
                                    ))}
                                </ul>
                            </div>
                            {modalData.exampleImage && (
                                <div className="rounded-lg overflow-hidden shadow-lg">
                                    <h3 className="text-base sm:text-lg font-semibold mb-1 text-gray-800 dark:text-gray-200">Example</h3>
                                    <div className="cursor-pointer" onClick={openImageModal}>
                                        <Image
                                            src={modalData.exampleImage}
                                            width={800}
                                            height={450}
                                            layout="responsive"
                                            className="rounded-lg"
                                            alt="Example"
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </Modal>
            )}

            {isImageModalOpen && modalData && (
                <Modal isOpen={isImageModalOpen} onClose={closeImageModal} size="max-w-screen-lg w-full h-full flex items-center justify-center">
                    <div className="relative w-full h-full flex items-center justify-center bg-black bg-opacity-75">
                        <div className="relative w-full h-full max-w-4xl max-h-[80vh] flex items-center justify-center">
                            <Image
                                width={1920}
                                height={1080}
                                src={modalData?.exampleImage}
                                alt="Zoomed Example"
                                className="max-w-full max-h-full object-contain rounded-xl"
                            />
                        </div>
                        <button
                            onClick={closeImageModal}
                            className="absolute top-4 right-4 p-2 bg-white bg-opacity-50 rounded-full text-black hover:bg-opacity-75 transition-opacity z-10"
                            aria-label="Close"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>
                    </div>
                </Modal>
            )}
        </>
    );
};

export default DetailedViewButton;
