import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
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
            <h2 className="text-4xl sm:text-5xl mb-4">My Projects</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {projects.map((project, index) => {
              const hoverRotation = ((index % 5) - 2) * 1.5;

              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                    rotateZ: hoverRotation,
                  }}
                  className="group"
                >
                  <Card
                    className={`gap-3 sm:gap-6 overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-pink-100 to-purple-100 backdrop-blur-sm h-full pt-0 ${project.hasDetailPage ? "cursor-pointer" : ""}`}
                    onClick={() => {
                      if (project.hasDetailPage && !project.comingSoon) {
                        navigate(`/projects/${project.id}`);
                      }
                    }}
                  >
                    <div className="relative w-full max-h-48 bg-black/30">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <CardContent className="p-3 sm:p-6 h-full flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start mb-2 sm:mb-4">
                          <h3
                            className={`text-xl font-bold group-hover:scale-105 transition-transform duration-300`}
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

                        <p className="text-black/80 mb-2 sm:mb-4 text-sm leading-relaxed">
                          {project.comingSoon
                            ? "Coming Soon"
                            : project.description}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-1 sm:gap-1.5">
                        {project.role.map((role: string, roleIndex: number) => (
                          <motion.div
                            key={roleIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.3,
                              delay: index * 0.1 + roleIndex * 0.05,
                            }}
                            whileHover={{ scale: 1.05 }}
                          >
                            <Badge
                              variant="secondary"
                              className="text-xs px-2 py-1 bg-white/90 text-gray-700 border border-white/50 hover:bg-white transition-colors duration-200"
                            >
                              {role}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
