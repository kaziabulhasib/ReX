import LeftBar from "@/components/LeftBar";

import RightBar from "@/components/RightBar";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rex Social",
  description: "Next.js social media application project",
};

export default function BoardLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <div className=' max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl xxl:max-w-screen-xxl mx-auto flex '>
      <div className='px-2 xsm:px-4 xxl:px-8  '>
        <LeftBar />
      </div>
      <div className='flex-1 lg:min-w-[600px] border-x-[1px] border-borderGray h-screen hide-scrollbar overflow-y-auto '>
        {children}
        {modal}
      </div>
      <div className='hidden lg:flex ml-4 md:ml-8 flex-1 '>
        <RightBar />
      </div>
    </div>
  );
}
