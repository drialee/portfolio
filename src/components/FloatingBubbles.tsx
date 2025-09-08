import { motion } from "motion/react";

const FloatingBubbles = () => {
  return (
    <>
      {Array.from({ length: 6 }).map((_, i) => (
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
            width: `${Math.random() * 100 + 50}px`,
            height: `${Math.random() * 100 + 50}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, Math.random() * 20 - 10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: Math.random() * 4 + 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        />
      ))}
    </>
  );
};

export default FloatingBubbles;
