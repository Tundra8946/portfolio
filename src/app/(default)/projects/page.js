"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import DetailedViewButton from "@/components/DetailedViewButton";

export default function ProjectsPage() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        // Fetch the projects data
        const fetchData = async () => {
            const response = await fetch("/projects.json");
            const data = await response.json();
            setProjects(data.projects);
        };

        fetchData();
    }, []);

    const getStatusStyle = (status) => {
        switch (status) {
            case "Active":
                return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
            case "Pending":
                return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
            default:
                return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300";
        }
    };

    return (
        <section className="py-10">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="pt-10 pb-16 md:pt-16 md:pb-24">
                    <div className="max-w-[85rem] mx-auto">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {projects.map((project, index) => (
                                <div
                                    key={index}
                                    className="group flex flex-col h-full bg-white border border-gray-200 shadow-lg rounded-xl dark:bg-gray-800 dark:border-gray-700 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                                >
                                    <div className="h-48 bg-slate-700 flex items-center justify-center p-4">
                                        <Image
                                            src={project.icon}
                                            alt={project.name}
                                            height={112}
                                            width={112}
                                            className="object-contain"
                                        />
                                    </div>
                                    <div className="p-5 flex flex-col flex-grow">
                                        <div className="flex justify-between items-start mb-2">
                                            <span className="text-xs font-semibold uppercase text-blue-600 dark:text-blue-400">
                                                {project.category}
                                            </span>
                                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusStyle(project.status)}`}>
                                                {project.status}
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                                            {project.name}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow"
                                            dangerouslySetInnerHTML={{ __html: project.description }}>
                                        </p>
                                        <div className="flex justify-center items-center space-x-4">
                                            {project.url && (
                                                <a
                                                    href={project.url}
                                                    className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-700 text-white hover:from-blue-600 hover:to-blue-800 transition-transform transform hover:scale-105 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    aria-label="View Website"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="20"
                                                        height="20"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        className="lucide lucide-link"
                                                    >
                                                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                                                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                                                    </svg>
                                                </a>
                                            )}

                                            <DetailedViewButton
                                                project={`${project.project}`}
                                                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors duration-300"
                                            >
                                                View Details
                                            </DetailedViewButton>
                                        </div>

                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
