import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();

    // Use section IDs for the light theme, use view percentages for the 3D canvas
    const scrollTo = (percentage, id) => {
        if (theme === 'light') {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
            setIsOpen(false);
            return;
        }

        // React Three Fiber's ScrollControls creates a div with overflow that handles scrolling
        const scrollContainer = Array.from(document.querySelectorAll('div')).find(
            el => el.style.overflow === 'auto' || el.style.overflowY === 'auto'
        );

        if (scrollContainer) {
            scrollContainer.scrollTo({
                top: (scrollContainer.scrollHeight - scrollContainer.clientHeight) * percentage,
                behavior: 'smooth'
            });
        } else {
            window.scrollTo({
                top: document.documentElement.scrollHeight * percentage,
                behavior: 'smooth'
            });
        }
        setIsOpen(false);
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-[#020617]/80 backdrop-blur-md border-b border-blue-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 font-mono tracking-widest cursor-pointer" onClick={() => scrollTo(0, 'hero')}>
                            B
                        </span>
                    </div>

                    <div className="hidden md:flex items-center space-x-6">
                        <div className="flex items-baseline space-x-8">
                            <button onClick={() => scrollTo(0, 'hero')} className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</button>
                            <button onClick={() => scrollTo(0.25, 'about')} className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">About</button>
                            <button onClick={() => scrollTo(0.5, 'projects')} className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Projects</button>
                            <button onClick={() => scrollTo(0.75, 'tech-stack')} className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Tech Stack</button>
                            <button onClick={() => scrollTo(1, 'contact')} className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Contact</button>
                        </div>

                        {/* Desktop Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className="ml-6 flex items-center justify-center p-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 hover:border-purple-400/50 transition-all duration-300 group"
                            title={theme === '3d' ? "Switch to Simple Light Theme" : "Switch to 3D Space Theme"}
                        >
                            {theme === '3d' ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-300 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                                </svg>
                            )}
                        </button>
                    </div>

                    <div className="flex md:hidden items-center">
                        <button
                            onClick={toggleTheme}
                            className="mr-2 flex items-center justify-center p-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 hover:border-purple-400/50 transition-all duration-300 group"
                            title={theme === '3d' ? "Switch to Simple Light Theme" : "Switch to 3D Space Theme"}
                        >
                            {theme === '3d' ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-300 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                                </svg>
                            )}
                        </button>

                        <button onClick={() => setIsOpen(!isOpen)} type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700/50 focus:outline-none">
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden bg-[#0f172a]/95 backdrop-blur-xl border-b border-blue-900/50">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <button onClick={() => scrollTo(0, 'hero')} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left">Home</button>
                        <button onClick={() => scrollTo(0.25, 'about')} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left">About</button>
                        <button onClick={() => scrollTo(0.5, 'projects')} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left">Projects</button>
                        <button onClick={() => scrollTo(0.75, 'tech-stack')} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left">Tech Stack</button>
                        <button onClick={() => scrollTo(1, 'contact')} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left">Contact</button>
                    </div>
                </div>
            )}
        </nav>
    );
}
