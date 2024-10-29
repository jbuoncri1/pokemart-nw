import React from "react";

interface BannerProps {
  src: string;
  alt: string;
}

const Banner: React.FC<BannerProps> = ({ src, alt }) => {
  return (
    <div className="cursor-pointer relative">
      <div
        style={{
          width: "100%",
          height: "12rem",
          position: "absolute",
          padding: "4rem",
          backgroundImage: "linear-gradient(to right, black, transparent)",
        }}
      >
        <p className="text-white">Surging Sparks</p>
      </div>
      <img
        src={src}
        alt={alt}
        className="top-0 w-full z-0 h-48 object-cover block"
      />
    </div>
  );
};

export default Banner;
