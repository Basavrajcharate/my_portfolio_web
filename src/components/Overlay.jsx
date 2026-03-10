import { motion } from 'framer-motion';

export default function Overlay() {
    return (
        <div className="absolute top-0 left-0 w-full pointer-events-none z-10">

            {/* Hero Section Overlay */}
            <section className="h-screen w-full flex flex-col justify-center items-center relative px-4 -mt-20 pointer-events-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, ease: 'easeOut', delay: 0.2 }}
                    className="relative flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 max-w-7xl mx-auto w-full mt-4 md:mt-0"
                >
                        {/* Subtle glowing halo behind everything */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-blue-500/10 blur-[120px] rounded-full -z-10 pointer-events-none"></div>

                        {/* Profile Card */}
                        <div className="flex flex-col items-center justify-center p-6 md:p-8 bg-gradient-to-br from-[#0f172a]/95 to-[#020617]/95 backdrop-blur-2xl border-2 border-blue-500/40 rounded-3xl shadow-[0_0_40px_rgba(59,130,246,0.25)] hover:border-blue-400/80 transition-all duration-500 max-w-[90vw] md:min-w-[30vw]">
                            <div className="relative w-36 h-36 md:w-48 md:h-48 mb-4 md:mb-6 rounded-full overflow-hidden border-4 border-blue-500/50 shadow-[0_0_20px_rgba(59,130,246,0.4)]">
                                <img
                                    src="/images/profile.jpg"
                                    alt="Basavraj Charate"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay pointer-events-none"></div>
                            </div>

                            <div className="flex items-center gap-2 md:gap-3 bg-blue-950/60 px-4 py-2 md:px-5 md:py-2.5 rounded-full border border-blue-800/60 shadow-inner">
                                <span className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                                </span>
                                <p className="text-blue-100 font-mono text-xs md:text-sm tracking-wide">Web & AIML Developer</p>
                            </div>
                        </div>

                    {/* Primary Cinematic Text */}
                    <div className="text-center md:text-left flex flex-col justify-center">
                        <motion.h1
                            className="text-5xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-4 text-center md:text-left mt-2 md:mt-0"
                        >
                            <span className="block text-transparent bg-clip-text bg-gradient-to-br from-white via-blue-200 to-blue-600 drop-shadow-[0_0_25px_rgba(59,130,246,0.4)] leading-[1.1]">
                                BASAVRAJ
                            </span>
                            <span className="block text-transparent bg-clip-text bg-gradient-to-br from-white via-blue-200 to-blue-600 drop-shadow-[0_0_25px_rgba(59,130,246,0.4)] leading-[1.1]">
                                CHARATE
                            </span>
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.6 }}
                            className="flex flex-row flex-wrap justify-center md:justify-start gap-2 md:gap-4 mt-2 md:mt-4"
                        >
                            <div className="px-4 md:px-6 py-2 md:py-2.5 rounded-full border-2 border-blue-500/40 bg-blue-950/40 backdrop-blur-md text-xs md:text-base text-blue-100 tracking-widest uppercase font-bold shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                                Web Developer
                            </div>
                            <div className="px-4 md:px-6 py-2 md:py-2.5 rounded-full border-2 border-purple-500/40 bg-purple-950/40 backdrop-blur-md text-xs md:text-base text-purple-100 tracking-widest uppercase font-bold shadow-[0_0_15px_rgba(168,85,247,0.2)]">
                                AIML Specialist
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.8 }}
                            className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mt-6 md:mt-8 pointer-events-auto"
                        >
                            <a
                                href="/resume.pdf"
                                download="Basavraj_Charate_Resume.pdf"
                                className="inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3 rounded-full border-2 border-emerald-500/50 bg-emerald-900/30 hover:bg-emerald-800/50 backdrop-blur-md text-emerald-100 tracking-widest uppercase font-bold transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.6)] cursor-pointer"
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
                                className="inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3 rounded-full border-2 border-blue-500/50 bg-blue-900/30 hover:bg-blue-800/50 backdrop-blur-md text-blue-100 tracking-widest uppercase font-bold transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] cursor-pointer"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                                View Resume
                            </a>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Scroll indicator (Moved inside the Hero Section) */}
                <motion.div
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5, duration: 1 }}
                >
                    <span className="text-sm text-gray-400 mb-2 uppercase tracking-widest">Explore Universe</span>
                    <motion.div
                        className="w-[1px] h-16 bg-gradient-to-b from-blue-500 to-transparent"
                        animate={{ height: ['0px', '64px', '0px'], y: [0, 32, 64] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                    />
                </motion.div>
            </section>

            {/* About Section - Page 2 */}
            <section className="h-screen w-full flex items-center justify-center px-10 md:px-20 relative pointer-events-auto">
                {/* Changed layout back to justify-center and switched flex-col to flex-col md:flex-row to make them side by side */}
                <div className="flex flex-col md:flex-row gap-8 w-full max-w-7xl items-stretch justify-center pt-32 pb-20 h-full overflow-y-auto pr-4 custom-scrollbar pointer-events-auto mx-auto">

                    {/* Education Data */}
                    <div className="w-full md:w-1/2 flex flex-col bg-gradient-to-br from-[#0f172a]/95 to-[#020617]/95 border-2 border-green-500/40 p-10 rounded-2xl backdrop-blur-2xl shadow-[0_0_30px_rgba(16,185,129,0.2)] hover:border-green-400/80 transition-all duration-300">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-4 h-4 rounded-full bg-green-400 animate-pulse shadow-[0_0_10px_rgba(74,222,128,0.8)]"></div>
                            <h3 className="text-3xl font-black text-green-400 tracking-wider">Education Data</h3>
                        </div>
                        <div className="space-y-6 flex-1">
                            <div className="border-l-4 border-green-500/50 pl-6">
                                <h4 className="font-bold text-green-50 text-xl">B-Tech CSE in AIML (2022 - 2026)</h4>
                                <p className="text-lg text-green-200/80 mt-1">D. Y. Patil International University, Akurdi</p>
                                <p className="text-base text-green-400 font-mono mt-2 font-bold bg-green-950/30 inline-block px-3 py-1 rounded">CGPA: 7.46/10</p>
                            </div>
                            <div className="border-l-4 border-green-500/50 pl-6">
                                <h4 className="font-bold text-green-50 text-xl">HSC (12th) - 2022</h4>
                                <p className="text-lg text-green-200/80 mt-1">DR D Y Patil, Pune</p>
                                <p className="text-base text-green-400 font-mono mt-2 font-bold bg-green-950/30 inline-block px-3 py-1 rounded">Percentage: 65.67%</p>
                            </div>
                            <div className="border-l-4 border-green-500/50 pl-6">
                                <h4 className="font-bold text-green-50 text-xl">SSC (10th) - 2020</h4>
                                <p className="text-lg text-green-200/80 mt-1">Shri Mallikarjun Vidhyalaya Kegaon</p>
                                <p className="text-base text-green-400 font-mono mt-2 font-bold bg-green-950/30 inline-block px-3 py-1 rounded">Percentage: 88.20%</p>
                            </div>
                        </div>
                    </div>

                    {/* Career Trajectory */}
                    <div className="w-full md:w-1/2 flex flex-col bg-gradient-to-br from-[#0f172a]/95 to-[#020617]/95 border-2 border-emerald-500/40 p-10 rounded-2xl backdrop-blur-2xl shadow-[0_0_30px_rgba(16,185,129,0.2)] hover:border-emerald-400/80 transition-all duration-300">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-4 h-4 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.8)]"></div>
                            <h3 className="text-3xl font-black text-emerald-400 tracking-wider">Career Trajectory</h3>
                        </div>

                        <div className="space-y-8 flex-1 pb-4">
                            <div className="border-l-4 border-emerald-500/50 pl-6">
                                <h4 className="font-bold text-emerald-50 text-xl flex flex-col md:flex-row md:justify-between items-start md:items-center">
                                    <span>Research Assistant - QML</span>
                                    <span className="text-base font-mono text-emerald-400 mt-2 md:mt-0 bg-emerald-950/50 px-3 py-1 rounded border border-emerald-700/50">May '25 - Aug '25</span>
                                </h4>
                                <p className="text-lg text-emerald-200/80 mt-2 mb-3 font-medium">University of Lucknow, India</p>
                                <ul className="text-base text-gray-300 list-disc list-inside space-y-2">
                                    <li>Developed AQI prediction model using Quantum ML.</li>
                                    <li>Designed hybrid quantum-classical models (Qiskit).</li>
                                </ul>
                            </div>

                            <div className="border-l-4 border-emerald-500/50 pl-6">
                                <h4 className="font-bold text-emerald-50 text-xl flex flex-col md:flex-row md:justify-between items-start md:items-center">
                                    <span>Web Developer & Tech Intern</span>
                                    <span className="text-base font-mono text-emerald-400 mt-2 md:mt-0 bg-emerald-950/50 px-3 py-1 rounded border border-emerald-700/50">May '24 - July '24</span>
                                </h4>
                                <p className="text-lg text-emerald-200/80 mt-2 mb-3 font-medium">Sarv Enterprises (Remote)</p>
                                <ul className="text-base text-gray-300 list-disc list-inside space-y-2">
                                    <li>Developed web using HTML, CSS, SQL, JS.</li>
                                </ul>
                            </div>

                            <div className="border-l-4 border-emerald-500/50 pl-6">
                                <h4 className="font-bold text-emerald-50 text-xl flex flex-col md:flex-row md:justify-between items-start md:items-center">
                                    <span>Web Developer Intern</span>
                                    <span className="text-base font-mono text-emerald-400 mt-2 md:mt-0 bg-emerald-950/50 px-3 py-1 rounded border border-emerald-700/50">June '24 - Sept '24</span>
                                </h4>
                                <p className="text-lg text-emerald-200/80 mt-2 mb-3 font-medium">Agarwal Creation Fashions Pvt. Ltd</p>
                                <ul className="text-base text-gray-300 list-disc list-inside space-y-2">
                                    <li>Designed UI/UX and managed DB operations.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div >
            </section >

            {/* Projects Section - Page 3 */}
            < section className="h-screen w-full flex items-center justify-start px-10 md:px-20 relative pointer-events-auto" >
                <div className="w-full md:min-w-[50vw] bg-gradient-to-br from-[#0f172a]/95 to-[#020617]/95 border-2 border-pink-500/50 p-10 rounded-2xl backdrop-blur-2xl shadow-[0_0_30px_rgba(236,72,153,0.25)] hover:border-pink-400/80 transition-all duration-300">
                    <div className="flex flex-col md:flex-row justify-between items-start mb-6 gap-4">
                        <div className="flex items-center gap-3">
                            <div className="w-4 h-4 rounded-full bg-pink-400 animate-pulse shadow-[0_0_10px_rgba(244,114,182,0.8)]"></div>
                            <h4 className="text-pink-400 font-black text-3xl leading-tight">Quadruped Surveillance Bot</h4>
                        </div>
                        <span className="text-sm text-pink-300 font-mono bg-pink-900/60 px-4 py-1.5 rounded-full whitespace-nowrap border border-pink-700/50">June '24 - July '24</span>
                    </div>
                    <p className="text-lg text-pink-200/90 mb-6 font-mono border-b border-pink-500/30 pb-4 font-semibold inline-block">Embedded C, Arduino UNO, Fusion 360, Python</p>
                    <ul className="text-lg text-gray-300 list-disc list-inside space-y-3">
                        <li>Four-legged robot for autonomous movement & stability.</li>
                        <li>Programmed Arduino UNO microcontrollers using Embedded C.</li>
                        <li>Implemented movement control algorithms in Python.</li>
                        <li>Designed 3D mechanical components via Fusion 360.</li>
                    </ul>
                </div>
            </section >

            {/* Tech Stack Section - Page 4 */}
            < section className="h-screen w-full flex flex-col items-center justify-center px-10 md:px-20 relative pointer-events-auto" >
                <div className="w-full md:min-w-[60vw] max-h-[85vh] overflow-y-auto custom-scrollbar bg-gradient-to-br from-[#0f172a]/95 to-[#020617]/95 border-2 border-purple-500/50 p-10 rounded-2xl backdrop-blur-2xl shadow-[0_0_30px_rgba(168,85,247,0.25)] hover:border-purple-400/80 transition-all duration-300 mt-20 md:mt-0">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-4 h-4 rounded-full bg-purple-400 animate-pulse shadow-[0_0_10px_rgba(192,132,252,0.8)]"></div>
                        <h3 className="text-3xl font-black text-purple-400 tracking-wider">Tech Stack</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Programming Languages */}
                        <div className="border-l-4 border-purple-500/50 pl-5">
                            <h4 className="font-bold text-purple-50 text-xl mb-3">1. Programming Languages</h4>
                            <div className="flex flex-wrap gap-2.5">
                                {['Python', 'Java', 'C', 'Embedded C'].map(tech => (
                                    <span key={tech} className="bg-purple-900/50 border border-purple-500/30 text-purple-200 px-3 py-1.5 rounded-md text-base shadow-sm">{tech}</span>
                                ))}
                            </div>
                        </div>

                        {/* Web Development */}
                        <div className="border-l-4 border-purple-500/50 pl-5">
                            <h4 className="font-bold text-purple-50 text-xl mb-3">2. Web Development</h4>
                            <div className="flex flex-wrap gap-2.5">
                                {['HTML', 'CSS', 'JavaScript', 'MERN Stack (MongoDB, Express.js, React.js, Node.js)', 'XAMPP'].map(tech => (
                                    <span key={tech} className="bg-purple-900/50 border border-purple-500/30 text-purple-200 px-3 py-1.5 rounded-md text-base shadow-sm">{tech}</span>
                                ))}
                            </div>
                        </div>

                        {/* Databases */}
                        <div className="border-l-4 border-purple-500/50 pl-5">
                            <h4 className="font-bold text-purple-50 text-xl mb-3">3. Databases</h4>
                            <div className="flex flex-wrap gap-2.5">
                                {['MySQL', 'MongoDB', 'PhpMyAdmin'].map(tech => (
                                    <span key={tech} className="bg-purple-900/50 border border-purple-500/30 text-purple-200 px-3 py-1.5 rounded-md text-base shadow-sm">{tech}</span>
                                ))}
                            </div>
                        </div>

                        {/* Machine Learning / Quantum Computing */}
                        <div className="border-l-4 border-purple-500/50 pl-5">
                            <h4 className="font-bold text-purple-50 text-xl mb-3">4. ML / Quantum Computing</h4>
                            <div className="flex flex-wrap gap-2.5">
                                {['Quantum Machine Learning (QML)', 'Qiskit', 'PennyLane'].map(tech => (
                                    <span key={tech} className="bg-purple-900/50 border border-purple-500/30 text-purple-200 px-3 py-1.5 rounded-md text-base shadow-sm">{tech}</span>
                                ))}
                            </div>
                        </div>

                        {/* IoT / Robotics */}
                        <div className="border-l-4 border-purple-500/50 pl-5">
                            <h4 className="font-bold text-purple-50 text-xl mb-3">5. IoT / Robotics</h4>
                            <div className="flex flex-wrap gap-2.5">
                                {['Arduino UNO', 'ESP32', 'Embedded Systems'].map(tech => (
                                    <span key={tech} className="bg-purple-900/50 border border-purple-500/30 text-purple-200 px-3 py-1.5 rounded-md text-base shadow-sm">{tech}</span>
                                ))}
                            </div>
                        </div>

                        {/* Tools / Software */}
                        <div className="border-l-4 border-purple-500/50 pl-5">
                            <h4 className="font-bold text-purple-50 text-xl mb-3">6. Tools / Software</h4>
                            <div className="flex flex-wrap gap-2.5">
                                {['Fusion 360', 'Git / GitHub'].map(tech => (
                                    <span key={tech} className="bg-purple-900/50 border border-purple-500/30 text-purple-200 px-3 py-1.5 rounded-md text-base shadow-sm">{tech}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            {/* Contact Section - Page 5 */}
            < section className="h-screen w-full flex flex-col justify-end md:justify-center items-center md:items-end px-10 md:px-20 relative pointer-events-auto pb-20 md:pb-0" >
                <div className="bg-gradient-to-br from-[#0f172a]/95 to-[#020617]/95 border-2 border-cyan-500/40 p-10 md:p-12 rounded-2xl backdrop-blur-2xl w-full md:min-w-[50vw] max-w-4xl shadow-[0_0_40px_rgba(6,182,212,0.25)] relative overflow-hidden mb-10">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50"></div>
                    <div className="flex items-center gap-4 mb-10">
                        <span className="text-4xl md:text-5xl">📡</span>
                        <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                            COMMS HUB
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-cyan-50 relative z-10 w-full mt-8">
                        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 bg-cyan-950/30 p-5 rounded-xl border border-cyan-800/40 hover:bg-cyan-900/40 transition-colors text-center sm:text-left">
                            <span className="text-3xl bg-cyan-900/50 p-3 rounded-xl mt-1">📧</span>
                            <div className="overflow-hidden w-full">
                                <p className="text-xs md:text-sm text-cyan-500 uppercase font-bold tracking-[0.2em] mb-2">Email</p>
                                <p className="font-mono text-sm md:text-base break-words w-full">basavraj.charate130904@gmail.com</p>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 bg-cyan-950/30 p-5 rounded-xl border border-cyan-800/40 hover:bg-cyan-900/40 transition-colors text-center sm:text-left">
                            <span className="text-3xl bg-cyan-900/50 p-3 rounded-xl mt-1">📱</span>
                            <div>
                                <p className="text-xs md:text-sm text-cyan-500 uppercase font-bold tracking-[0.2em] mb-2">Comms Network</p>
                                <p className="font-mono text-base">+91-8263852712</p>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 bg-cyan-950/30 p-5 rounded-xl border border-cyan-800/40 hover:bg-cyan-900/40 transition-colors text-center sm:text-left">
                            <span className="text-3xl bg-cyan-900/50 p-3 rounded-xl mt-1">🌍</span>
                            <div>
                                <p className="text-xs md:text-sm text-cyan-500 uppercase font-bold tracking-[0.2em] mb-2">Location Base</p>
                                <p className="font-mono text-base">Pune, Maharashtra, India</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <a href="https://www.linkedin.com/in/basavraj-charate-a01161297/" target="_blank" rel="noopener noreferrer" className="flex-1 bg-cyan-950/60 hover:bg-cyan-800/60 p-4 rounded-xl border border-cyan-700/50 text-center text-base font-semibold transition-colors flex items-center justify-center gap-3">
                                🔗 LinkedIn
                            </a>
                            <a href="https://github.com/Basavrajcharate" target="_blank" rel="noopener noreferrer" className="flex-1 bg-cyan-950/60 hover:bg-cyan-800/60 p-4 rounded-xl border border-cyan-700/50 text-center text-base font-semibold transition-colors flex items-center justify-center gap-3">
                                💻 GitHub
                            </a>
                        </div>
                    </div>
                </div>

                {/* Footer attached to bottom of final frame */}
                <div className="absolute bottom-0 left-0 w-full p-6 bg-black/50 backdrop-blur-md border-t border-cyan-500/20 text-center pointer-events-none">
                    <p className="text-cyan-200/60 font-mono text-xs md:text-sm tracking-widest">
                        © {new Date().getFullYear()} BASAVRAJ CHARATE. ALL SYSTEMS ONLINE.
                    </p>
                </div>
            </section >

        </div >
    );
}
