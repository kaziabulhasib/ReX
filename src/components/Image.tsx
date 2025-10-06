"use client";
import { Image as IkImage } from "@imagekit/next";
import NextImg from "next/image";
import { useState } from "react";

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
  const [loaded, setLoaded] = useState(false);
  if (src.startsWith("/")) {
    return (
      <NextImg src={src} width={w} height={h} alt={alt} className={className} />
    );
  }

  return (
    <IkImage
      urlEndpoint={urlEndpoint}
      src={src}
      // to do : low quality image placeholder
      {...(tr
        ? { transformation: [{ width: w?.toString(), height: h?.toString() }] }
        : { width: w, height: h })}
      alt={alt}
      className={className}
    />
  );
};

export default Image;
