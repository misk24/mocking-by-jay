"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { quoteSection } from "./constant";

export function Quotes() {
  return (
    <section className="px-8 sm:px-16 lg:px-8 py-12 lg:py-24 bg-deep-black">
      <div className="max-w-4xl mx-auto">
        <blockquote className="relative">
          {/* Opening Quote Mark */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute -top-4 -left-4 md:-left-8 text-primary"
          >
            <Quote className="w-16 h-16" />
          </motion.div>

          {/* Quote Text */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10 pt-8 px-6 md:px-12"
          >
            <p className="text-xl md:text-2xl lg:text-3xl font-light leading-relaxed text-foreground italic">
              {quoteSection.quote}
            </p>
          </motion.div>

          {/* Author/Signature */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="pt-6 px-6 md:px-12"
          >
            <p className="text-sm md:text-base text-muted-foreground uppercase tracking-widest">
              {quoteSection.author}
            </p>
          </motion.div>
        </blockquote>
      </div>
    </section>
  );
}
