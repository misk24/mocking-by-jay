import About from "@/components/section/about";
import Artist from "@/components/section/artist";
import Contact from "@/components/section/contact";
import Hero from "@/components/section/hero";
import Quotes from "@/components/section/quotes";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <About />
      <Artist />
      <Contact />
      <Quotes />
    </div>
  );
}
