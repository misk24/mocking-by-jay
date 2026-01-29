import { NavigationProps, SocialProps } from "@/types/type";

export const logo: string = "Mocking By Jay";
export const footSub: string = "Independent. Urban. Chill.";
export const copy: string = "Mocking by Jay. All rights reserved.";

export const navigations: NavigationProps[] = [
  { label: "Book Artist", href: "/booking/artist" },
  { label: "Book Studio", href: "/booking/studio" },
];

export const socials: SocialProps[] = [
  { id: "ig", icon: "instagram", label: "Instagram", href: "#" },
  { id: "x", icon: "x", label: "X", href: "#" },
  { id: "spot", icon: "spotify", label: "Spotify", href: "#" },
  { id: "yt", icon: "youtube", label: "YouTube", href: "#" },
];
