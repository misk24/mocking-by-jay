import { BookStudio } from "@/components/booking/studio";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mocking by Jay - Book Studio",
  description: "",
};

export default function BookStudioPage() {
  return <BookStudio />;
}
