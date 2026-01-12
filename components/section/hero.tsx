"use client";

import { Button } from "@components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(12, 10, 10, 0.7), rgba(12, 10, 10, 0.9)), url(/images/hero-studio.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-hero opacity-80" />
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Logo/Brand */}
        <motion.div 
          initial={{ opacity: 0, y: -24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-7xl sm:text-8xl md:text-9xl font-display text-foreground mb-4 tracking-tight">
            MOCKING BY JAY
          </h1>
          <div className="h-1 w-32 bg-primary mx-auto mb-6" />
          <p className="text-xl sm:text-2xl text-muted-foreground uppercase tracking-widest">
            Home of Raw Talent
          </p>
        </motion.div>

        {/* Primary CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-12"
        >
          <Link href="/booking/artist">
            <Button 
              variant="hero" 
              size="xl"
              className="text-xl sm:text-2xl py-8 px-16 cursor-pointer"
            >
              Book an Artist
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}