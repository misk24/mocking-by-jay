import { ARTIST } from "@/constants/artists";
import { ArtistOption, EventType } from "./type";

export const EVENT_TYPES: EventType[] = [
  { label: "Concert", value: "concert" },
  { label: "Festival", value: "festival" },
  { label: "Club Show", value: "club" },
  { label: "Private Event", value: "private" },
  { label: "Corporate Event", value: "corporate" },
  { label: "Other", value: "other" },
]

export const ARTIST_OPTION: ArtistOption[] = ARTIST.map((artist) => ({
  label: artist.name,
  value: String(artist.slug),
}))