import NextImage from "next/image";
import React from "react";

const ImageEditor = ({
  onClose,
  previewURL,
  settings,
  setSettings,
}: {
  onClose: () => void;
  previewURL: string;
  settings: {
    type: "original" | "wide" | "square";
    sensitive: boolean;
  };
  setSettings: React.Dispatch<
    React.SetStateAction<{
      type: "original" | "wide" | "square";
      sensitive: boolean;
    }>
  >;
}) => {
  return (
    <div className='fixed w-screen h-screen left-0 top-0 bg-black bg-opacity-75 z-10 flex items-center justify-center'>
      <div className='bg-black rounded-xl p-12 flex flex-col gap-4'>
        {/* TOP */}
        <div className='flex justify-between items-center'>
          <div className='flex items-center gap-8'>
            <svg
              width={24}
              onClick={onClose}
              className='cursor-pointer'
              viewBox='0 0 24 24'>
              <path
                fill='#e7e9ea'
                d='M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z'
              />
            </svg>
            <h1 className='text-xl font-bold'>Media Settings</h1>
          </div>
          <button className='py-2 px-4 rounded-full bg-white text-black font-bold'>
            save
          </button>
        </div>
        {/* IMAGE CONTAINER */}
        <div className='w-[600px] h-[600px] flex items-center'>
          <NextImage
            src={previewURL}
            width={600}
            height={600}
            alt=''
            className={`w-full ${
              settings.type === "original"
                ? "h-full object-contain"
                : settings.type === "square"
                ? "aspect-square object-cover"
                : "aspect-video object-cover"
            }`}
          />
        </div>
        {/* SETTINGS */}
        <div className=''></div>
      </div>
    </div>
  );
};

export default ImageEditor;
