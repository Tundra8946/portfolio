import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 xl:gap-24 md:items-center">
          <div>
            <h1 className="block text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white tracking-tight mb-4">
              <span className="text-cyan-500">Tundra's</span> Portfolio
            </h1>
            <p className="mt-5 text-lg text-gray-700 dark:text-neutral-400">
              Hi, I'm Tundra. I’m an experienced developer specializing in Node.js, but my skills extend across various programming languages, enabling me to create flexible and effective solutions for diverse needs. I’m passionate about innovation and dedicated to quality, always using the best tools and components to support entrepreneurs and propel their projects. Currently, I’m one of the lead developers at Stratos Tech.
            </p>

            <div className="mt-7 flex flex-wrap gap-4">
              <a
                className="py-3 px-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-full bg-gradient-to-r from-blue-500 to-blue-700 text-white hover:from-blue-600 hover:to-blue-800 shadow-lg transform hover:scale-105 transition-transform duration-200 focus:outline-none"
                href="/projects"
              >
                Projects
                <svg className="shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </a>
              <a
                className="py-3 px-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-full bg-gradient-to-r from-purple-500 to-purple-700 text-white hover:from-purple-600 hover:to-purple-800 shadow-lg transform hover:scale-105 transition-transform duration-200 focus:outline-none"
                href="https://stratostech.xyz"
              >
                Stratos Tech
                <svg className="shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </a>
            </div>
            <div className="flex space-x-4 mt-6">
              <a
                aria-label="GitHub"
                className="p-3 rounded-full bg-gray-700 hover:bg-gray-600 text-white shadow-md transform hover:scale-105 transition-transform duration-200"
                href="https://github.com/Tundra8946"
              >
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </a>
              <a
                aria-label="Discord"
                className="p-3 rounded-full bg-gray-700 hover:bg-gray-600 text-white shadow-md transform hover:scale-105 transition-transform duration-200"
                href="https://discord.com/users/101089222383369476"
              >
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 -15 130.14 100.36" fill="currentColor">
                  <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0A105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
                </svg>
              </a>
            </div>
            <p className="text-gray-500 mt-2 text-sm">If you would like to get ahold of me, please go to the Stratos Tech website.</p>
          </div>

          <div className="relative ms-4">
            <Image
              className="max-w-lg rounded-md shadow-lg transform hover:scale-105 transition-transform duration-300"
              src="https://cdn.stratostech.xyz/images/Tundra/Tundra.png"
              alt="Hero Image"
              width={800}
              height={800}
            />
            <div className="absolute inset-0 -z-[1] bg-gradient-to-tr from-gray-200 via-white/0 to-white/0 rounded-md mt-4 -mb-4 me-4 -ms-4 lg:mt-6 lg:-mb-6 lg:me-6 lg:-ms-6 dark:from-neutral-800 dark:via-neutral-900/0 dark:to-neutral-900/0"></div>
          </div>
        </div>
      </div>
    </main>
  );
}
