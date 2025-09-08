import { motion } from "motion/react";
import { Mail, MapPin, Phone, Send, Heart } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

import Dino from "../../utils/Home/Dino.png";

export const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted");
  };

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50/30 via-background to-pink-50/30 relative overflow-hidden">
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
              Let's{" "}
              <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent">
                Connect
              </span>
              !
            </motion.h2>
            <motion.div
              className="w-24 h-1.5 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 rounded-full mx-auto mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Information */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              whileHover={{
                scale: 1.02,
                rotateZ: 1,
              }}
              className={`p-4 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 text-white shadow-lg hover:shadow-xl transition-all duration-300 h-fit`}
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold">Email</p>

                  <a
                    href="mailto:drialee@alumni.stanford.edu"
                    className="text-white/90 hover:text-white transition-colors"
                  >
                    drialee@alumni.stanford.edu
                  </a>
                </div>
              </div>
            </motion.div>
            <img src={Dino} alt="Dino" className="w-1/2 mx-auto" />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              whileHover={{
                scale: 1.02,
                rotateZ: 1,
              }}
              className={`p-4 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-lg hover:shadow-xl transition-all duration-300 h-fit`}
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold">Location</p>
                  San Francisco, CA
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Floating Bubbles */}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full opacity-15 ${
            i % 4 === 0
              ? "bg-purple-300"
              : i % 4 === 1
                ? "bg-pink-300"
                : i % 4 === 2
                  ? "bg-blue-300"
                  : "bg-yellow-300"
          }`}
          style={{
            width: `${Math.random() * 80 + 30}px`,
            height: `${Math.random() * 80 + 30}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -25, 0],
            x: [0, Math.random() * 15 - 7.5, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: Math.random() * 5 + 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        />
      ))}
    </section>
  );
};
