"use client";

import Head from "next/head";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import { FaLaptopCode, FaPaintBrush } from "react-icons/fa";
import { CgGym } from "react-icons/cg";
import AboutTimeline from "@/components/timeline";

export default function AboutPage() {

  return (
    <>
      <Head>
        <title>Aastha Sharma | About Me</title>
        <meta name="description" content="Get to know Aastha Sharma" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Navbar />
      <main className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-12 pb-20">

        {/* Profile Section */}
        <div className="flex flex-col md:flex-row items-center gap-10 mb-24 mt-30 mb-16">
            <div className="relative flex items-center justify-center">
            <div className="absolute w-60 h-60 bg-amber-400 rounded-full opacity-30 blur-xl z-0"></div>
            <Image
              src="/images/aastha-image-square.jpg"
              alt="Aastha Sharma"
              width={220}
              height={220}
              className="rounded-full object-cover border shadow-md relative z-10"
            />
            </div>

          <div className="text-center md:text-left">
            <h2 className="text-4xl font-semibold text-indigo-500 mb-3">
              Hello! I'm Aastha Sharma 👋
            </h2>
            <p className="text-gray-700 text-md leading-relaxed max-w-xl">
              I'm a fourth-year Computer Science student at the University of Toronto, graduating in 2026. I’m passionate about full-stack app development and machine learning, with a strong
              interest in building scalable, user-centered software. I’ve worked on research-driven and real-world projects that reflect my curiosity for applying technology in impactful ways.
              I’m always learning, exploring, and creating—join me on the journey!
            </p>
          </div>
        </div>

        {/* Timeline Section */}
        <AboutTimeline />

        {/* Fun Element */}
        <section className="text-center mb-24">
          <h3 className="text-3xl font-semibold mb-4">Fun Facts 🎉</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div whileHover={{ scale: 1.05 }} className="bg-white p-6 rounded-lg shadow hover:shadow-md relative group border-l-4 border-transparent hover:border-amber-400 transition-all duration-300">
              <FaLaptopCode className="text-3xl text-indigo-400 mb-3 mx-auto" />
              <p className="text-sm text-gray-700">Wrote my first line of code at 15 — it was a Tic Tac Toe game in Python!</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="bg-white p-6 rounded-lg shadow hover:shadow-md relative group border-l-4 border-transparent hover:border-amber-400 transition-all duration-300">
              <CgGym className="text-4xl text-indigo-400 mb-3 mx-auto" />
              <p className="text-sm text-gray-700">If I’m not coding, you’ll probably find me in the gym lifting weights.</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="bg-white p-6 rounded-lg shadow hover:shadow-md relative group border-l-4 border-transparent hover:border-amber-400 transition-all duration-300">
              <FaPaintBrush className="text-3xl text-indigo-400 mb-3 mx-auto" />
              <p className="text-sm text-gray-700">If I weren’t a dev, I’d be a artist and a designer.</p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
