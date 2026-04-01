"use client";

import { useState } from "react";
import { Component } from "@/components/ui/background-components";

export default function Home() {
  const [introEnded, setIntroEnded] = useState(false);

  return (
    <>
      {/* Intro Video - plays once with audio, then disappears */}
      {!introEnded && (
        <div className="fixed inset-0 z-50 bg-black">
          <video
            autoPlay
            playsInline
            onEnded={() => setIntroEnded(true)}
            className="h-full w-full object-cover"
          >
            <source src="/ThreeLittlePottersIntro.mp4" type="video/mp4" />
          </video>
        </div>
      )}

      {/* Main Site - visible after intro ends */}
      <div
        className={`transition-opacity duration-1000 ${
          introEnded ? "opacity-100" : "opacity-0"
        }`}
      >
        <Component />
      </div>
    </>
  );
}
