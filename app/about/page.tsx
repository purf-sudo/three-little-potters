import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Component } from "@/components/ui/background-components";

export default function AboutPage() {
  return (
    <Component>
      <Navbar />
      <main className="mx-auto max-w-4xl px-6 pt-28 pb-16">
        <h1 className="text-4xl font-bold text-amber-100">About</h1>

        <div className="mt-10 grid gap-10 md:grid-cols-2">
          <img
            src="https://images.unsplash.com/photo-1556909114-44e3e70034e2?w=600&h=700&fit=crop"
            alt="Potter at the wheel"
            className="rounded-2xl border border-amber-100/10 object-cover"
          />

          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-amber-100">Meet Sarah</h2>
            <p className="mt-4 leading-relaxed text-amber-100/70">
              Sarah is the heart and hands behind Three Little Potters. What
              started as a hobby at the kitchen table has grown into a passion
              for creating beautiful, functional pottery that brings warmth to
              everyday life.
            </p>
            <p className="mt-4 leading-relaxed text-amber-100/70">
              Every piece is handcrafted on the wheel, glazed with care, and
              fired to perfection. From mugs that fit just right in your hands
              to bowls that make every meal feel special — each creation carries
              a piece of Sarah&apos;s story.
            </p>
            <p className="mt-4 leading-relaxed text-amber-100/70">
              When she&apos;s not at the wheel, Sarah shares her journey on
              YouTube and Instagram, inspiring others to get their hands dirty
              and discover the joy of clay.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mt-20 grid gap-8 sm:grid-cols-3">
          {[
            { title: "Handmade", desc: "Every piece is shaped by hand on the potter's wheel — no two are alike." },
            { title: "With Love", desc: "Made with intention and care, from wedging the clay to the final glaze." },
            { title: "For You", desc: "Pottery that's meant to be used, loved, and passed down." },
          ].map((v) => (
            <div
              key={v.title}
              className="rounded-2xl border border-amber-100/10 bg-black/40 p-6 backdrop-blur-sm"
            >
              <h3 className="text-lg font-bold text-amber-100">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-amber-100/60">{v.desc}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </Component>
  );
}
