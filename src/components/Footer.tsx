import { motion } from "motion/react";
import { Button } from "./ui/button";
import { socials, type SocialLink } from "../utils/info";

const initials = "/initials.png";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-gradient-to-br from-purple-100/50 via-pink-50/30 to-blue-100/50 border-t border-purple-200/30 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Logo and Description */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center md:text-left"
            >
              <motion.h3
                className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent mb-2"
                whileHover={{ scale: 1.05 }}
              >
                <img src={initials} alt="Dria Lee" className="w-16 h-16" />
              </motion.h3>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex gap-3"
            >
              {socials.map((social: SocialLink, index: number) => (
                <motion.div
                  key={social.href}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -3, rotateZ: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outline"
                    size="sm"
                    className={`p-3 rounded-2xl bg-gradient-to-r ${social.color} text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300`}
                    asChild
                  >
                    <a
                      href={social.href}
                      target={social.target ?? "_self"}
                      rel={
                        social.target === "_blank"
                          ? "noopener noreferrer"
                          : undefined
                      }
                      aria-label={social.label}
                    >
                      <social.icon className="!w-6 !h-6" />
                    </a>
                  </Button>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Decorative Divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="my-8 h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent"
          />

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center text-sm text-muted-foreground"
          >
            <p className="flex items-center justify-center gap-2 flex-wrap">
              © {currentYear} Dria Lee.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};
