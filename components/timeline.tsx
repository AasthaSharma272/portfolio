import { motion } from "framer-motion";
import { Timeline, TimelineItem } from "flowbite-react";
import Image from "next/legacy/image";
import { cn } from "@/lib/utils";

export default function AboutTimeline() {
  const timelineItems = [
    {
      range: "May 2025 → Present",
      title: "Software Developer",
      location: "Toronto, ON",
      company: "Unity Health Toronto",
      points: [
        "Built and deployed a full-stack lab website with a Figma-designed frontend (Next.js, React, Tailwind CSS) and a secure backend (SQL, Prisma, CRUD API, JWT) - boosting data efficiency by 40% and collaboration by 60%."
      ],
      logo: "/logos/unity.png",
    },
    {
      range: "September 2024 → April 2025",
      title: "Web Developer",
      location: "Toronto, ON",
      company: "University of Toronto",
      points: [
        "Redesigned and developed a website with React, Node, and CI/CD automation; modernizing the old WordPress site and improving security and stakeholder alignment by 20%."
      ],
      logo: "/logos/uoft.jpg",
    },
    {
      range: "September 2024 → December 2024",
      title: "Software Engineer Intern",
      location: "Remote",
      company: "ElderGuard Health Systems",
      points: [
        "Developed and launched CareGuard, an iOS app for real-time patient health monitoring using React Native, Apple HealthKit, and PostgreSQL, focusing on real-time data for 800+ users."
      ],
      logo: "/logos/elderguard.png",
    },
    {
      range: "May 2023 → August 2023",
      title: "Summer Student: IT Digital Services",
      location: "Toronto, ON",
      company: "HomeTrust",
      points: [
        "Created web tools and automated workflows using Angular, Python, and SQL to boost efficiency and engagement by 30%."
      ],
      logo: "/logos/hometrust.png",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="px-6 sm:px-12 md:px-20 py-14 max-w-6xl mx-auto"
    >
      <h2 className="text-3xl font-bold mb-12 text-center">My Journey 🚀</h2>
      <Timeline>
        {timelineItems.map((item, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            key={index}
            initial={{ x: index % 2 === 0 ? -40 : 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.2, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <TimelineItem>
              <div className="flex items-center space-x-4 relative z-10">
                <div className="w-9 h-9 relative rounded-full overflow-hidden bg-white shadow-md">
                  <Image
                  src={item.logo}
                  alt={`${item.title} logo`}
                  layout="fill"
                  className="object-cover p-0"
                  />
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">{item.range}</span>
              </div>

              <div className="relative group border-l-4 border-transparent hover:border-amber-400 transition-all duration-300 z-10 mt-3 ml-12 bg-white/80 p-4 rounded-xl shadow-sm hover:shadow-md">
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

                <h3 className="text-base md:text-lg font-semibold text-indigo-500 mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-amber-500 mb-2">{item.company}</p>
                <p className="text-sm text-amber-400 mb-2">{item.location}</p>
                <ul className="list-disc text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  {item.points.map((point, i) => (
                    <ul key={i}>{point}</ul>
                  ))}
                </ul>
              </div>
            </TimelineItem>
          </motion.div>
        ))}
      </Timeline>
    </motion.div>
  );
}
// import { motion } from "framer-motion";
// import { Timeline, TimelineItem } from "flowbite-react";
// import Image from "next/image";

// export default function AboutTimeline() {
//   const timelineItems = [
//     {
//       range: "May 2025 → Present",
//       title: "Web Developer @ Unity Health Toronto",
//       points: [
//         "Building modern research website",
//         "Automating publication workflows",
//         "Using Next.js, custom APIs, scripts",
//       ],
//       logo: "/logos/unity.png",
//     },
//     {
//       range: "May 2024 → Aug 2024",
//       title: "Software Engineer Intern @ CIBC",
//       points: [
//         "Built internal trade surveillance tools",
//         "Developed React + Flask + PostgreSQL stack",
//         "Streamlined APIs and UI workflows",
//       ],
//       logo: "/logos/cibc.png",
//     },
//     {
//       range: "Sep 2023 → Dec 2023",
//       title: "Research Assistant @ UofT",
//       points: [
//         "Mapped endangered turtle habitats",
//         "Performed spatial analysis in ArcGIS",
//         "Created interactive map reports",
//       ],
//       logo: "/logos/uoft.png",
//     },
//     {
//       range: "Sep 2022 → Present",
//       title: "BSc in Computer Science + GIS Minor",
//       points: [
//         "Studying at University of Toronto",
//         "Passion for tech, design & geography",
//         "GIS & Full-stack development skills",
//       ],
//       logo: "/logos/uoft.png",
//     },
//   ];

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       transition={{ duration: 0.6 }}
//       viewport={{ once: true }}
//       className="px-6 sm:px-12 md:px-20 py-14 max-w-6xl mx-auto"
//     >
//       <h2 className="text-2xl md:text-4xl font-bold mb-12 text-center">
//         My Journey 🚀
//       </h2>
//       <Timeline>
//         {timelineItems.map((item, index) => (
//           <motion.div
//             key={index}
//             initial={{ x: index % 2 === 0 ? -40 : 40, opacity: 0 }}
//             whileInView={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.7, delay: index * 0.2 }}
//             viewport={{ once: true }}
//             className="relative"
//           >
//             <TimelineItem>
//               <div className="flex items-center space-x-4 relative z-10">
//                 <div className="w-9 h-9 relative rounded-full overflow-hidden bg-white shadow-md">
//                   <Image
//                     src={item.logo}
//                     alt={`${item.title} logo`}
//                     fill
//                     className="object-contain p-1"
//                   />
//                 </div>
//                 <span className="text-sm text-gray-500 dark:text-gray-400">
//                   {item.range}
//                 </span>
//               </div>

//               <div className="relative group border-l-4 border-transparent hover:border-amber-400 transition-all duration-300 bg-white/80 p-5 rounded-xl shadow-sm hover:shadow-md mt-3 ml-12">
//                 {/* ANIMATED CIRCLES ABOVE TITLE */}
//                 <div className="flex items-center space-x-2 mb-2">
//                   <span className="w-3 h-3 rounded-full bg-amber-500 animate-bounce" />
//                   <span
//                     className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-bounce"
//                     style={{ animationDelay: "0.15s" }}
//                   />
//                   <span
//                     className="w-2 h-2 rounded-full bg-amber-300 animate-bounce"
//                     style={{ animationDelay: "0.3s" }}
//                   />
//                 </div>

//                 <h3 className="text-base md:text-lg font-semibold mb-2 text-indigo-500">
//                   {item.title}
//                 </h3>

//                 <ul className="list-disc ml-5 text-sm text-gray-600 dark:text-gray-300 space-y-1">
//                   {item.points.map((point, i) => (
//                     <li key={i}>{point}</li>
//                   ))}
//                 </ul>
//               </div>
//             </TimelineItem>
//           </motion.div>
//         ))}
//       </Timeline>
//     </motion.div>
//   );
// }
