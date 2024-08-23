"use client";
import Image, { StaticImageData } from "next/image";
import React, { useEffect, useState } from "react";

interface FadeInImageProps {
  src: StaticImageData;
  delay: number;
  className: string;
}

const FadeInImage: React.FC<FadeInImageProps> = ({ src, delay, className }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timeout);
  }, [delay]);

  return (
    <Image
      src={src}
      width={1000}
      height={1200}
      alt=""
      className={`${className} transition-opacity duration-1000 ease-in ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    />
  );
};

export default FadeInImage;
