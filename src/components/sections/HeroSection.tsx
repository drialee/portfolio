import { motion } from "motion/react";
import { Github, Linkedin, Mail } from "lucide-react";

import FloatingBubbles from "../FloatingBubbles";
import { Button } from "../ui/button";
const profile = "/profile.png";

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/drialee",
    color: "from-gray-400 to-gray-600",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/dria-lee/",
    color: "from-blue-400 to-blue-600",
  },
  {
    icon: Mail,
    href: "mailto:drialee@alumni.stanford.edu",
    color: "from-purple-400 to-pink-500",
  },
];

export function HeroSection() {
  const scrollToWork = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-purple-50/30 to-pink-50/30">
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 max-w-4xl mx-auto"
        >
          {/* Character Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-80 h-80 mx-auto">
              {/* Character image */}
              <motion.img
                src={profile}
                alt="Dria Lee"
                className="relative z-10 w-full h-full object-contain"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold text-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Hey, I'm{" "}
              <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent">
                Dria
              </span>
              !
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto"
            >
              I'm a product manager and front-end developer.
            </motion.p>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "200px" }}
              transition={{ duration: 1, delay: 1 }}
              className="h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 rounded-full mx-auto"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                onClick={scrollToWork}
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Explore My Work
              </Button>
            </motion.div>

            <div className="flex gap-3">
              {socialLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 1.4 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className={`p-3 rounded-2xl bg-gradient-to-r ${link.color} text-white border-0 hover:shadow-lg transition-all duration-300`}
                    asChild
                  >
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <link.icon className="w-5 h-5" />
                    </a>
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Bubbles */}
      <FloatingBubbles />
    </section>
  );
}
