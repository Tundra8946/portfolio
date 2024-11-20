import { SiNextdotjs, SiPostgresql, SiTailwindcss, SiExpress, SiApache, SiNginx } from "react-icons/si";

export default function AboutMe() {
    const techStack = [
        { name: "Next.js", icon: <SiNextdotjs className="w-6 h-6 text-gray-300" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="w-6 h-6 text-blue-400" /> },
        { name: "TailwindCSS", icon: <SiTailwindcss className="w-6 h-6 text-teal-400" /> },
        { name: "Express.js", icon: <SiExpress className="w-6 h-6 text-gray-300" /> },
        { name: "Apache", icon: <SiApache className="w-6 h-6 text-red-500" /> },
        { name: "Nginx", icon: <SiNginx className="w-6 h-6 text-green-400" /> },
    ];

    return (
        <main className="min-h-screen text-white px-6 py-16 space-y-16">
            <section className="text-center">
                <h1 className="text-5xl font-bold">
                    Hi, I am <span className="text-blue-500">Tundra</span>
                </h1>
                <p className="text-lg text-gray-400 max-w-xl mx-auto mt-4 leading-relaxed">
                    Passionate about developing impactful projects with modern technologies. I thrive on learning, growing, and crafting innovative solutions.
                </p>
            </section>

            <section className="space-y-8 max-w-5xl mx-auto">
                <div className="bg-gray-800 p-6 rounded-md">
                    <h2 className="text-xl font-bold text-blue-400">About Me</h2>
                    <p className="text-gray-300 mt-2">
                        I specialize in building projects using Next.js while exploring Lua. I am deeply interested in backend technologies and creating scalable, high-performance applications.
                    </p>
                </div>
                <div className="bg-gray-800 p-6 rounded-md">
                    <h2 className="text-xl font-bold text-green-400">Current Focus</h2>
                    <p className="text-gray-300 mt-2">
                        I am focused on mastering GMOD Lua (GLua) to create custom scripts and enhance gameplay in Garry&apos;s Mod. Collaborating with a mentor, I am sharpening my skills and exploring new possibilities within the GLua ecosystem.
                    </p>
                </div>
            </section>

            <section className="max-w-5xl mx-auto">
                <h2 className="text-center text-3xl font-bold text-blue-400 mb-6">My Tech Stack</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {techStack.map((tech, index) => (
                        <div key={index} className="flex items-center gap-3 bg-gray-800 p-4 rounded-md shadow-sm hover:scale-105 transition-transform">
                            {tech.icon}
                            <span className="text-gray-200">{tech.name}</span>
                        </div>
                    ))}
                </div>
            </section>

            <section className="space-y-8 max-w-5xl mx-auto">
                <div className="bg-gray-800 p-6 rounded-md">
                    <h2 className="text-xl font-bold text-purple-400">Future Goals</h2>
                    <p className="text-gray-300 mt-2">
                        Developing my full-stack expertise, contributing to open-source projects, and mentoring others in the tech community.
                    </p>
                </div>
                <div className="bg-gray-800 p-6 rounded-md">
                    <h2 className="text-xl font-bold text-blue-400">What Drives Me</h2>
                    <p className="text-gray-300 mt-2">
                        Creating innovative, user-friendly applications and making a positive impact in the tech world.
                    </p>
                </div>
            </section>

            <section className="text-center">
                <h2 className="text-4xl font-bold text-blue-400 mb-4">Let&apos;s Connect</h2>
                <div className="flex justify-center gap-8">
                    <a href="https://github.com/Tundra8946" aria-label="GitHub" className="flex items-center gap-2 p-3 rounded-full shadow-xl bg-gray-700 text-white hover:bg-gray-700/50 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-900">
                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                        GitHub
                    </a>
                    <a href="https://discord.com/users/149692366419263488" aria-label="Discord" className="flex items-center gap-2 p-3 rounded-full shadow-xl bg-gray-700 text-white hover:bg-gray-700/50 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-900">
                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" /></svg>
                        Discord
                    </a>
                </div>
            </section>
        </main>
    );
}
