"use client";

import { Suspense } from "react";
import ArtistBookingForm from "./ArtistBookingForm";

export default function Page() {
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