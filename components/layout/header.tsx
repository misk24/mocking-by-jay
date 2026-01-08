"use client";

import { menuItems } from "@/constants/menu";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="fixed right-0 z-50 p-4 sm:p-6 lg:p-8">
      <motion.nav 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex justify-end"
      >
        <button
          onClick={() => setShowMenu(true)}
          aria-expanded={showMenu}
          aria-label="Toggle menu"
        >
          <Menu className="w-6 h-6 text-foreground hover:text-primary transition-colors" />
        </button>
      </motion.nav>

      {showMenu && (
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          exit={{ opacity: 0 }} 
          className="fixed inset-0 bg-background/90 backdrop-blur-sm z-10 flex items-center justify-center"
        >
          <button
            onClick={() => setShowMenu(false)}
            aria-label="Close menu"
            className="absolute top-0 right-0 p-4 sm:p-6 lg:p-8"
          >
            <X className="w-6 h-6 text-foreground hover:text-primary transition-colors" />
          </button>

          <nav className="text-center">
            <ul className="space-y-8">
              {menuItems.map((item, index) => (
                <motion.li 
                  key={index} 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                  <Link 
                    href={item.href} 
                    onClick={() => setShowMenu(false)} 
                    className="text-4xl sm:text-6xl font-bold text-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>
        </motion.div>
      )}
    </header>
  )
}