"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import Link from "next/link";
import { book, contacts, contactSection } from "./constant";

export function Contact() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 lg:py-24 bg-deep-black">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-4xl md:text-5xl mb-12 text-primary text-center">
            {contactSection.title}
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
                  {contacts.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                {contacts.contacts.map((contact, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 text-muted-foreground"
                  >
                    <contact.icon className="w-5 h-5 text-primary" />
                    <span>{contact.label}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card
              className="border-border bg-card hover:border-primary h-full"
              asChild
            >
              <Link href={book.button.href}>
                <CardHeader>
                  <CardTitle className="font-display text-2xl text-primary">
                    {book.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-3 text-muted-foreground">
                    <book.icon className="w-8 h-8 text-primary" />
                    <span>{book.button.label}</span>
                  </div>
                </CardContent>
              </Link>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
