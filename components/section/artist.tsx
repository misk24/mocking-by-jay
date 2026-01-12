"use client";

import { AudioPlayer } from "@components/AudioPlayer";
import { Button } from "@components/ui/button";
import { Card } from "@components/ui/card";
import { artists } from "@/constants/artists";
import { socialItems } from "@/constants/social";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { Music2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Artist() {
  const artistSocials = socialItems.filter(item => 
    artists.some(artist => 
      artist.socials.includes(item.id)
    )
  );

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-deep-black">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="font-display text-4xl md:text-5xl mb-12 text-primary text-center">
          Our Artists
        </h2>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {artists.map((artist, index) => (
          <motion.div
            key={artist.id}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <Card className="group bg-card border-border hover:border-primary transition-all duration-500 overflow-hidden">
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={artist.image}
                  alt={`Image of ${artist.name}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-deep-black via-deep-black/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                
                {/* Artist Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <Music2 className="w-4 h-4 text-primary" />
                    <span className="text-sm text-primary font-semibold uppercase tracking-wider">
                      {artist.genre}
                    </span>
                  </div>
                  <h2 className="font-display text-4xl mb-2 group-hover:text-primary transition-colors">
                    {artist.name}
                  </h2>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {artist.bio}
                </p>

                {/* Audio Player */}
                <AudioPlayer
                  trackName={artist.track.name}
                  artistName={artist.name}
                  audioUrl={artist.track.url}
                />

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex gap-3">
                      {artistSocials.map(social => (
                        <a
                          key={social.id}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                          aria-label={`${artist.name} ${social.label}`}
                        >
                          <Icon icon={`simple-icons:${social.icon}`} className="w-5 h-5" />
                        </a>
                      ))}
                    </div>

                  <Button
                    asChild
                    variant="urban"
                    className="hover:border-primary hover:text-primary"
                  >
                    <Link href="/booking/artist">
                      Book {artist.name}
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}