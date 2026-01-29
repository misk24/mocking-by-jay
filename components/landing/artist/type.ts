import { ButtonProps, SocialId } from "@/types/type";
import { StaticImageData } from "next/image";

export interface ArtistSectionProps {
  title: string;
  book: ButtonProps;
}

export interface ArtistProps {
  id: number;
  name: string;
  slug: string;
  genre: string;
  image: StaticImageData;
  bio: string;
  socials: SocialId[];
  track: {
    name: string;
    url: string;
  };
}
