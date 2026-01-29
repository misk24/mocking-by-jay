"use client";

import { Suspense } from "react";
import ArtistBookingForm from "./artist-booking-form";

export function BookArtist() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          Loading form...
        </div>
      }
    >
      <ArtistBookingForm />
    </Suspense>
  );
}
