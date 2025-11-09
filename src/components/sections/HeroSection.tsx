import { motion } from "motion/react";
const profile = "/profile.png";
export function HeroSection() {
  return (
    <section className="relative flex flex-col justify-center px-6 min-h-[calc(100vh-80px)]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center gap-10 sm:flex-row sm:items-stretch md:gap-12 lg:gap-16"
      >
        {/* Character Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative mx-auto h-52 w-52 sm:h-64 sm:w-64 lg:h-80 lg:w-80">
            {/* Character image */}
            <motion.img
              src={profile}
              alt="Dria Lee"
              className="relative z-10 h-full w-full object-contain"
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
          className="flex max-w-xl flex-col items-center gap-5 text-center sm:items-start sm:text-left"
        >
          <h1 className="text-3xl sm:text-5xl lg:text-6xl">
            Hey, I'm{" "}
            <motion.span
              className="inline-block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {" "}
              Dria
            </motion.span>
            !
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-base text-gray-600 sm:text-xl"
          >
            I design and build experiences that bring people's stories to life.
          </motion.p>

          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "140px", opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="h-1.5 bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
