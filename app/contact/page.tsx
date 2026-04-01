"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Component } from "@/components/ui/background-components";
import { Instagram, Facebook, Youtube, ShoppingBag, Send } from "lucide-react";

const socials = [
  { href: "https://www.instagram.com/three.little.potters/", icon: Instagram, label: "Instagram", handle: "@three.little.potters" },
  { href: "https://www.facebook.com/threelittlepotters/", icon: Facebook, label: "Facebook", handle: "Three Little Potters" },
  { href: "https://www.youtube.com/@threelittlepotters", icon: Youtube, label: "YouTube", handle: "@threelittlepotters" },
  { href: "https://www.etsy.com/shop/ThreeLittlePotters/", icon: ShoppingBag, label: "Etsy Shop", handle: "ThreeLittlePotters" },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <Component>
      <Navbar />
      <main className="mx-auto max-w-4xl px-6 pt-28 pb-16">
        <h1 className="text-4xl font-bold text-amber-100">Contact</h1>
        <p className="mt-2 text-amber-100/60">
          Get in touch or follow along on social media
        </p>

        <div className="mt-10 grid gap-10 md:grid-cols-2">
          {/* Contact Form */}
          <div className="rounded-2xl border border-amber-100/10 bg-black/40 p-6 backdrop-blur-sm">
            {submitted ? (
              <div className="flex h-full items-center justify-center">
                <p className="text-lg text-amber-100">Thanks for reaching out! Sarah will get back to you soon.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="flex flex-col gap-4"
              >
                <label className="flex flex-col gap-1">
                  <span className="text-sm font-medium text-amber-100/80">Name</span>
                  <input
                    type="text"
                    required
                    className="rounded-lg border border-amber-100/20 bg-black/40 px-4 py-2.5 text-amber-100 placeholder-amber-100/30 outline-none focus:border-amber-200"
                    placeholder="Your name"
                  />
                </label>
                <label className="flex flex-col gap-1">
                  <span className="text-sm font-medium text-amber-100/80">Email</span>
                  <input
                    type="email"
                    required
                    className="rounded-lg border border-amber-100/20 bg-black/40 px-4 py-2.5 text-amber-100 placeholder-amber-100/30 outline-none focus:border-amber-200"
                    placeholder="you@email.com"
                  />
                </label>
                <label className="flex flex-col gap-1">
                  <span className="text-sm font-medium text-amber-100/80">Message</span>
                  <textarea
                    required
                    rows={4}
                    className="resize-none rounded-lg border border-amber-100/20 bg-black/40 px-4 py-2.5 text-amber-100 placeholder-amber-100/30 outline-none focus:border-amber-200"
                    placeholder="Tell Sarah what you're looking for..."
                  />
                </label>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-100 px-6 py-2.5 text-sm font-semibold text-black transition-colors hover:bg-amber-200"
                >
                  <Send size={16} />
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Social Links */}
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-amber-100">Find Sarah</h2>
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-amber-100/10 bg-black/40 p-4 backdrop-blur-sm transition-colors hover:border-amber-100/30"
              >
                <s.icon size={24} className="text-amber-200" />
                <div>
                  <p className="font-semibold text-amber-100">{s.label}</p>
                  <p className="text-sm text-amber-100/60">{s.handle}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </Component>
  );
}
