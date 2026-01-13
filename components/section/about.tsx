"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 lg:py-24 bg-deep-black">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-4xl sm:text-5xl mb-12 text-primary text-center">
            Our Story
          </h2>
        </motion.div>
        <div className="space-y-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Founded in 2015, Mocking by Jay emerged from the underground rap scene with a simple mission: 
            give raw talent a platform without compromising artistic integrity. What started as a basement 
            studio and a dream has grown into one of the most respected independent labels in the game.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            We've built our reputation by staying true to the streets while delivering professional-grade 
            production. Every artist we sign isn't just a contract—they're family. We provide the resources, 
            the guidance, and the freedom to create music that matters.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Today, Mocking by Jay represents a roster of diverse voices united by one thing: an unshakeable 
            commitment to keeping it real. From trap to conscious rap, from up-and-comers to established names, 
            we're building a legacy that future generations will respect.
          </motion.p>
        </div>
      </div>
    </section>
  )
}