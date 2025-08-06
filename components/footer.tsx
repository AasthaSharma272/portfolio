import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaYoutube } from 'react-icons/fa';

export default function Footer() {
return (
    <footer className="bg-gray-100 text-gray-700 py-6 px-6 md:px-20 mt-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Left side: name or logo */}
            <p className="text-sm">&copy; {new Date().getFullYear()} Aastha Sharma. All rights reserved.</p>

            {/* Right side: socials */}
            <div className="flex space-x-4 text-xl">
                <a
                    href="https://github.com/AasthaSharma272"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-amber-500"
                >
                    <FaGithub />
                </a>
                <a
                    href="https://www.linkedin.com/in/aasthasharma272/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-amber-500"
                >
                    <FaLinkedin />
                </a>
                <a href="mailto:aastha.sharma@mail.utoronto.ca" className="hover:text-amber-500">
                    <FaEnvelope />
                </a>
                <a
                    href="https://www.youtube.com/@codewithaastha"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-amber-500"
                >
                    {/* YouTube SVG icon */}
                    <FaYoutube />
                </a>
            </div>
        </div>
    </footer>
  );
}
