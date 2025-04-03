import { Github, ExternalLink } from "lucide-react";
import project_1 from "@/assets/projects/project_1.png";
import portfolio from "@/assets/projects/project_2.png";
import project_3 from "@/assets/projects/project_3.png";
import project_4 from "@/assets/projects/project_4.png";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTheme } from "@/provider/page";

const MacOsButtons = () => (
  <div className="flex gap-2 mb-4">
    <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors shadow-md" />
    <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors shadow-md" />
    <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors shadow-md" />
  </div>
);

const ProjectShowcase = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  const projects = [
    {
      title: "MERN Time Table Management System",
      description:
        "A robust, full-stack solution built on the MERN stack (MongoDB, Express.js, React, Node.js) for efficient scheduling and time table management. It provides dynamic CRUD operations, authentication, and real-time updates, ensuring seamless coordination for educational institutions or workplaces.",
      tags: ["MERN", "Full-Stack", "Time Table", "Scheduling", "React", "Node.js", "MongoDB"],
      links: {
        github: "https://github.com/Sandeep2864/Merntimetable",
        demo: "https://mern-timetable.demo/",
      },
      image: project_1,
      featured: true,
    },    
    {
      title:
        "A sleek portfolio built with React and Tailwind CSS to showcase your skills",
      description:
        "This portfolio is a sleek and modern showcase of my skills and projects. It's built with React and Tailwind CSS, providing a clean and professional look that reflects my professional brand.",
      tags: ["React", "Tailwind CSS", "Portfolio", "Typescript"],
      links: {
        github: "https://github.com/seraprogrammer/portfolio",
        demo: "https://codervai.vercel.app/",
      },
      image: portfolio,
      featured: true,
    },
    {
      title: "Bharath Pay UI Clone",
      description:
        "A recreated version of the Bharath Pay UI, meticulously designed with React and Tailwind CSS. This project replicates the intuitive interface and functionality, ensuring a seamless and modern digital payment experience.",
      tags: ["React", "Tailwind CSS", "UI Clone", "Payment Interface"],
      links: {
        github: "https://github.com/Sandeep2864/bharathpe",
        demo: "https://inspiring-sawine-f6a96d.netlify.app/",
      },
      image: project_3,
      featured: true,
    },  
    {
      title: "Bus Reservation System",
      description:
        "A full-stack **bus booking platform** built to streamline ticket reservations and trip management. Developed using modern web technologies, it ensures seamless booking, user authentication, and real-time seat availability tracking.",
      tags: ["MERN", "React", "Node.js", "MongoDB", "Express.js", "Booking System"],
      links: {
        github: "https://github.com/Sandeep2864/PFSD",
        demo: "https://ssdipofeioerw.netlify.app/",
      },
      image: project_4,
      featured: true,
    },      
  ];

  return (
    <div
      className={`pt-40 min-h-screen p-8 ${
        isDarkMode
          ? "bg-gradient-to-b from-[#020617] via-[#0a0f1f] to-[#000D1A]/90 text-slate-100"
          : "bg-gradient-to-b from-[#f0f4f8] via-[#e2e8f0] to-[#cbd5e1] text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center group rounded-lg p-[2px] bg-gradient-to-r from-cyan-500 via-purple-500 to-emerald-500 bg-[length:400%_400%] animate-gradient-xy hover:bg-[length:100%_100%] transition-all duration-700 shadow-lg"
          >
            {/* Image Section */}
            <div className="md:w-1/2 overflow-hidden rounded-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Text Section */}
            <Card
              className={`md:w-1/2 rounded-lg overflow-hidden shadow-md transition-transform duration-500 group-hover:scale-105 group-hover:shadow-2xl p-6 ${
                isDarkMode
                  ? "bg-gradient-to-br from-slate-800 to-gray-900"
                  : "bg-gradient-to-br from-white to-gray-100"
              }`}
            >
              <MacOsButtons />

              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-emerald-400 text-sm font-mono mb-2 tracking-wide uppercase">
                      Featured Project
                    </div>
                    <CardTitle
                      className={`text-3xl font-bold ${
                        isDarkMode ? "text-slate-100" : "text-gray-900"
                      }`}
                    >
                      {project.title}
                    </CardTitle>
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.links.github}
                      className="text-slate-400 hover:text-emerald-400 transition-all duration-300 transform hover:scale-125"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={22} />
                    </a>
                    <a
                      href={project.links.demo}
                      className="text-slate-400 hover:text-emerald-400 transition-all duration-300 transform hover:scale-125"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={22} />
                    </a>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="mt-4">
                <p
                  className={`mb-6 text-lg leading-relaxed ${
                    isDarkMode ? "text-slate-300" : "text-gray-700"
                  }`}
                >
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-emerald-400 to-cyan-500 text-gray-900 shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectShowcase;
