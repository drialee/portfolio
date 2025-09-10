import { motion } from "motion/react";
import { Button } from "../ui/button";
import { ArrowLeft } from "lucide-react";
import { Calendar } from "lucide-react";
import { MapPin } from "lucide-react";

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

interface BubblyPhotographyPageProps {
  onNavigateBack: () => void;
}

export const BoliviaProjectPage = ({
  onNavigateBack,
}: BubblyPhotographyPageProps) => {
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
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-6 pt-12 pb-8"
        >
          <div className="max-w-4xl mx-auto">
            {/* Back button */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8"
            >
              <Button
                onClick={onNavigateBack}
                variant="outline"
                className="bg-white/60 backdrop-blur-sm border-white/20 hover:bg-white/80 transition-all duration-300 rounded-3xl"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Portfolio
              </Button>
            </motion.div>

            {/* Title section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center mb-12"
            >
              <div className="inline-block bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent mb-4">
                <h1 className="text-5xl md:text-6xl font-bold">
                  Bolivia & Chile
                </h1>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex items-center justify-center gap-6 mb-6 text-foreground/70"
              >
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>October 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  <span>South America</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-white/40 backdrop-blur-sm rounded-3xl p-8 border border-white/20 max-w-3xl mx-auto"
              >
                <p className="text-lg leading-relaxed text-foreground/80">
                  I embarked on a 10-day photography journey across Bolivia and
                  Northern Chile, experimenting with night photography and using
                  long exposures to capture the dynamic interplay of lights on
                  the bright night sky.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Image grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="container mx-auto px-6 pb-20"
        >
          <div className="max-w-7xl mx-auto">
            {!isMobile ? (
              /* Desktop masonry grid */
              <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6">
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
                    <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-3 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="overflow-hidden rounded-xl">
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
            ) : (
              /* Mobile horizontal scroll rows */
              <div className="space-y-6">
                {imageChunks.map((chunk, rowIndex) => (
                  <motion.div
                    key={rowIndex}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.6 + rowIndex * 0.2,
                    }}
                    className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                  >
                    {chunk.map((image: any, index: number) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        className="flex-shrink-0 w-72 group"
                      >
                        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-3 border border-white/20 shadow-lg">
                          <div className="overflow-hidden rounded-xl">
                            <img
                              src={image}
                              alt={`Bolivia Chile Photography ${rowIndex * 4 + index + 1}`}
                              className={`w-full object-cover transition-transform duration-300 group-hover:scale-105 ${
                                imageDetails[rowIndex * 4 + index]
                                  ?.orientation === "v"
                                  ? "h-96"
                                  : "h-48"
                              }`}
                            />
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
