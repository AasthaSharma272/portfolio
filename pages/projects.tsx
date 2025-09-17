"use client";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Head from "next/head";
import Image from "next/legacy/image";
import Link from "next/link";
import { FaGithub, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState } from "react";
import { motion } from "framer-motion";
import React from "react";

const projects = [
  {
    title: "Scriptorium",
    description:
      "Scriptorium is a full-stack web platform that lets users write, execute, and share code in real time across multiple programming languages. It features a custom code editor with syntax highlighting, stdin input, and isolated Docker-based execution for security. Users can create and fork code templates, write blog posts linked to code, and interact through comments and reports. The platform includes JWT-based authentication, RESTful APIs, and admin moderation tools; all built with a modern, responsive design.",
    images: ["/images/scriptorium.png", "/images/scriptonium_2.png"],
    tech: ["Next.js", "React", "Tailwind CSS", "Prisma", "SQL", "Docker"],
    github: "https://github.com/AasthaSharma272/scriptorium"
  },
  {
    title: "Dish Detect",
    description:
      "DishDetect is a lightweight machine learning tool that classifies food as Pizza, Sushi, or Shawarma based on a user’s answers to descriptive questions. It leverages classical NLP techniques like TF-IDF vectorization alongside Logistic Regression and Naive Bayes classifiers. Designed for fast inference and easy prototyping, it includes pre-trained models and supports K-Fold Cross-Validation for evaluation.",
    images: ["/images/dishdetect.png", "/images/dishdetect2.png"],
    tech: ["Python", "scikit-learn", "pandas", "NumPy", "TF-IDF", "Logistic Regression"],
    github: "https://github.com/AasthaSharma272/dishdetect"
  },
  {
    title: "E-commerce Store",
    description:
      "E-commerce Store is a modern, full-stack shopping platform built to deliver a seamless and responsive user experience across all devices. Customers can browse a wide variety of products, apply advanced filters based on categories, price, and availability, and securely check out using Stripe integration. The platform pairs with a fully functional admin dashboard where store managers can add, edit, or delete products, track orders, and manage inventory in real time.",
    images: ["/images/ecommerceStore.png"],
    tech: ["Next.js", "React", "Tailwind CSS", "Vercel", "Stripe", "PostgreSQL"],
    github: "https://github.com/AasthaSharma272/ecommerce-store"
  },
  {
    title: "StoreMaster",
    description:
      "StoreMaster is a powerful and flexible full-stack platform that empowers users to create, customize, and manage online stores with ease. It features a comprehensive admin dashboard for inventory management, product categorization, store personalization, and real-time order tracking. Users can create multiple stores with unique configurations, dynamically manage inventory based on size and category, and organize products for better browsing. The platform supports robust APIs that allow seamless hosting and integration, ensuring scalability for future growth. Designed with a developer-friendly setup, StoreMaster is built to deliver a smooth store management experience from development to deployment.",
    images: ["/images/storeMaster1.png"],
    tech: ["Next.js", "TypeScript", "REST API", "Prisma", "PostgreSQL"],
    github: "https://github.com/AasthaSharma272/StoreMaster"
  },
  {
    title: "Recipe Flow",
    description:
      "Recipe Flow is a Java-based recipe management application that enables users to discover, upload, and save recipes with ease. Powered by the Edamam Recipe Search API, it supports rich filtering options such as dietary restrictions and provides intuitive search functionality. Users can also contribute their own recipes, complete with ingredients, steps, and optional images, and save favorites to their profile. The application was architected using key design patterns and the codebase follows SOLID principles. Recipe Flow demonstrates strong backend architecture and thoughtful user experience design.",
    images: ["/images/recipeflow.png"],
    tech: ["Java", "Junit", "Java Swing GUI", "REST API", "Clean Architecture"],
    github: "https://github.com/AasthaSharma272/Recipe_Flow"
  },
  {
    github: "https://github.com/SidharthSawhney/ScreenSelect",
    title: "Screen Select",
    images: ["/images/screenselect1.png", "/images/screenselect2.png"],
    description: "Screen Select is a movie recommendation system designed to help users discover new films based on their past viewing history and personalized search criteria. Developed as a collaborative effort, the app offers an intuitive interface that allows users to search by genre, director, or year while continuously learning from their preferences. It combines customized filtering with a recommendation engine that adapts to user behavior, offering tailored suggestions over time. The project emphasizes thoughtful design, user-centric functionality, and logic-driven personalization to enhance the movie discovery experience.",
    tech: ["Python", "Tkinter", "Pandas", "Object-Oriented Programming", "Git"]
}

];

export default function ProjectsPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(
    Array(projects.length).fill(0)
  );

  const handleNext = (i: number) => {
    setCurrentImageIndex((prev) => {
      const updated = [...prev];
      updated[i] = (updated[i] + 1) % projects[i].images.length;
      return updated;
    });
  };

  const handlePrev = (i: number) => {
    setCurrentImageIndex((prev) => {
      const updated = [...prev];
      updated[i] =
        (updated[i] - 1 + projects[i].images.length) %
        projects[i].images.length;
      return updated;
    });
  };

  return (
    <>
      <Head>
        <title>Aastha Sharma | Portfolio</title>
        <meta name="description" content="Aastha's personal portfolio site" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="bg-white">
        <Navbar />
        <main className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 pb-20">
          <h1 className="text-4xl md:text-5xl font-bold font-sans text-center text-gray-900 mb-20 mt-22">
            Projects 👩🏻‍💻
          </h1>

          <div className="space-y-24">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="relative group border-l-4 border-transparent hover:border-amber-400 transition-all duration-300 pl-6 pt-12 pb-10 bg-white rounded-xl shadow-sm hover:shadow-md"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {/* IMAGE SLIDER */}
                  <div className="md:w-1/2 relative">
                    <Image
                      src={project.images[currentImageIndex[i]]}
                      alt={project.title}
                      width={800}
                      height={500}
                      className="rounded-lg object-cover w-full h-auto border"
                    />
                    {project.images.length > 1 && (
                      <>
                        <button
                          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-1 shadow hover:bg-opacity-100"
                          onClick={() => handlePrev(i)}
                        >
                          <FaChevronLeft />
                        </button>
                        <button
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-1 shadow hover:bg-opacity-100"
                          onClick={() => handleNext(i)}
                        >
                          <FaChevronRight />
                        </button>
                      </>
                    )}
                  </div>

                  <div className="md:w-1/2 flex flex-col justify-between">
                      <div>
                          {/* ANIMATED CIRCLES ABOVE TITLE */}
                          <div className="flex items-center space-x-2 mb-2">
                          <span className="w-3 h-3 rounded-full bg-amber-500 animate-bounce" />
                          <span
                              className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-bounce"
                              style={{ animationDelay: "0.15s" }}
                          />
                          <span
                              className="w-2 h-2 rounded-full bg-amber-300 animate-bounce"
                              style={{ animationDelay: "0.3s" }}
                          />
                          </div>

                          <h2 className="text-2xl font-semibold text-indigo-500 mb-3">
                          {project.title}
                          </h2>
                      <p className="text-gray-600 text-sm mb-6 leading-relaxed mr-6">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-x-2 gap-y-1 mb-4 text-sm text-amber-500 font-medium">
                          {project.tech.map((t, i) => (
                          <React.Fragment key={i}>
                              <span>{t}</span>
                              {i < project.tech.length - 1 && (
                              <span className="text-amber-400 mx-1">•</span>
                              )}
                          </React.Fragment>
                          ))}
                      </div>
                    </div>

                    {project.github && (
                      <div>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-indigo-700"
                        >
                          <FaGithub className="text-lg" /> View on GitHub
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
