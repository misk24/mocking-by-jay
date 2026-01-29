"use client";

import { motion } from "framer-motion";
import { aboutSection } from "./constant";

export function About() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 lg:py-24 bg-deep-black">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-4xl sm:text-5xl mb-12 text-primary text-center">
            {aboutSection.title}
          </h2>
        </motion.div>

        <div className="space-y-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
          {aboutSection.descriptions.map((paragraph, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
