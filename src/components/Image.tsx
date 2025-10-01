"use client";
import { Image as IkImage } from "@imagekit/next";
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
  return (
    <IkImage
      urlEndpoint={urlEndpoint}
      src={src}
      width={w}
      height={h}
      alt={alt}
      className={className}
      {...(tr
        ? { transformation: [{ width: `${w}`, height: `${h}` }] }
        : { width: w, height: h })}
    />
  );
};

export default Image;
