import About from "@/components/section/about";
import Hero from "@/components/section/hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <About />
    </div>
  );
}
