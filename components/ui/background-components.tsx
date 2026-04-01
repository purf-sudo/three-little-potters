"use client";

export const Component = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="min-h-screen w-full relative bg-black">
      {/* Looping Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 z-0 h-full w-full object-cover opacity-30"
      >
        <source src="/ThreeLittlePottersBackground.mp4" type="video/mp4" />
      </video>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};
