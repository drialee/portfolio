import { motion } from "motion/react";
import { Calendar, MapPin } from "lucide-react";

import { ProjectTitle } from "./Components";

// Type declaration for webpack's require.context
declare const require: {
  context(
    path: string,
    deep?: boolean,
    filter?: RegExp
  ): {
    keys(): string[];
    (id: string): any;
  };
};
const importAll = (requireContext: any) => {
  return requireContext.keys().sort().map(requireContext);
};

const images = importAll(
  require.context("../../utils/photography/edits", false, /\.(png|jpe?g|svg)$/)
);

export const BoliviaProjectPage = () => {
  const imageDetails = [
    { orientation: "h" },
    { orientation: "v" },
    { orientation: "h" },
    { orientation: "h" },
    { orientation: "h" },
    { orientation: "v" },
    { orientation: "h" },
    { orientation: "h" },
    { orientation: "v" },
    { orientation: "h" },
  ];

  const chunkArray = (array: any[], chunkSize: number) => {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    return result;
  };

  const imageChunks = chunkArray(images, 4);

  // Detect mobile - simple approach
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <div className="min-h-screen bg-gradient-to-br from-bubble-pink/20 via-bubble-purple/20 to-bubble-blue/20">
      {/* Floating bubbles background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full opacity-30 ${
              i % 3 === 0
                ? "bg-bubble-pink"
                : i % 3 === 1
                  ? "bg-bubble-purple"
                  : "bg-bubble-blue"
            }`}
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Image grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="container mx-auto py-10 pb-20 px-6"
        >
          <div className="max-w-7xl mx-auto">
            <div className="columns-2 lg:columns-3 gap-6">
              {images.map((image: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.6 + index * 0.1,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.2 },
                  }}
                  className="break-inside-avoid mb-6 group"
                >
                  <div className="backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="overflow-hidden">
                      <img
                        src={image}
                        alt={`Bolivia Chile Photography ${index + 1}`}
                        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
