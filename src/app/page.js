"use client";

import { useState } from "react";
import Image from "next/image";
import TypedText from "@/components/TypedText";

export default function Home() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [externalUrl, setExternalUrl] = useState("");

  const openModal = (url) => {
    setExternalUrl(url);
    setModalOpen(true);
  };

  const handleConfirm = () => {
    setModalOpen(false);
    window.open(externalUrl, "_blank", "noopener noreferrer");
  };

  const handleCancel = () => {
    setModalOpen(false);
    setExternalUrl("");
  };

  return (
    <main className="flex flex-col items-center py-16 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-6">
              <span className="text-blue-400">Tundra&apos;s</span> Portfolio
            </h1>
            <p className="text-2xl text-gray-300 mb-6">
              Empowering Ideas with <TypedText />
            </p>
            <p className="text-lg text-gray-400 leading-relaxed mb-8">
              Discover cutting-edge solutions, innovative projects, and a passion for turning ideas into reality. Explore my work and join me in shaping the future.
            </p>
            <div className="flex gap-4">
              <a
                href="/projects"
                className="py-3 px-6 inline-flex items-center gap-x-2 text-sm font-semibold rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                View Projects
                <svg
                  className="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
              <button
                onClick={() => openModal("https://stratostech.xyz")}
                className="py-3 px-6 inline-flex items-center gap-x-2 text-sm font-semibold rounded-md bg-purple-600 text-white hover:bg-purple-700 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                Explore Stratos Tech
                <svg
                  className="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <Image
              className="rounded-lg "
              src="https://cdn.stratostech.xyz/images/Tundra/TundraV2_T.png"
              alt="Tundra Showcase"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-800 text-white rounded-lg p-6 w-96 shadow-lg">
            <h3 className="text-xl font-semibold mb-4">
              Leave Tundra&apos;s Portfolio?
            </h3>
            <p className="text-sm text-gray-300 mb-6">
              You are about to visit an external website. Do you want to
              continue?
            </p>
            <div className="flex justify-end gap-4">
              <button
                onClick={handleCancel}
                className="py-2 px-4 rounded-md bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirm}
                className="py-2 px-4 rounded-md bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
