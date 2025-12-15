import { Mail, MapPin, Mic, Phone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import Link from "next/link";

export default function Contact() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl mb-12 text-primary text-center">
          Get In Touch
        </h2>
        <div className="grid md:grid-cols-2 gap-8 animate-fade-in-up">
          <Card className="border-border bg-card hover:border-primary">
            <CardHeader>
              <CardTitle className="font-display text-2xl text-primary">Contact Info</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="text-primary" size={20} />
                <span>info@mockingbyjay.com</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="text-primary" size={20} />
                <span>+1 (555) RAP-MGMT</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="text-primary" size={20} />
                <span>Los Angeles, CA</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border bg-card hover:border-primary">
            <Link href="/booking">
              <CardHeader>
                <CardTitle className="font-display text-2xl text-primary">Book Studio</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-3 text-muted-foreground">
                  <Mic className="text-primary" size={30} />
                  <span>
                    Reserve professional studio time for recording, mixing, and production
                  </span>
                </div>
              </CardContent>
            </Link>
          </Card>
        </div>
      </div>
    </section>
  )
}