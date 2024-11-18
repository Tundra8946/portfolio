"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import DetailedViewButton from "@/components/DetailedViewButton";

export default function ProjectsPage() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
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
            case "Disabled":
                return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
            default:
                return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300";
        }
    };

    return (
        <section className="py-16 ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-12 text-center">
                    My Projects
                </h2>
                {projects.length === 0 ? (
                    <p className="text-center text-gray-500 dark:text-gray-400">
                        No projects available at the moment.
                    </p>
                ) : (
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="group relative flex flex-col h-full bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
                            >
                                {/* Project Image */}
                                <div
                                    className={`h-48 bg-gradient-to-r ${project.gradient} flex items-center justify-center p-4`}
                                >
                                    <Image
                                        src={project.icon}
                                        alt={project.name}
                                        height={112}
                                        width={112}
                                        className="object-contain filter drop-shadow-lg"
                                    />
                                </div>
                                {/* Project Details */}
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex justify-between items-center mb-4">
                                        <span className="text-sm font-medium uppercase text-blue-600 dark:text-blue-400 tracking-wide">
                                            {project.category}
                                        </span>
                                        <span
                                            className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusStyle(
                                                project.status
                                            )}`}
                                        >
                                            {project.status}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                        {project.name}
                                    </h3>
                                    <p
                                        className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed flex-grow"
                                        dangerouslySetInnerHTML={{
                                            __html: project.description,
                                        }}
                                    />
                                </div>
                                {/* Hover Overlay */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-70 rounded-lg">
                                    <div className="flex space-x-4">
                                        {project.url && (
                                            <a
                                                href={project.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
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
                                                >
                                                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                                                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                                                </svg>
                                            </a>
                                        )}
                                        <DetailedViewButton
                                            project={project.project}
                                            className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-700 text-white hover:from-blue-600 hover:to-blue-800 transition-transform transform hover:scale-105 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        >
                                            View Details
                                        </DetailedViewButton>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
