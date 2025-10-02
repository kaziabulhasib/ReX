"use client";

import React, { useState } from "react";
import Image from "./Image";
import { shareActions } from "@/actions";

const Share = () => {
  const [media, setMedia] = useState<File | null>(null);
  const handleMediaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setMedia(e.target.files[0]);
    }
  };
  return (
    <form action={shareActions} className='p-4 flex  gap-4'>
      {/* AVATAR  */}
      <div className='relative w-10 h-10 rounded-full overflow-hidden'>
        <Image src='/general/avatar.png' alt='' w={100} h={100} tr={true} />
      </div>
      {/* INPUT  */}
      <div className='flex flex-col flex-1 gap-4'>
        <input
          type='text'
          name='desc'
          placeholder="What's happening?"
          className=' bg-transparent outline-none placeholder:text-textGray text-xl'
        />
        {/* ICONS & buttons  */}
        <div className='flex justify-between items-center gap-4 flex-wrap'>
          {/* ICONS  */}
          <div className='flex gap-4 flex-wrap'>
            <input
              type='file'
              name='file'
              onChange={handleMediaChange}
              className='hidden'
              id='file'
            />
            <label htmlFor='file'>
              <Image
                src='/icons/image.svg'
                alt=''
                w={20}
                h={20}
                className='cursor-pointer'
              />
            </label>
            <Image
              src='/icons/gif.svg'
              alt=''
              w={20}
              h={20}
              className='cursor-pointer'
            />
            <Image
              src='/icons/poll.svg'
              alt=''
              w={20}
              h={20}
              className='cursor-pointer'
            />
            <Image
              src='/icons/emoji.svg'
              alt=''
              w={20}
              h={20}
              className='cursor-pointer'
            />
            <Image
              src='/icons/schedule.svg'
              alt=''
              w={20}
              h={20}
              className='cursor-pointer'
            />
            <Image
              src='/icons/location.svg'
              alt=''
              w={20}
              h={20}
              className='cursor-pointer'
            />
          </div>
          <button className='bg-white text-black font-bold rounded-full px-4 py-2 '>
            Post
          </button>
        </div>
      </div>
    </form>
  );
};

export default Share;
