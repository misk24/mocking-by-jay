"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function Quotes() {
  return (
    <section className="py-24 px-8 sm:px-16 lg:px-8 bg-deep-black">
      <div className="max-w-4xl mx-auto animate-fade-in-up">
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
              We are an independent record label built around authenticity.
              Every artist we represent brings their own identity, and we give them the space 
              to push it forward without compromise.
            </p>
          </motion.div>

          {/* Author/Signature */}
          <motion.div 
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="pt-6 text-center"
          >
            <p className="text-sm md:text-base text-muted-foreground uppercase tracking-widest">
              — Mocking by Jay
            </p>
          </motion.div>
        </blockquote>
      </div>
    </section>
  )
}