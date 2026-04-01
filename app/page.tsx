"use client";

import { useState } from "react";
import Link from "next/link";
import { Component } from "@/components/ui/background-components";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ShoppingBag, Images, ArrowRight } from "lucide-react";

export default function Home() {
  const [introEnded, setIntroEnded] = useState(false);

  return (
    <>
      {/* Intro Video */}
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

      {/* Main Site */}
      <div
        className={`transition-opacity duration-1000 ${
          introEnded ? "opacity-100" : "opacity-0"
        }`}
      >
        <Component>
          <Navbar />

          {/* Hero */}
          <section className="flex min-h-screen flex-col items-center justify-center px-6 pt-20 text-center">
            <h1 className="text-5xl font-bold tracking-tight text-amber-100 sm:text-7xl">
              Three Little Potters
            </h1>
            <p className="mt-4 max-w-xl text-lg text-amber-100/70">
              Handcrafted pottery made with love. Each piece tells a story —
              shaped by hand, fired with passion, and ready to find its home.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/gallery"
                className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-amber-200"
              >
                <Images size={18} />
                View Gallery
              </Link>
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 rounded-full border border-amber-100/30 px-6 py-3 text-sm font-semibold text-amber-100 transition-colors hover:bg-amber-100/10"
              >
                <ShoppingBag size={18} />
                Visit Shop
              </Link>
            </div>
          </section>

          {/* Featured Section */}
          <section className="mx-auto max-w-6xl px-6 py-24">
            <h2 className="text-3xl font-bold text-amber-100">Featured Pieces</h2>
            <p className="mt-2 text-amber-100/60">A glimpse into the collection</p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  src: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&h=600&fit=crop",
                  title: "Rustic Bowl",
                },
                {
                  src: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=600&h=600&fit=crop",
                  title: "Glazed Vase",
                },
                {
                  src: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=600&h=600&fit=crop",
                  title: "Stoneware Mug",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="group overflow-hidden rounded-2xl border border-amber-100/10 bg-black/40 backdrop-blur-sm"
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-amber-100">{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link
                href="/gallery"
                className="inline-flex items-center gap-1 text-sm font-medium text-amber-200 hover:underline"
              >
                See all pieces <ArrowRight size={16} />
              </Link>
            </div>
          </section>

          <Footer />
        </Component>
      </div>
    </>
  );
}
