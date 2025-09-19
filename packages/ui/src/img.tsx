import React from "react";

type Props = {
  src: string;
  width: number;
  height: number;
  alt: string;
  className?: string;
};

export function Img({ src, width, height, alt, className }: Props) {
  return (
    <img
      src={src}
      width={width}
      height={height}
      alt={alt}
      className={className}
      loading="lazy"
    />
  );
}
