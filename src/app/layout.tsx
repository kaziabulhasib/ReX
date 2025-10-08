import LeftBar from "@/components/LeftBar";
import "./globals.css";
import RightBar from "@/components/RightBar";

import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "Rex Social",
  description: "Next.js social media application project",
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <ClerkProvider>
        <body>
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
          {/* with grid  */}
          {/* <div className='max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl xxl:max-w-screen-xxl mx-auto grid grid-cols-[auto_1fr] lg:grid-cols-[auto_1fr_auto] gap-0'>
          <div className='px-2 xsm:px-4 xxl:px-8'>
            <LeftBar />
          </div>
          <div className='lg:min-w-[600px] border-x-[1px] border-borderGray overflow-y-auto'>
            {children}
            {modal}
          </div>
          <div className='hidden lg:block ml-4 md:ml-8'>
            <RightBar />
          </div>
        </div> */}
          {/* with grid end  */}
        </body>
      </ClerkProvider>
    </html>
  );
}
