import { motion } from "motion/react";
import { Heart, Coffee, Code, Palette } from "lucide-react";
import FloatingBubbles from "../FloatingBubbles";

const experiences = [
  {
    icon: Code,
    label: "3+ Years",
    desc: "Coding Experience",
    color: "from-purple-400 to-purple-600",
  },
  {
    icon: Palette,
    label: "10+",
    desc: "Projects Completed",
    color: "from-pink-400 to-pink-600",
  },
  {
    icon: Heart,
    label: "∞",
    desc: "Passion for Design",
    color: "from-blue-400 to-blue-600",
  },
  {
    icon: Coffee,
    label: "999+",
    desc: "Cups of Coffee",
    color: "from-amber-400 to-orange-500",
  },
];
const skills = ["React", "TypeScript", "Figma", "Next.js", "Tailwind"];

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-background via-blue-50/30 to-purple-50/30 relative overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              About{" "}
              <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent">
                Me
              </span>
            </motion.h2>
            <motion.div
              className="w-24 h-1.5 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 rounded-full mx-auto"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I began my journey at Stanford as a liberal arts major, but
                  soon rediscovered my love for puzzles and creating things.
                  This led me to make a pivotal switch into design and
                  technology in my junior year.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I’ve worked across a variety of industries and teams, learning
                  what makes a great product, how to build it, and how it shapes
                  the world.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-6">
                {experiences.map((experience, index) => (
                  <motion.div
                    key={experience.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: 0.4 + index * 0.1,
                    }}
                    whileHover={{ scale: 1.05, rotateZ: 2 }}
                    className={`p-4 rounded-2xl bg-gradient-to-br ${experience.color.replace("to-", "to-").replace("from-", "from-")} text-white shadow-lg hover:shadow-xl transition-all duration-300`}
                  >
                    <experience.icon className="w-6 h-6 mb-2" />
                    <h4 className="font-bold text-lg">{experience.label}</h4>
                    <p className="text-sm opacity-90">{experience.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="space-y-6">
                {/* Skills Bubble */}
                <motion.div
                  whileHover={{ scale: 1.02, rotateZ: -1 }}
                  className="p-6 rounded-3xl bg-gradient-to-br from-purple-100 to-pink-100 shadow-lg"
                >
                  <h3 className="font-bold text-lg text-purple-900 mb-4">
                    What I Love Working With
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.4,
                          delay: 0.5 + index * 0.05,
                        }}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1 bg-white rounded-full text-sm font-medium text-purple-700 shadow-sm"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* Fun Facts */}
                <motion.div
                  whileHover={{ scale: 1.02, rotateZ: 1 }}
                  className="p-6 rounded-3xl bg-gradient-to-br from-blue-100 to-cyan-100 shadow-lg"
                >
                  <h3 className="font-bold text-lg text-blue-900 mb-4">
                    Fun Facts About Me
                  </h3>
                  <div className="space-y-2 text-sm text-blue-800">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">🍟</span>
                      <span>My life goal is to eat the world.</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-lg">📸</span>
                      <span>I've had a camera in my hand since I was 12.</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-lg">🎵</span>
                      <span>EDM is my coding soundtrack.</span>
                    </div>
                  </div>
                </motion.div>

                {/* Current Status */}
                <motion.div
                  whileHover={{ scale: 1.02, rotateZ: -0.5 }}
                  className="p-6 rounded-3xl bg-gradient-to-br from-green-100 to-emerald-100 shadow-lg"
                >
                  <h3 className="font-bold text-lg text-green-900 mb-3">
                    Currently
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-green-800">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span>
                      Open to opportunities that meld product and engineering!
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <FloatingBubbles />
    </section>
  );
}
