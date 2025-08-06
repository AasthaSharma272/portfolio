import {
  FaReact, FaNodeJs, FaPython, FaGitAlt, FaGithub,
  FaJava,
  FaDocker,
  FaAws,
  FaLinux
} from 'react-icons/fa';
import {
  SiTailwindcss, SiNextdotjs, SiTypescript, SiJavascript,
  SiMongodb, SiVercel, SiArcgis,
  SiExpress,
  SiPrisma,
  SiPostgresql,
  SiFigma
} from 'react-icons/si';

export default function Technologies() {
 const tech = [
  // Languages
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
  { name: "Python", icon: <FaPython className="text-blue-400" /> },
  { name: "Java", icon: <FaJava className="text-blue-500" /> },

  // Frontend
  { name: "React", icon: <FaReact className="text-sky-400" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-gray-900" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" /> },

  // Backend
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-800" /> },

  // Database/ORM
  { name: "SQL", icon: <SiPostgresql className="text-blue-700" /> },
  { name: "Prisma", icon: <SiPrisma className="text-purple-600" /> },

  // DevOps / Tools
  { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
  { name: "GitHub", icon: <FaGithub className="text-black" /> },
  { name: "Docker", icon: <FaDocker className="text-blue-400" /> },
  { name: "Linux", icon: <FaLinux className="text-black" /> },
  { name: "AWS", icon: <FaAws className="text-orange-400" /> },

  // Design & Visualization
  { name: "Figma", icon: <SiFigma className="text-pink-500" /> },
  { name: "ArcGIS", icon: <SiArcgis className="text-green-800" /> },
];


  return (
    <section id="technologies" className="py-24 px-6 md:px-20">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
      Tech Stack 🛠️
    </h2>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-10 place-items-center">
        {tech.map((t, index) => (
          <div
            key={index}
            className="group flex flex-col items-center justify-center w-24 h-24 md:w-28 md:h-28 rounded-xl bg-white shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 border-b-3 border-gray-200 hover:border-amber-400"
          >
            <div className="text-3xl md:text-4xl mb-2 group-hover:animate-pulse">
              {t.icon}
            </div>
            <p className="text-xs md:text-sm text-indigo-700">{t.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
