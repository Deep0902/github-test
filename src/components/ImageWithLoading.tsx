"use client";

import Image from "next/image";
import { useState } from "react";

interface ImageWithLoadingProps {
  src: string;
  alt: string;
}

export default function ImageWithLoading({ src, alt }: ImageWithLoadingProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && (
        <div className="flex items-center justify-center w-full h-full rounded">
          <div className="relative inline-block w-12 h-12">
            <div className="absolute w-12 h-12 rounded-full border-4 border-t-white border-r-transparent border-b-transparent border-l-transparent animate-spin"></div>
            <div className="absolute w-12 h-12 rounded-full border-4 border-t-transparent border-r-transparent border-b-transparent border-l-[#ec2127] animate-[spin_0.5s_linear_infinite_reverse]"></div>
          </div>
        </div>
      )}
      <Image
        className="object-contain"
        src={src}
        alt={alt}
        fill={true}
        loading="lazy"
        sizes="(max-width: 600px) 100vw, 33vw"
        onLoad={() => setIsLoading(false)}
        style={{ opacity: isLoading ? 0 : 1, transition: "opacity 0.3s" }}
      />
    </>
  );
}
