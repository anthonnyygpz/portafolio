import { useState } from "react";
import { motion } from "framer-motion";
import {
  Atom,
  Code,
  Database,
  FileJson,
  Flame,
  GitBranch,
  Github,
  Hash,
  Terminal,
  Wind,
  Zap,
} from "lucide-react";

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  interface Skill {
    name: string;
    level: number;
    levelText: string;
    category: string;
    icon: React.ReactNode;
    color: string;
  }

  const skills: Skill[] = [
    // Programming Languages
    {
      name: "Python",
      level: 85,
      levelText: "Intermedio-Avanzado",
      category: "Programacion",
      icon: <Code className="h-6 w-6" />,
      color: "bg-blue-600",
    },
    {
      name: "Bash",
      level: 55,
      levelText: "Intermedio",
      category: "Programacion",
      icon: <Terminal className="h-6 w-6" />,
      color: "bg-gray-800",
    },
    {
      name: "C#",
      level: 70,
      levelText: "Intermedio",
      category: "Programacion",
      icon: <Hash className="h-6 w-6" />,
      color: "bg-purple-700",
    },
    {
      name: "JavaScript",
      level: 65,
      levelText: "Intermedio-basico",
      category: "Programacion",
      icon: <FileJson className="h-6 w-6" />,
      color: "bg-yellow-500",
    },

    // Frontend
    {
      name: "TailwindCSS",
      level: 35,
      levelText: "Basico",
      category: "Frontend",
      icon: <Wind className="h-6 w-6" />,
      color: "bg-cyan-500",
    },
    {
      name: "React",
      level: 75,
      levelText: "Intermedio",
      category: "Frontend",
      icon: <Atom className="h-6 w-6" />,
      color: "bg-blue-400",
    },

    // Backend
    {
      name: "FastAPI",
      level: 82,
      levelText: "Intermedio-Avanzado",
      category: "Backend",
      icon: <Zap className="h-6 w-6" />,
      color: "bg-teal-600",
    },

    // Databases
    {
      name: "Firebase",
      level: 58,
      levelText: "Intermedio",
      category: "BD",
      icon: <Flame className="h-6 w-6" />,
      color: "bg-orange-500",
    },
    {
      name: "SQLite",
      level: 60,
      levelText: "Intermedio",
      category: "BD",
      icon: <Database className="h-6 w-6" />,
      color: "bg-blue-300",
    },
    {
      name: "PostgreSQL",
      level: 80,
      levelText: "Intermedio",
      category: "BD",
      icon: <Database className="h-6 w-6" />,
      color: "bg-blue-700",
    },
    {
      name: "MySQL",
      level: 55,
      levelText: "Intermedio",
      category: "BD",
      icon: <Database className="h-6 w-6" />,
      color: "bg-orange-600",
    },

    // Tools
    {
      name: "GitHub",
      level: 90,
      levelText: "Intermedio",
      category: "Herramientas",
      icon: <Github className="h-6 w-6" />,
      color: "bg-gray-900",
    },
    {
      name: "Git",
      level: 75,
      levelText: "Intermedio",
      category: "Herramientas",
      icon: <GitBranch className="h-6 w-6" />,
      color: "bg-red-600",
    },
    {
      name: "Arch Linux",
      level: 85,
      levelText: "Intermedio-Avanzado",
      category: "Herramientas",
      icon: <Terminal className="h-6 w-6" />,
      color: "bg-blue-800",
    },
  ];

  const categories = Array.from(new Set(skills.map((skill) => skill.category)));

  const filteredSkills = activeCategory
    ? skills.filter((skill) => skill.category === activeCategory)
    : skills;

  return (
    <section className="text-white w-full" id="skill">
      <div className="w-full max-w-4xl mx-auto py-16 px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Mis habilidades
        </h2>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-4 py-2 rounded-full transition-all duration-300 ${
              activeCategory === null
                ? "bg-primary text-primary-foreground"
                : "bg-muted hover:bg-muted/80"
            }`}
          >
            Todo
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted hover:bg-muted/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative"
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className="bg-card rounded-xl p-6 h-full border shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg ${skill.color} text-white`}>
                    {skill.icon}
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">
                    {skill.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-2">{skill.name}</h3>

                <div className="w-full bg-muted rounded-full h-2.5 mb-2">
                  <motion.div
                    className={`h-2.5 rounded-full ${skill.color}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.2 }}
                  />
                </div>

                <div className="flex justify-between text-sm">
                  <span className="p-2">Nivel</span>
                  <span className="bg-green-300/10 rounded p-2">
                    {skill.levelText}
                  </span>
                </div>

                {hoveredSkill === skill.name && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute bottom-4 right-4"
                  ></motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive 3D Skill Sphere (Optional Enhancement) */}
        <div className="mt-16 flex justify-center">
          <motion.div
            className="relative w-64 h-64 rounded-full bg-gradient-to-r opacity-80"
            animate={{
              scale: [1, 1.05, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Number.POSITIVE_INFINITY,
            }}
          >
            {skills.map((skill, index) => {
              const angle = (index / skills.length) * Math.PI * 2;
              const radius = 120;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              return (
                <motion.div
                  key={skill.name}
                  className={`absolute w-12 h-12 rounded-full flex items-center justify-center text-white ${skill.color}`}
                  style={{
                    left: `calc(50% + ${x}px - 24px)`,
                    top: `calc(50% + ${y}px - 24px)`,
                  }}
                  whileHover={{ scale: 1.2, zIndex: 10 }}
                >
                  {skill.icon}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
