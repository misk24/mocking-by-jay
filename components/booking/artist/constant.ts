import { artists } from "@/components/landing/artist/constant";
import { ArtistOption, EventType } from "./type";

export const eventTypes: EventType[] = [
  { label: "Concert", value: "concert" },
  { label: "Festival", value: "festival" },
  { label: "Club Show", value: "club" },
  { label: "Private Event", value: "private" },
  { label: "Corporate Event", value: "corporate" },
  { label: "Other", value: "other" },
];

export const artistOption: ArtistOption[] = artists.map((artist) => ({
  label: artist.name,
  value: String(artist.slug),
}));
