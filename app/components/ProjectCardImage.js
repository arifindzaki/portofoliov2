'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function ProjectCardImage({ src, images, alt, className }) {
  const cardImages = images?.length ? images : [src];
  const imageCount = cardImages.length;
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    if (imageCount < 2) {
      return undefined;
    }

    const interval = setInterval(() => {
      setActiveImageIndex((currentIndex) => (currentIndex + 1) % imageCount);
    }, 4000);

    return () => clearInterval(interval);
  }, [imageCount]);

  return cardImages.map((image, index) => (
    <Image
      key={index}
      src={image}
      alt={index === activeImageIndex ? alt : ''}
      aria-hidden={index !== activeImageIndex}
      fill
      className={`${className} absolute inset-0 transition-[opacity,filter,transform] duration-700 ease-in-out ${
        index === activeImageIndex
          ? 'scale-100 opacity-100 blur-0'
          : 'scale-[1.02] opacity-0 blur-sm'
      }`}
    />
  ));
}
