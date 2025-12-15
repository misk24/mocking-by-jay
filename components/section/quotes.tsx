import { Quote } from "lucide-react";

export default function Quotes() {
  return (
    <section className="py-24 px-8 sm:px-16 lg:px-8 bg-deep-black">
      <div className="max-w-4xl mx-auto animate-fade-in-up">
        <blockquote className="relative">
          {/* Opening Quote Mark */}
          <div className="absolute -top-4 -left-4 md:-left-8 text-primary">
            <Quote size={64} />
          </div>

          {/* Quote Text */}
          <div className="relative z-10 pt-8 px-6 md:px-12">
            <p className="text-xl md:text-2xl lg:text-3xl font-light leading-relaxed text-foreground italic">
              We are an independent record label built around authenticity.
              Every artist we represent brings their own identity, and we give them the space 
              to push it forward without compromise.
            </p>
          </div>

          {/* Author/Signature */}
          <div className="mt-12 pt-6 border-t border-border/50 text-center">
            <p className="text-sm md:text-base text-muted-foreground uppercase tracking-widest">
              — Mocking by Jay
            </p>
          </div>
        </blockquote>
      </div>
    </section>
  )
}