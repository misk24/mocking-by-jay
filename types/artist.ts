import { StaticImageData } from "next/image";
import { SocialId } from "./social";

export interface ArtistTrack {
  name: string,
  url: string,
}

export interface Artist {
  id: number,
  name: string,
  slug: string,
  genre: string,
  image: StaticImageData,
  bio: string,
  socials: SocialId[],
  track: ArtistTrack
}