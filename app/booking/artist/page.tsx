import { BookArtist } from "@/components/booking/artist";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mocking by Jay - Book Artist",
  description: "",
};

export default function BookArtistPage() {
  return <BookArtist />;
};
