import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { ArrowLeft } from "lucide-react";

interface ProjectSidebarNavProps {
  sections: string[];
  onNavigateBack: () => void;
}

export function ProjectSidebarNav({
  sections,
  onNavigateBack,
}: ProjectSidebarNavProps) {
  const [activeSection, setActiveSection] = useState(sections[0]);

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map((section) =>
        document.getElementById(section.toLowerCase().replace(/\s+/g, "-"))
      );

      const current = sectionElements.find((element) => {
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (current) {
        const sectionName = sections.find(
          (section) => section.toLowerCase().replace(/\s+/g, "-") === current.id
        );
        if (sectionName) {
          setActiveSection(sectionName);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollToSection = (section: string) => {
    const element = document.getElementById(
      section.toLowerCase().replace(/\s+/g, "-")
    );
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed left-0 top-0 h-full w-64 bg-gradient-to-b from-purple-50/80 to-pink-50/80 backdrop-blur-lg border-r border-purple-200/30 p-6 pt-20 z-40"
    >
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="mb-8"
      >
        <Button
          variant="ghost"
          onClick={onNavigateBack}
          className="flex items-center gap-2 text-purple-700 hover:text-purple-900 hover:bg-purple-100/50 rounded-xl p-3 transition-all duration-300"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Button>
      </motion.div>

      {/* Navigation Menu */}
      <nav className="space-y-2">
        {sections.map((section, index) => {
          const isActive = activeSection === section;
          return (
            <motion.button
              key={section}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              onClick={() => scrollToSection(section)}
              className={`w-full text-left p-3 rounded-xl transition-all duration-300 relative group ${
                isActive
                  ? "bg-gradient-to-r from-purple-200 to-pink-200 text-purple-900 shadow-md"
                  : "text-purple-700 hover:bg-purple-100/50 hover:text-purple-900"
              }`}
            >
              <span className="relative z-10 font-medium">{section}</span>
            </motion.button>
          );
        })}
      </nav>

      {/* Floating Decorations */}
      {Array.from({ length: 3 }).map((_, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full opacity-20 ${
            i % 3 === 0
              ? "bg-purple-300"
              : i % 3 === 1
                ? "bg-pink-300"
                : "bg-blue-300"
          }`}
          style={{
            width: `${Math.random() * 40 + 20}px`,
            height: `${Math.random() * 40 + 20}px`,
            left: `${Math.random() * 80 + 10}%`,
            top: `${Math.random() * 60 + 20}%`,
          }}
          animate={{
            y: [0, -15, 0],
            x: [0, Math.random() * 10 - 5, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: Math.random() * 4 + 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        />
      ))}
    </motion.div>
  );
}
