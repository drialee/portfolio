import { motion } from "motion/react";
import { socials } from "../../utils/info";
import FloatingBubbles from "../FloatingBubbles";
import { Button } from "../ui/button";
const profile = "/profile.png";
export function HeroSection() {
  const scrollToWork = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto flex flex-col items-center justify-center sm:gap-8 md:gap-12 lg:gap-16 sm:flex-row"
      >
        {/* Character Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative lg:w-80 lg:h-80 w-60 h-60 mx-auto">
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
          className="flex flex-col items-center justify-center gap-4 sm:gap-8"
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-foreground"
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
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            I'm an engineer and designer.
          </motion.p>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "200px" }}
            transition={{ duration: 1, delay: 1 }}
            className="h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 rounded-full mx-auto"
          />
        </motion.div>
      </motion.div>

      {/* Floating Bubbles */}
      <FloatingBubbles />
    </section>
  );
}
