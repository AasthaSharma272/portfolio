'use client';

import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../public/animations/dev.json';
import { Typewriter } from 'react-simple-typewriter';
import { FaGithub, FaLinkedin, FaEnvelope, FaYoutube } from 'react-icons/fa';

export default function Hero() {
  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

   return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 md:px-16 bg-white relative">
      {/* Main Row: Text + Lottie */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full">
        {/* Left Side */}
        <div className="flex flex-col md:w-1/2 items-start space-y-6 relative">
          {/* Colored Circles */}
          <div className="flex items-center space-x-2" style={{ transform: 'translate(60px, -55px)' }}>
            <span className="w-5 h-5 rounded-full bg-amber-500 animate-bounce" />
            <span className="w-4 h-4 rounded-full bg-amber-400 animate-bounce" style={{ animationDelay: '0.15s' }} />
            <span className="w-3 h-3 rounded-full bg-amber-300 animate-bounce" style={{ animationDelay: '0.3s' }} />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900" style={{ transform: 'translate(60px, -55px)' }}>
            Hi, I’m Aastha Sharma
          </h1>

          <h2 className="text-2xl text-indigo-500 font-semibold" style={{ transform: 'translate(60px, -55px)' }}>
            <Typewriter
              words={[
                'Full Stack Developer.',
                'Designer.',
                'Machine Learning & AI Enthusiast.',
                'Problem Solver.',
                'Tech Explorer.',
                'Continuous Learner.'
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={90}
              deleteSpeed={70}
              delaySpeed={1000}
            />
          </h2>

          <p className="text-gray-600 max-w-xs text-sm" style={{ transform: 'translate(60px, -55px)' }}>
            Passionate about building user-centric solutions with technology.
          </p>
        </div>

      {/* Right Side - Lottie */}
      <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center items-start"
             style={{ transform: 'translate(-40px, -70px)' }}>
        <Lottie options={lottieOptions} height={700} width={700} />
      </div>
      {/* Close main flex row div */}
      </div>
      {/* Horizontal Social Links */}
      <div className="flex space-x-8 mt-2 text-2xl text-gray-700">
        <a href="https://github.com/AasthaSharma272" target="_blank" rel="noopener noreferrer" className="hover:text-amber-500">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/aasthasharma272/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-500">
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
          style={{ fontSize: '1.6rem' }}
        >
          <FaYoutube />
        </a>
      </div>

      {/* Scroll Wheel Animation */}
      <div className="mt-14 flex flex-col items-center">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center items-start">
          <div className="w-1 h-2 bg-gray-400 mt-1 rounded-full" />
        </div>
        <p className="text-sm mt-2 text-gray-500">Scroll</p>
      </div>
    </section>
  );
}