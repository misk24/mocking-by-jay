"use client";

import { socialItems } from "@/constants/social";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-deep-black border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          {/* Brand */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center sm:text-left"
          >
            <h2 className="text-2xl font-display text-foreground mb-2">
              MOCKING BY JAY
            </h2>
            <p className="text-sm text-muted-foreground">
              Independent. Urban. Chill.
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex gap-6"
          >
            {socialItems.map(item => (
              <a 
                key={item.id}
                href={item.href} 
                className="text-muted-foreground hover:text-primary transition-smooth"
                aria-label={item.label}
              >
                <Icon 
                  icon={`simple-icons:${item.icon}`} 
                  className="w-6 h-6" 
                />
              </a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center sm:text-right text-sm text-muted-foreground"
          >
            © {new Date().getFullYear()} Mocking by Jay. All rights reserved.
          </motion.div>
        </div>
      </div>
    </footer> 
  )
}