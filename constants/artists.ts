import artist1 from "@/public/images/artist-1.jpg";
import artist2 from "@/public/images/artist-2.jpg";
import artist3 from "@/public/images/artist-3.jpg";
import artist4 from "@/public/images/artist-4.jpg";
import { Artist } from "@/types/artist";

export const ARTIST:Artist[] = [
  {
    id: 1,
    name: "Knox",
    slug: "knox",
    genre: "Trap / Hip-Hop",
    image: artist1,
    bio: "Raw lyricist with hard-hitting beats. Known for authentic street narratives and unfiltered flow.",
    socials: ["ig", "x"],
    track: {
      name: "Street Chronicles",
      url: "/mp3/street-chronicles.mp3",
    },
  },
  {
    id: 2,
    name: "Vela",
    slug: "vela",
    genre: "R&B / Rap",
    image: artist2,
    bio: "Versatile vocalist blending melodic R&B with fierce rap delivery. Rising star with unstoppable energy.",
    socials: ["ig", "x"],
    track: {
      name: "Midnight Vibes",
      url: "/mp3/midnight-vibes.mp3",
    },
  },
  {
    id: 3,
    name: "Blaze",
    slug: "blaze",
    genre: "Gangsta Rap",
    image: artist3,
    bio: "Heavyweight presence with commanding stage power. Authentic storyteller from the streets to the studio.",
    socials: ["ig", "x"],
    track: {
      name: "King of the Block",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    },
  },
  {
    id: 4,
    name: "Cipher",
    slug: "cipher",
    genre: "Underground / Experimental",
    image: artist4,
    bio: "Producer and artist pushing boundaries with experimental beats and atmospheric soundscapes.",
    socials: ["ig", "x"],
    track: {
      name: "Digital Dreams",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    },
  },
]