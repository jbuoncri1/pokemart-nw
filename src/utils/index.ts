import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const mockData = {
  banners: [
    {
      id: 1,
      setCode: "sv09",
      name: "Surging Sparks",
      image: "src/assets/images/banners/surging_sparks.jpeg",
    },
    {
      id: 2,
      setCode: "sv08",
      name: "Stellar Crown",
      image: "src/assets/images/banners/stellar_crown.jpeg",
    },
    {
      id: 3,
      setCode: "sv06",
      name: "Twilight Masquerade",
      image: "src/assets/images/banners/twilight_masquerade.jpeg",
    },
  ],
};
