import Image from "next/image";

type Props = {
  src: string;
  width: number;
  height: number;
  alt: string;
  className?: string;
};

export function Img({ src, width, height, alt, className }: Props) {
  return (
    <Image
      src={src}
      width={width}
      height={height}
      alt={alt}
      className={className}
    />
  );
}
