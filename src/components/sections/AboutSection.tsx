import { motion } from "motion/react";
import bear from "../../utils/other/bear.png";

import alpaca from "../../utils/other/alpaca 2.jpeg";
import dog from "../../utils/other/dog.jpeg";
import eating from "../../utils/other/eating.jpeg";
import matcha from "../../utils/other/matcha.jpeg";
import nyc from "../../utils/other/nyc.jpg";

const bubblePhotos = [
  { src: eating, alt: "eating" },

  { src: nyc, alt: "nyc" },
  { src: alpaca, alt: "alpaca" },
  { src: matcha, alt: "matcha" },
  { src: dog, alt: "dog" },
];

export function AboutSection() {
  return (
    <section id="about" className="relative overflow-visible">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-12 text-center sm:mb-16">
          <h2 className="text-3xl sm:text-5xl">About Me</h2>
        </div>

        <div className="flex flex-col sm:flex-row items-start gap-10 md:gap-12 lg:gap-16">
          <div className="flex flex-col gap-4 w-full sm:w-1/2">
            <div className="flex min-w-0 flex-col gap-4 text-center sm:text-left break-words">
              <p className="text-base text-muted-foreground leading-relaxed sm:text-md">
                I started at Stanford thinking I would go into finance. Then I
                spent a summer in New York City that completely changed
                everything—I rediscovered my childhood obsession with puzzles
                and making things, and realized I wanted to design and build
                stuff for a living. So with two years left of school, I made the
                leap into design and tech. Now I'm back in NYC as a founding
                product engineer at a startup called Airframe.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed sm:text-md">
                My work sits at the intersection of problem solving,
                storytelling, and making an impact. I pull from my background in
                history and psychology to create experiences that feel intuitive
                and inclusive — and always throw in a little playfulness.
              </p>

              <p className="text-base text-muted-foreground leading-relaxed sm:text-md">
                When I'm not working, you'll find me engaging with my inner
                child: photography, sketching, and building an ever-growing list
                of NYC restaurants I need to try.
              </p>
            </div>
            <div className="flex justify-center sm:justify-start">
              <img
                src={bear}
                alt="bear"
                className="h-32 w-32 object-contain sm:h-40 sm:w-40 lg:h-48 lg:w-48"
              />
            </div>
          </div>

          <div className="flex flex-col gap-6 w-full sm:w-1/2">
            {/* Fun Facts */}
            <motion.div
              whileHover={{ scale: 1.02, rotateZ: 1 }}
              className="rounded-3xl bg-gradient-to-br from-pink-100 to-purple-100 p-6 shadow-lg sm:p-8"
            >
              <h3 className="font-bold text-lg mb-4">Fun Facts About Me</h3>
              <div className="flex flex-col text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-lg">🍟</span>
                  <span>My goal in life is to eat the world.</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-lg">📸</span>
                  <span>
                    I've had a camera in my hand since I was 12 years old.
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-lg">🐑</span>
                  <span>I've led an alpaca blessing ceremony.</span>
                </div>
              </div>
            </motion.div>
            <div className="flex justify-center sm:justify-start -space-x-4 gap-0">
              {bubblePhotos.map(({ src, alt }, index) => (
                <div
                  key={index}
                  className="relative h-24 w-24 overflow-hidden rounded-2xl border-2 border-pink-300 shadow-lg transition-all duration-300 ease-out hover:-translate-y-1 hover:z-20 hover:scale-110 sm:h-32 sm:w-32 lg:h-40 lg:w-40"
                >
                  <img
                    src={src}
                    alt={alt}
                    className="absolute inset-0 h-full w-full object-cover shrink-0"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
