import React from 'react';
import Link from 'next/link';
import Image from "next/legacy/image";
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: "Satellite Insights",
    description:
      "Satellite Insights is an interactive dashboard that visualizes global satellite data using cleaned UCS satellite datasets and explorable data stories.",
    image: "/images/satellite2.png",
    tech: ["D3.js", "Three.js", "Pandas", "Jupyter Notebook", "Python"],
    github: "https://github.com/SidharthSawhney/Satellite-Insights"
  },
  {
    title: 'Dish Detect',
    description:
      'A machine learning model that predicts food items based on user responses using NLP techniques like TF-IDF vectorization alongside Logistic Regression and Naive Bayes classifiers.',
    tech: ['Python', 'scikit-learn', 'pandas', 'NumPy'],
    image: '/images/dishdetect.png',
    github: 'https://github.com/AasthaSharma272/dishdetect',
  },
  {
    title: 'Scriptorium',
    description:
      'An online code editor offering real-time output and multi-language support, complemented by a community platform for technical blogs and templates.',
    tech: ['Next.js', 'React', 'Docker', 'Prisma'],
    image: '/images/scriptorium.png',
    github: 'https://github.com/AasthaSharma272/scriptorium',
  },
];

export default function HomeProjects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-20 bg-white">
      <h2 className="text-4xl font-bold text-center text-black mb-16">
        Projects 👩🏻‍💻
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <a href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black-500 hover:text-indigo-700"
                  title="GitHub Repo">
          <div
            key={index}
            className="border border-gray-200 border-b-4 hover:border-b-amber-400 rounded-2xl p-6 bg-white transform transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
          >
            {/* Image */}
            {project.image && (
              <div className="mb-4 rounded-xl overflow-hidden h-60 relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl"
                />
              </div>
            )}

            {/* Title + GitHub Icon */}
            <div className="flex items-center justify-center gap-2 mb-2">
              <h3 className="text-lg font-semibold text-indigo-500 text-center">
                {project.title}
              </h3>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black-500 hover:text-indigo-700"
                  title="GitHub Repo"
                >
                  <FaGithub className="text-base" />
                </a>
              )}
            </div>

            {/* Technologies */}
            <div className="flex justify-center flex-wrap gap-x-2 gap-y-1 mb-4 text-sm text-amber-500 font-medium">
              {project.tech.map((t, i) => (
                <React.Fragment key={i}>
                  <span>{t}</span>
                  {i < project.tech.length - 1 && (
                    <span className="text-amber-400 mx-1">•</span>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Description */}
            <p className="text-sm text-gray-700 mb-4 text-center">{project.description}</p>
          </div>
          </a>
        ))}
      </div>

      <div className="mt-16 text-center">
        <Link
          href="/projects"
          className="inline-block border border-transparent text-indigo-500 bg-indigo-100 px-6 py-2 hover:border-indigo-500 hover:border rounded-full transition-all text-sm font-medium"
        >
          View All Projects →
        </Link>
      </div>
    </section>
  );
}
