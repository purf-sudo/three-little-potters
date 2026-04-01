import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Component } from "@/components/ui/background-components";
import { ExternalLink } from "lucide-react";

const products = [
  {
    src: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&h=600&fit=crop",
    title: "Rustic Bowl",
    price: "$35",
  },
  {
    src: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=600&h=600&fit=crop",
    title: "Glazed Vase",
    price: "$48",
  },
  {
    src: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=600&h=600&fit=crop",
    title: "Stoneware Mug",
    price: "$24",
  },
  {
    src: "https://images.unsplash.com/photo-1493106641515-6b5631de4bb9?w=600&h=600&fit=crop",
    title: "Earthen Planter",
    price: "$42",
  },
  {
    src: "https://images.unsplash.com/photo-1604931668623-9b5e8f15720f?w=600&h=600&fit=crop",
    title: "Speckled Bowl",
    price: "$32",
  },
  {
    src: "https://images.unsplash.com/photo-1609873814058-a8928924184a?w=600&h=600&fit=crop",
    title: "Ceramic Pitcher",
    price: "$55",
  },
];

export default function ShopPage() {
  return (
    <Component>
      <Navbar />
      <main className="mx-auto max-w-6xl px-6 pt-28 pb-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold text-amber-100">Shop</h1>
            <p className="mt-2 text-amber-100/60">
              Browse and purchase on Etsy
            </p>
          </div>
          <a
            href="https://www.etsy.com/shop/ThreeLittlePotters/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-5 py-2.5 text-sm font-semibold text-black transition-colors hover:bg-amber-200"
          >
            Visit Etsy Shop <ExternalLink size={16} />
          </a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((item) => (
            <a
              key={item.title}
              href="https://www.etsy.com/shop/ThreeLittlePotters/"
              target="_blank"
              rel="noopener noreferrer"
              className="group overflow-hidden rounded-2xl border border-amber-100/10 bg-black/40 backdrop-blur-sm transition-colors hover:border-amber-100/30"
            >
              <img
                src={item.src}
                alt={item.title}
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="flex items-center justify-between p-4">
                <div>
                  <h3 className="text-lg font-semibold text-amber-100">{item.title}</h3>
                  <p className="text-sm text-amber-200">{item.price}</p>
                </div>
                <ExternalLink size={16} className="text-amber-100/40 group-hover:text-amber-200" />
              </div>
            </a>
          ))}
        </div>
      </main>
      <Footer />
    </Component>
  );
}
