export type SocialId = "ig" | "x" | "spot" | "yt";

export interface SocialItem {
  id: SocialId,
  icon: string,
  label: string,
  href: string,
}