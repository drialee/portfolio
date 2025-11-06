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
    label: "$999+",
    desc: "Money spent on Matcha",
    color: "from-green-400 to-green-600",
  },
];
const skills = ["React", "TypeScript", "Figma"];

export function AboutSection() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
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

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <p className="text-md text-muted-foreground leading-relaxed">
                  I started at Stanford thinking I would go into finance. Then I
                  spent a summer in New York City that completely changed
                  everything— I rediscovered my childhood obsession with puzzles
                  and making things, and realized I wanted to design and build
                  stuff for a living. So with two years left of school, I made
                  the leap into design and tech. Now I'm back in NYC as a
                  founding product engineer at a startup called Airframe.
                </p>
                <p className="text-md text-muted-foreground leading-relaxed">
                  My work sits at the intersection of problem-solving,
                  aesthetics, and actually making an impact. I draw from my
                  classes in history and psychology to design experiences that
                  are inclusive, intuitive, and a little bit playful.
                </p>

                <p className="text-md text-muted-foreground leading-relaxed">
                  When I'm not working, you'll find me engaging with my inner
                  child: photography, sketching, and building an ever-growing
                  list of NYC restaurants I need to try.
                </p>
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
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <FloatingBubbles />
    </section>
  );
}
