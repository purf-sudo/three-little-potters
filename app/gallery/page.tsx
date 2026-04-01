import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Component } from "@/components/ui/background-components";

const pieces = [
  { src: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&h=600&fit=crop", title: "Rustic Bowl" },
  { src: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=600&h=600&fit=crop", title: "Glazed Vase" },
  { src: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=600&h=600&fit=crop", title: "Stoneware Mug" },
  { src: "https://images.unsplash.com/photo-1493106641515-6b5631de4bb9?w=600&h=600&fit=crop", title: "Earthen Planter" },
  { src: "https://images.unsplash.com/photo-1604931668623-9b5e8f15720f?w=600&h=600&fit=crop", title: "Speckled Bowl" },
  { src: "https://images.unsplash.com/photo-1609873814058-a8928924184a?w=600&h=600&fit=crop", title: "Ceramic Pitcher" },
  { src: "https://images.unsplash.com/photo-1612293009389-7f9e5f9b9e61?w=600&h=600&fit=crop", title: "Tea Set" },
  { src: "https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=600&h=600&fit=crop", title: "Raku Fired Pot" },
  { src: "https://images.unsplash.com/photo-1606293459339-aa14e553e316?w=600&h=600&fit=crop", title: "Hand-Carved Plate" },
];

export default function GalleryPage() {
  return (
    <Component>
      <Navbar />
      <main className="mx-auto max-w-6xl px-6 pt-28 pb-16">
        <h1 className="text-4xl font-bold text-amber-100">Gallery</h1>
        <p className="mt-2 text-amber-100/60">
          Browse Sarah&apos;s handcrafted pottery collection
        </p>

        <div className="mt-10 columns-1 gap-6 sm:columns-2 lg:columns-3">
          {pieces.map((piece) => (
            <div
              key={piece.title}
              className="mb-6 break-inside-avoid overflow-hidden rounded-2xl border border-amber-100/10 bg-black/40 backdrop-blur-sm"
            >
              <img
                src={piece.src}
                alt={piece.title}
                className="w-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-amber-100">{piece.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </Component>
  );
}
