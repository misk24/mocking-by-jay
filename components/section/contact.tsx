"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";
import { motion } from "framer-motion";
import { Mail, MapPin, Mic, Phone } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 lg:py-24 bg-deep-black">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-4xl md:text-5xl mb-12 text-primary text-center">
            Get In Touch
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="border-border bg-card hover:border-primary h-full">
              <CardHeader>
                <CardTitle className="font-display text-2xl text-primary">
                  Contact Info
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>info@mockingbyjay.com</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>+1 (555) RAP-MGMT</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Los Angeles, CA</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="border-border bg-card hover:border-primary h-full">
              <Link href="/booking/studio">
                <CardHeader>
                  <CardTitle className="font-display text-2xl text-primary">
                    Book Studio
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-3 text-muted-foreground">
                    <Mic className="w-8 h-8 text-primary" />
                    <span>
                      Reserve professional studio time for recording, mixing, and production
                    </span>
                  </div>
                </CardContent>
              </Link>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}