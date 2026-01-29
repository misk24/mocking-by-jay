import { About } from "@/components/landing/about";
import { Artist } from "@/components/landing/artist";
import { Contact } from "@/components/landing/contact";
import { Hero } from "@/components/landing/hero";
import { Quotes } from "@/components/landing/quote";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Artist />
      <About />
      <Quotes />
      <Contact />
    </div>
  );
}
