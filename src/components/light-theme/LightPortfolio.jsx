import React from 'react';

export default function LightPortfolio() {
    return (
        <div className="min-h-screen bg-gray-50 text-slate-800 font-sans overflow-x-hidden pt-16">

            {/* Hero Section */}
            <section id="hero" className="min-h-[85vh] flex flex-col justify-center items-center px-4 max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between w-full gap-12">
                    <div className="flex-1 space-y-6 text-center md:text-left">
                        <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm tracking-wide mb-4">
                            Welcome to my profile
                        </div>
                        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900">
                            Hi, I'm <span className="text-blue-600">Basavraj</span> Charate
                        </h1>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto md:mx-0 leading-relaxed">
                            Web Developer & AIML Specialist building elegant, sustainable solutions and exploring the frontiers of Machine Learning.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-6 justify-center md:justify-start">
                            <a
                                href="/resume.pdf"
                                download="Basavraj_Charate_Resume.pdf"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors shadow-lg shadow-blue-500/30"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                                Download Resume
                            </a>
                            <a
                                href="/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white border-2 border-slate-200 hover:border-slate-300 text-slate-700 font-medium transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                                View Resume
                            </a>
                        </div>
                    </div>

                    <div className="w-64 h-64 md:w-80 md:h-80 relative flex-shrink-0">
                        <div className="absolute inset-0 bg-blue-200 rounded-full blur-3xl opacity-50"></div>
                        <img
                            src="/images/profile.jpg"
                            alt="Basavraj Charate Profile"
                            className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-2xl"
                        />
                    </div>
                </div>
            </section>

            {/* About & Education */}
            <section id="about" className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">About & Journey</h2>

                    <p className="max-w-3xl mx-auto text-lg text-slate-600 text-center mb-12 leading-relaxed">
                        I am a motivated Computer Science student with a strong passion for software development, artificial intelligence, and data-driven problem solving. I enjoy transforming ideas into practical solutions and working on projects that address real-world challenges.
                    </p>

                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Education */}
                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm">
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                <span className="w-8 h-8 rounded bg-blue-100 flex items-center justify-center text-blue-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 8.56l-1.033.443a1 1 001.383l7 3a1 1 0 00.788 0l7-3a1 1 0 000-1.838l-2.033-.872c-.066.026-.134.048-.204.066l-7 3a1 1 0 01-.787 0l-7-3A1 1 0 003.31 8.56z" />
                                    </svg>
                                </span>
                                Education Background
                            </h3>
                            <div className="space-y-6">
                                <div className="border-l-2 border-blue-200 pl-4 relative">
                                    <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[7px] top-2"></div>
                                    <h4 className="font-bold text-lg">B-Tech CSE in AIML (2022 - 2026)</h4>
                                    <p className="text-slate-600">D. Y. Patil International University, Akurdi</p>
                                    <p className="text-sm font-medium text-slate-500 mt-1">CGPA: 7.46/10</p>
                                </div>
                                <div className="border-l-2 border-blue-200 pl-4 relative">
                                    <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[7px] top-2"></div>
                                    <h4 className="font-bold text-lg">HSC (12th) - 2022</h4>
                                    <p className="text-slate-600">DR D Y Patil, Pune</p>
                                    <p className="text-sm font-medium text-slate-500 mt-1">Percentage: 65.67%</p>
                                </div>
                                <div className="border-l-2 border-blue-200 pl-4 relative">
                                    <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[7px] top-2"></div>
                                    <h4 className="font-bold text-lg">SSC (10th) - 2020</h4>
                                    <p className="text-slate-600">Shri Mallikarjun Vidhyalaya Kegaon</p>
                                    <p className="text-sm font-medium text-slate-500 mt-1">Percentage: 88.20%</p>
                                </div>
                            </div>
                        </div>

                        {/* Experience */}
                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm">
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                <span className="w-8 h-8 rounded bg-emerald-100 flex items-center justify-center text-emerald-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                                        <path d="M2 13.692V16a2 2 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                                    </svg>
                                </span>
                                Career Trajectory
                            </h3>
                            <div className="space-y-6">
                                <div className="border-l-2 border-emerald-200 pl-4 relative">
                                    <div className="absolute w-3 h-3 bg-emerald-500 rounded-full -left-[7px] top-2"></div>
                                    <h4 className="font-bold text-lg flex justify-between items-center">
                                        <span>Web Developer & Tech Intern</span>
                                        <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-1 rounded">May '24 - July '25</span>
                                    </h4>
                                    <p className="text-slate-600 mt-1">Sarv Enterprises (Remote)</p>
                                </div>
                                <div className="border-l-2 border-emerald-200 pl-4 relative">
                                    <div className="absolute w-3 h-3 bg-emerald-500 rounded-full -left-[7px] top-2"></div>
                                    <h4 className="font-bold text-lg flex justify-between items-center">
                                        <span>Research Assistant - QML</span>
                                        <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-1 rounded">May '25 - Aug '25</span>
                                    </h4>
                                    <p className="text-slate-600 mt-1">University of Lucknow</p>
                                </div>
                                <div className="border-l-2 border-emerald-200 pl-4 relative">
                                    <div className="absolute w-3 h-3 bg-emerald-500 rounded-full -left-[7px] top-2"></div>
                                    <h4 className="font-bold text-lg flex justify-between items-center">
                                        <span>Web Developer Intern</span>
                                        <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-1 rounded">Jun '24 - Sep '24</span>
                                    </h4>
                                    <p className="text-slate-600 mt-1">Agarwal Creation Fashions</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects (Placeholder) */}
            <section id="projects" className="py-20 bg-white border-t border-slate-100">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Projects</h2>
                    <p className="text-slate-500">Detailed project showcases coming soon.</p>
                </div>
            </section>

            {/* Tech Stack */}
            <section id="tech-stack" className="py-20 bg-slate-50">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Technical Arsenal</h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                            <h3 className="font-bold text-xl mb-4 text-slate-800 border-b pb-2">Languages</h3>
                            <div className="flex flex-wrap gap-2">
                                {["Python", "Java", "C", "Embedded C"].map(tech => (
                                    <span key={tech} className="bg-blue-50 text-blue-700 text-sm px-3 py-1 rounded-full">{tech}</span>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                            <h3 className="font-bold text-xl mb-4 text-slate-800 border-b pb-2">Web Dev</h3>
                            <div className="flex flex-wrap gap-2">
                                {["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB", "Express"].map(tech => (
                                    <span key={tech} className="bg-indigo-50 text-indigo-700 text-sm px-3 py-1 rounded-full">{tech}</span>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                            <h3 className="font-bold text-xl mb-4 text-slate-800 border-b pb-2">Machine Learning</h3>
                            <div className="flex flex-wrap gap-2">
                                {["QML", "Qiskit", "PennyLane"].map(tech => (
                                    <span key={tech} className="bg-purple-50 text-purple-700 text-sm px-3 py-1 rounded-full">{tech}</span>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                            <h3 className="font-bold text-xl mb-4 text-slate-800 border-b pb-2">Databases & Tools</h3>
                            <div className="flex flex-wrap gap-2">
                                {["MySQL", "Git", "GitHub", "Arduino", "ESP32", "Fusion 360"].map(tech => (
                                    <span key={tech} className="bg-orange-50 text-orange-700 text-sm px-3 py-1 rounded-full">{tech}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Fast Footer / Contact */}
            <footer id="contact" className="bg-slate-900 text-slate-300 py-16">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Let's Connect</h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">Open to new opportunities, interesting projects, and networking.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        {/* Contact Details */}
                        <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                            <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                </svg>
                                Contact Info
                            </h3>
                            <ul className="space-y-3 text-sm">
                                <li>
                                    <span className="text-slate-500 block">Phone</span>
                                    <a href="tel:+918263852712" className="hover:text-white transition-colors">+91 8263852712</a>
                                </li>
                                <li>
                                    <span className="text-slate-500 block">Email</span>
                                    <a href="mailto:basavraj.charate130904@gmail.com" className="hover:text-blue-400 transition-colors break-all">basavraj.charate130904@gmail.com</a>
                                </li>
                            </ul>
                        </div>

                        {/* Addresses */}
                        <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                            <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                                Addresses
                            </h3>
                            <ul className="space-y-4 text-sm">
                                <li>
                                    <span className="text-slate-500 block mb-1">Current Base</span>
                                    <span>Pune, Maharashtra, India</span>
                                </li>
                                <li>
                                    <span className="text-slate-500 block mb-1">Permanent Address</span>
                                    <span>Charate Wasti-2, Kallakarjal, Akkalkot,<br />Solapur - 413219</span>
                                </li>
                            </ul>
                        </div>

                        {/* Social Links */}
                        <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 md:col-span-2 lg:col-span-1">
                            <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                                </svg>
                                Digital Presence
                            </h3>
                            <div className="flex gap-4">
                                <a href="https://github.com/basavraj03" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-700 rounded-lg hover:bg-slate-600 hover:text-white transition-all w-fit">
                                    <span className="sr-only">GitHub</span>
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                    </svg>
                                </a>
                                <a href="https://linkedin.com/in/basavraj-charate-060411252" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-700 rounded-lg hover:bg-blue-600 hover:text-white transition-all w-fit">
                                    <span className="sr-only">LinkedIn</span>
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                                    </svg>
                                </a>
                                <a href="https://www.instagram.com/basavraj12c/" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-700 rounded-lg hover:bg-pink-600 hover:text-white transition-all w-fit">
                                    <span className="sr-only">Instagram</span>
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" clipRule="evenodd" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="text-center pt-8 border-t border-slate-800">
                        <p className="text-sm text-slate-500">© 2026 Basavraj Charate. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
