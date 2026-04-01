import Link from "next/link";
import { Instagram, Facebook, Youtube, ShoppingBag } from "lucide-react";

const socials = [
  { href: "https://www.instagram.com/three.little.potters/", icon: Instagram, label: "Instagram" },
  { href: "https://www.facebook.com/threelittlepotters/", icon: Facebook, label: "Facebook" },
  { href: "https://www.youtube.com/@threelittlepotters", icon: Youtube, label: "YouTube" },
  { href: "https://www.etsy.com/shop/ThreeLittlePotters/", icon: ShoppingBag, label: "Etsy" },
];

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-amber-100/10 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-8 sm:flex-row sm:justify-between">
        <p className="text-sm text-amber-100/60">
          &copy; {new Date().getFullYear()} Three Little Potters. All rights reserved.
        </p>
        <div className="flex gap-5">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-100/60 transition-colors hover:text-amber-200"
              aria-label={s.label}
            >
              <s.icon size={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
