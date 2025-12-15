"use client";

import { Card } from "../ui/card";
import artist1 from "../../public/images/artist-1.jpg";
import artist2 from "../../public/images/artist-2.jpg";
import artist3 from "../../public/images/artist-3.jpg";
import artist4 from "../../public/images/artist-4.jpg";
import { Instagram, Music2, Twitter } from "lucide-react";
import { AudioPlayer } from "../AudioPlayer";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";

const artists = [
  {
    id: 1,
    name: "KNOX",
    genre: "Trap / Hip-Hop",
    image: artist1,
    bio: "Raw lyricist with hard-hitting beats. Known for authentic street narratives and unfiltered flow.",
    instagram: "#",
    twitter: "#",
    track: {
      name: "Street Chronicles",
      url: "/mp3/street-chronicles.mp3",
    },
  },
  {
    id: 2,
    name: "VELA",
    genre: "R&B / Rap",
    image: artist2,
    bio: "Versatile vocalist blending melodic R&B with fierce rap delivery. Rising star with unstoppable energy.",
    instagram: "#",
    twitter: "#",
    track: {
      name: "Midnight Vibes",
      url: "/mp3/midnight-vibes.mp3",
    },
  },
  {
    id: 3,
    name: "BLAZE",
    genre: "Gangsta Rap",
    image: artist3,
    bio: "Heavyweight presence with commanding stage power. Authentic storyteller from the streets to the studio.",
    instagram: "#",
    twitter: "#",
    track: {
      name: "King of the Block",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    },
  },
  {
    id: 4,
    name: "CIPHER",
    genre: "Underground / Experimental",
    image: artist4,
    bio: "Producer and artist pushing boundaries with experimental beats and atmospheric soundscapes.",
    instagram: "#",
    twitter: "#",
    track: {
      name: "Digital Dreams",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    },
  },
];

export default function Artist() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-deep-black">
      <h2 className="font-display text-4xl md:text-5xl mb-12 text-primary text-center">Our Artists</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {artists.map((artist, index) => (
          <Card
            key={artist.id}
            className="group bg-card border-border hover:border-primary transition-all duration-500 overflow-hidden animate-fade-in-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="relative aspect-square overflow-hidden">
              <Image
                src={artist.image}
                alt={artist.name}
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
                    <a
                      href={artist.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`${artist.name} Instagram`}
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a
                      href={artist.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`${artist.name} Twitter`}
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                  </div>

                <Button
                  asChild
                  variant="urban"
                  className="group-hover:border-primary group-hover:text-primary"
                >
                  <Link href="/booking">
                    Book {artist.name}
                  </Link>
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* CTA Section */}
      {/* <div className="mt-16 text-center max-w-2xl mx-auto">
        <h3 className="font-display text-3xl text-foreground mb-4">
          READY TO BOOK?
        </h3>
        <p className="text-muted-foreground mb-6">
          Get in touch to book any of our artists for your next event.
        </p>
        <Button
          asChild
          variant="hero"
          size="lg"
        >
          <Link href="/booking">
            Book an Artist
          </Link>
        </Button>
      </div> */}
    </section>
  )
}