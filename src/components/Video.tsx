"use client";
import { Video as IKVideo } from "@imagekit/next";
const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

type VideoType = {
  src: string;
  className?: string;
};

const Video = ({ src, className }: VideoType) => {
  return (
    <IKVideo
      urlEndpoint={urlEndpoint}
      src={src}
      alt='Video'
      className={className}
      transformation={[
        {
          width: 1920,
          height: 1080,
          quality: 90,
          overlay: {
            type: "text",
            text: "@hasib98",
            transformation: [
              { fontSize: 80, fontColor: "FF0000" }, // Specify font size and color of the text
            ],
          },
        },
      ]}
      controls
    />
  );
};

export default Video;
