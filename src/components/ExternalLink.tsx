import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ExternalLink } from "lucide-react";

export const ExternalLinkButton = ({
  href,
  label,
}: {
  href: string;
  label: string;
}) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="max-w-4xl pt-8"
    >
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button
          size="lg"
          className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-2xl px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300"
          asChild
        >
          <a href={href} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="!w-5 !h-5 mr-2" />
            {label}
          </a>
        </Button>
      </motion.div>
    </motion.section>
  );
};
