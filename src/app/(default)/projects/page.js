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
                return "bg-green-200 text-green-800 dark:bg-green-800 dark:text-green-200";
            case "Pending":
                return "bg-yellow-200 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-200";
            case "Disabled":
                return "bg-red-200 text-red-800 dark:bg-red-800 dark:text-red-200";
            default:
                return "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-300";
        }
    };

    return (
        <section className="py-12">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-10">
                    My Projects
                </h2>
                {projects.length === 0 ? (
                    <p className="text-center text-gray-500 dark:text-gray-400">
                        No projects available at the moment.
                    </p>
                ) : (
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="group relative bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
                            >
                                {/* Project Image */}
                                <div className={`h-48 ${project.gradient} rounded-t-xl flex items-center justify-center`}>
                                    <Image
                                        src={project.icon}
                                        alt={project.name}
                                        height={96}
                                        width={96}
                                        className="object-contain"
                                    />
                                </div>
                                {/* Project Details */}
                                <div className="p-5 flex flex-col flex-grow">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-xs font-medium text-blue-600 dark:text-blue-400 uppercase">
                                            {project.category}
                                        </span>
                                        <span
                                            className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusStyle(
                                                project.status
                                            )}`}
                                        >
                                            {project.status}
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                        {project.name}
                                    </h3>
                                    <p
                                        className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed"
                                        dangerouslySetInnerHTML={{
                                            __html: project.description,
                                        }}
                                    />
                                </div>
                                {/* Hover Overlay */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-lg">
                                    <div className="flex space-x-3">
                                        {project.url && (
                                            <a
                                                href={project.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-3 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-transform transform hover:scale-105 shadow-sm"
                                                aria-label="View Website"
                                            >
                                                Visit Site
                                            </a>
                                        )}
                                        <DetailedViewButton
                                            project={project.project}
                                            className="px-3 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-transform transform hover:scale-105 shadow-sm"
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
