"use client";

export const Component = () => {
  return (
    <div className="min-h-screen w-full relative bg-black">
      {/* Looping Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 z-0 h-full w-full object-cover opacity-40"
      >
        <source src="/ThreeLittlePottersBackground.mp4" type="video/mp4" />
      </video>

      {/* Content goes here */}
      <div className="relative z-10">
        {/* Your site content */}
      </div>
    </div>
  );
};
