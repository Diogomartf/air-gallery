"use client";

import { useState } from "react";
import { AirGallery } from "./components/AirGallery";

export default function Home() {
  const [openGallery, setOpenGallery] = useState<Boolean>();
  return (
    <main className="relative">
      <nav className="px-12 py-5 md:px-32">
        <p className="text-xl font-bold">
          <span className="text-[#ff385c]">Air</span> Gallery
        </p>
      </nav>
      <div
        className="flex cursor-pointer items-center space-x-3 px-12 py-5 md:px-32 md:py-14"
        onClick={() => setOpenGallery(true)}
      >
        <div className="h-96 w-full rounded-lg bg-gray-100"></div>
        <div className="hidden h-96 w-full rounded-lg bg-gray-100 md:block"></div>
      </div>
      {openGallery && (
        <AirGallery
          isOpen={openGallery}
          closeAction={() => setOpenGallery(false)}
        />
      )}
    </main>
  );
}
