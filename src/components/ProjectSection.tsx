import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import FloatingBubbles from "./FloatingBubbles";
import { projects } from "../utils/info";

export const ProjectSection = () => {
  const navigate = useNavigate();
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              My{" "}
              <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent">
                Projects
              </span>
            </motion.h2>
            <motion.div
              className="w-24 h-1.5 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 rounded-full mx-auto mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  rotateZ: Math.random() * 4 - 2,
                }}
                className="group"
              >
                <Card
                  className={`overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 ${project.color} backdrop-blur-sm h-full ${project.hasDetailPage ? "cursor-pointer" : ""}`}
                  onClick={() => {
                    if (project.hasDetailPage && !project.comingSoon) {
                      navigate(`/projects/${project.id}`);
                    }
                  }}
                >
                  <CardContent className="p-6 h-full flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <h3
                          className={`text-xl font-bold ${project.textColor} group-hover:scale-105 transition-transform duration-300`}
                        >
                          {project.title}
                        </h3>
                        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {project.hasDetailPage && !project.comingSoon && (
                            <motion.div
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <ArrowRight className="!w-6 !h-6" />
                            </motion.div>
                          )}
                        </div>
                      </div>

                      <p
                        className={`${project.textColor} mb-4 text-sm leading-relaxed`}
                      >
                        {project.comingSoon
                          ? "Coming Soon"
                          : project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map(
                        (technology: string, technologyIndex: number) => (
                          <motion.div
                            key={technologyIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.3,
                              delay: index * 0.1 + technologyIndex * 0.05,
                            }}
                            whileHover={{ scale: 1.05 }}
                          >
                            <Badge
                              variant="secondary"
                              className="text-xs px-2 py-1 bg-white/90 text-gray-700 border border-white/50 hover:bg-white transition-colors duration-200"
                            >
                              {technology}
                            </Badge>
                          </motion.div>
                        )
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <FloatingBubbles />
    </section>
  );
};
