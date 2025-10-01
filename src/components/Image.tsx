"use client";
import { Image as IkImage } from "@imagekit/next";
import NextImg from "next/image";

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

type ImageType = {
  src: string;
  w?: number;
  h?: number;
  alt: string;
  className?: string;
  tr?: boolean;
};

const Image = ({ src, w, h, alt, className, tr }: ImageType) => {
  if (src.startsWith("/")) {
    return (
      <NextImg src={src} width={w} height={h} alt={alt} className={className} />
    );
  }

  return (
    <IkImage
      urlEndpoint={urlEndpoint}
      src={src}
      alt={alt}
      className={className}
      {...(tr
        ? { transformation: [{ width: w?.toString(), height: h?.toString() }] }
        : { width: w, height: h })}
    />
  );
};

export default Image;
